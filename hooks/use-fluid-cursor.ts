'use client';

import { useEffect } from 'react';

const BASE_VERT = `
precision highp float;
attribute vec2 aPos;
varying vec2 vUv;
void main () {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

const ADVECT_FRAG = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 texelSize;
uniform float dt;
uniform float dissipation;
void main () {
  vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
  gl_FragColor = dissipation * texture2D(uSource, coord);
  gl_FragColor.a = 1.0;
}`;

const DYE_SPLAT_FRAG = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uTarget;
uniform vec2 uPoint;
uniform vec3 uColor;
uniform float uRadius;
uniform float uAspect;
void main () {
  vec2 p = vUv - uPoint;
  p.x *= uAspect;
  float d = exp(-dot(p,p) / uRadius);
  vec3 base = texture2D(uTarget, vUv).rgb;
  gl_FragColor = vec4(base + d * uColor, 1.0);
}`;

const VEL_SPLAT_FRAG = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uTarget;
uniform vec2 uPoint;
uniform vec2 uForce;
uniform float uRadius;
uniform float uAspect;
void main () {
  vec2 p = vUv - uPoint;
  p.x *= uAspect;
  float d = exp(-dot(p,p) / uRadius);
  vec2 base = texture2D(uTarget, vUv).xy;
  gl_FragColor = vec4(base + d * uForce, 0.0, 1.0);
}`;

const DIVERGENCE_FRAG = `
precision mediump float;
varying vec2 vUv;
uniform sampler2D uVelocity;
uniform vec2 texelSize;
void main () {
  float L = texture2D(uVelocity, vUv - vec2(texelSize.x,0.0)).x;
  float R = texture2D(uVelocity, vUv + vec2(texelSize.x,0.0)).x;
  float T = texture2D(uVelocity, vUv + vec2(0.0,texelSize.y)).y;
  float B = texture2D(uVelocity, vUv - vec2(0.0,texelSize.y)).y;
  gl_FragColor = vec4(0.5*(R-L+T-B), 0.0, 0.0, 1.0);
}`;

const PRESSURE_FRAG = `
precision mediump float;
varying vec2 vUv;
uniform sampler2D uPressure;
uniform sampler2D uDivergence;
uniform vec2 texelSize;
void main () {
  float L = texture2D(uPressure, vUv - vec2(texelSize.x,0.0)).x;
  float R = texture2D(uPressure, vUv + vec2(texelSize.x,0.0)).x;
  float T = texture2D(uPressure, vUv + vec2(0.0,texelSize.y)).x;
  float B = texture2D(uPressure, vUv - vec2(0.0,texelSize.y)).x;
  float div = texture2D(uDivergence, vUv).x;
  gl_FragColor = vec4((L+R+B+T-div)*0.25, 0.0, 0.0, 1.0);
}`;

const GRADIENT_SUBTRACT_FRAG = `
precision mediump float;
varying vec2 vUv;
uniform sampler2D uPressure;
uniform sampler2D uVelocity;
uniform vec2 texelSize;
void main () {
  float L = texture2D(uPressure, vUv - vec2(texelSize.x,0.0)).x;
  float R = texture2D(uPressure, vUv + vec2(texelSize.x,0.0)).x;
  float T = texture2D(uPressure, vUv + vec2(0.0,texelSize.y)).x;
  float B = texture2D(uPressure, vUv - vec2(0.0,texelSize.y)).x;
  vec2 vel = texture2D(uVelocity, vUv).xy;
  vel -= vec2(R-L, T-B)*0.5;
  gl_FragColor = vec4(vel, 0.0, 1.0);
}`;

const DISPLAY_FRAG = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uTexture;
void main () {
  vec3 c = texture2D(uTexture, vUv).rgb;
  float lum = dot(c, vec3(0.299,0.587,0.114));
  gl_FragColor = vec4(c, lum * 0.85);
}`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  return shader;
}

function buildProgram(gl: WebGLRenderingContext, vertex: string, fragment: string) {
  const program = gl.createProgram()!;
  gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, vertex));
  gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, fragment));
  gl.linkProgram(program);
  return program;
}

type FBO = {
  tex: WebGLTexture;
  fbo: WebGLFramebuffer;
  w: number;
  h: number;
};

function makeFBO(gl: WebGLRenderingContext, w: number, h: number, type: number): FBO {
  const tex = gl.createTexture()!;
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, type, null);

  const fbo = gl.createFramebuffer()!;
  gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
  gl.viewport(0, 0, w, h);
  gl.clear(gl.COLOR_BUFFER_BIT);

  return { tex, fbo, w, h };
}

function hsv(h: number, s: number, v: number): [number, number, number] {
  const i = Math.floor(h * 6);
  const f = h * 6 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    default:
      return [v, p, q];
  }
}

export function useFluidCursor() {
  useEffect(() => {
    const canvasElement = document.getElementById('fluid') as HTMLCanvasElement | null;
    if (!canvasElement) return;
    const canvas: HTMLCanvasElement = canvasElement;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gl = canvas.getContext('webgl', {
      alpha: true,
      premultipliedAlpha: false,
      antialias: false,
    });
    if (!gl) return;
    const ctx: WebGLRenderingContext = gl;

    const floatExt = ctx.getExtension('OES_texture_float');
    const halfExt = ctx.getExtension('OES_texture_half_float') as {
      HALF_FLOAT_OES: number;
    } | null;

    ctx.getExtension('OES_texture_float_linear');
    ctx.getExtension('OES_texture_half_float_linear');

    const textureType = floatExt
      ? ctx.FLOAT
      : halfExt
        ? halfExt.HALF_FLOAT_OES
        : ctx.UNSIGNED_BYTE;

    const aspectRatio = canvas.width / canvas.height;
    const simBase = 128;
    const dyeBase = 512;
    const simWidth = aspectRatio > 1 ? simBase : Math.round(simBase * aspectRatio);
    const simHeight = aspectRatio > 1 ? Math.round(simBase / aspectRatio) : simBase;
    const dyeWidth = aspectRatio > 1 ? dyeBase : Math.round(dyeBase * aspectRatio);
    const dyeHeight = aspectRatio > 1 ? Math.round(dyeBase / aspectRatio) : dyeBase;

    let velocity0 = makeFBO(ctx, simWidth, simHeight, textureType);
    let velocity1 = makeFBO(ctx, simWidth, simHeight, textureType);
    let dye0 = makeFBO(ctx, dyeWidth, dyeHeight, textureType);
    let dye1 = makeFBO(ctx, dyeWidth, dyeHeight, textureType);
    const divergence = makeFBO(ctx, simWidth, simHeight, textureType);
    let pressure0 = makeFBO(ctx, simWidth, simHeight, textureType);
    let pressure1 = makeFBO(ctx, simWidth, simHeight, textureType);

    const advectProgram = buildProgram(ctx, BASE_VERT, ADVECT_FRAG);
    const dyeSplatProgram = buildProgram(ctx, BASE_VERT, DYE_SPLAT_FRAG);
    const velocitySplatProgram = buildProgram(ctx, BASE_VERT, VEL_SPLAT_FRAG);
    const divergenceProgram = buildProgram(ctx, BASE_VERT, DIVERGENCE_FRAG);
    const pressureProgram = buildProgram(ctx, BASE_VERT, PRESSURE_FRAG);
    const gradientProgram = buildProgram(ctx, BASE_VERT, GRADIENT_SUBTRACT_FRAG);
    const displayProgram = buildProgram(ctx, BASE_VERT, DISPLAY_FRAG);

    const buffer = ctx.createBuffer()!;
    ctx.bindBuffer(ctx.ARRAY_BUFFER, buffer);
    ctx.bufferData(ctx.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), ctx.STATIC_DRAW);

    function bindQuad(program: WebGLProgram) {
      ctx.bindBuffer(ctx.ARRAY_BUFFER, buffer);
      const location = ctx.getAttribLocation(program, 'aPos');
      ctx.enableVertexAttribArray(location);
      ctx.vertexAttribPointer(location, 2, ctx.FLOAT, false, 0, 0);
    }

    function bindTexture(program: WebGLProgram, name: string, unit: number, texture: WebGLTexture) {
      ctx.activeTexture(ctx.TEXTURE0 + unit);
      ctx.bindTexture(ctx.TEXTURE_2D, texture);
      ctx.uniform1i(ctx.getUniformLocation(program, name), unit);
    }

    function advect(
      source: FBO,
      target: FBO,
      velocity: FBO,
      texelWidth: number,
      texelHeight: number,
      dissipation: number,
      dt: number,
    ) {
      ctx.useProgram(advectProgram);
      bindQuad(advectProgram);
      bindTexture(advectProgram, 'uVelocity', 0, velocity.tex);
      bindTexture(advectProgram, 'uSource', 1, source.tex);
      ctx.uniform2f(ctx.getUniformLocation(advectProgram, 'texelSize'), texelWidth, texelHeight);
      ctx.uniform1f(ctx.getUniformLocation(advectProgram, 'dt'), dt);
      ctx.uniform1f(ctx.getUniformLocation(advectProgram, 'dissipation'), dissipation);
      ctx.bindFramebuffer(ctx.FRAMEBUFFER, target.fbo);
      ctx.viewport(0, 0, target.w, target.h);
      ctx.drawArrays(ctx.TRIANGLE_STRIP, 0, 4);
    }

    function splat(x: number, y: number, dx: number, dy: number, color: [number, number, number]) {
      const currentAspect = canvas.width / canvas.height;

      ctx.useProgram(velocitySplatProgram);
      bindQuad(velocitySplatProgram);
      bindTexture(velocitySplatProgram, 'uTarget', 0, velocity0.tex);
      ctx.uniform2f(ctx.getUniformLocation(velocitySplatProgram, 'uPoint'), x, 1 - y);
      ctx.uniform2f(ctx.getUniformLocation(velocitySplatProgram, 'uForce'), dx * 12, -dy * 12);
      ctx.uniform1f(ctx.getUniformLocation(velocitySplatProgram, 'uRadius'), 0.0012);
      ctx.uniform1f(ctx.getUniformLocation(velocitySplatProgram, 'uAspect'), currentAspect);
      ctx.bindFramebuffer(ctx.FRAMEBUFFER, velocity1.fbo);
      ctx.viewport(0, 0, velocity1.w, velocity1.h);
      ctx.drawArrays(ctx.TRIANGLE_STRIP, 0, 4);
      [velocity0, velocity1] = [velocity1, velocity0];

      ctx.useProgram(dyeSplatProgram);
      bindQuad(dyeSplatProgram);
      bindTexture(dyeSplatProgram, 'uTarget', 0, dye0.tex);
      ctx.uniform2f(ctx.getUniformLocation(dyeSplatProgram, 'uPoint'), x, 1 - y);
      ctx.uniform3f(ctx.getUniformLocation(dyeSplatProgram, 'uColor'), color[0], color[1], color[2]);
      ctx.uniform1f(ctx.getUniformLocation(dyeSplatProgram, 'uRadius'), 0.0012);
      ctx.uniform1f(ctx.getUniformLocation(dyeSplatProgram, 'uAspect'), currentAspect);
      ctx.bindFramebuffer(ctx.FRAMEBUFFER, dye1.fbo);
      ctx.viewport(0, 0, dye1.w, dye1.h);
      ctx.drawArrays(ctx.TRIANGLE_STRIP, 0, 4);
      [dye0, dye1] = [dye1, dye0];
    }

    let animationFrameId = 0;

    function loop() {
      advect(velocity0, velocity1, velocity0, 1 / simWidth, 1 / simHeight, 0.98, 0.016);
      [velocity0, velocity1] = [velocity1, velocity0];

      ctx.useProgram(divergenceProgram);
      bindQuad(divergenceProgram);
      bindTexture(divergenceProgram, 'uVelocity', 0, velocity0.tex);
      ctx.uniform2f(ctx.getUniformLocation(divergenceProgram, 'texelSize'), 1 / simWidth, 1 / simHeight);
      ctx.bindFramebuffer(ctx.FRAMEBUFFER, divergence.fbo);
      ctx.viewport(0, 0, divergence.w, divergence.h);
      ctx.drawArrays(ctx.TRIANGLE_STRIP, 0, 4);

      ctx.bindFramebuffer(ctx.FRAMEBUFFER, pressure0.fbo);
      ctx.viewport(0, 0, pressure0.w, pressure0.h);
      ctx.clearColor(0, 0, 0, 1);
      ctx.clear(ctx.COLOR_BUFFER_BIT);

      for (let i = 0; i < 20; i++) {
        ctx.useProgram(pressureProgram);
        bindQuad(pressureProgram);
        bindTexture(pressureProgram, 'uPressure', 0, pressure0.tex);
        bindTexture(pressureProgram, 'uDivergence', 1, divergence.tex);
        ctx.uniform2f(ctx.getUniformLocation(pressureProgram, 'texelSize'), 1 / simWidth, 1 / simHeight);
        ctx.bindFramebuffer(ctx.FRAMEBUFFER, pressure1.fbo);
        ctx.viewport(0, 0, pressure1.w, pressure1.h);
        ctx.drawArrays(ctx.TRIANGLE_STRIP, 0, 4);
        [pressure0, pressure1] = [pressure1, pressure0];
      }

      ctx.useProgram(gradientProgram);
      bindQuad(gradientProgram);
      bindTexture(gradientProgram, 'uPressure', 0, pressure0.tex);
      bindTexture(gradientProgram, 'uVelocity', 1, velocity0.tex);
      ctx.uniform2f(ctx.getUniformLocation(gradientProgram, 'texelSize'), 1 / simWidth, 1 / simHeight);
      ctx.bindFramebuffer(ctx.FRAMEBUFFER, velocity1.fbo);
      ctx.viewport(0, 0, velocity1.w, velocity1.h);
      ctx.drawArrays(ctx.TRIANGLE_STRIP, 0, 4);
      [velocity0, velocity1] = [velocity1, velocity0];

      advect(dye0, dye1, velocity0, 1 / dyeWidth, 1 / dyeHeight, 0.985, 0.016);
      [dye0, dye1] = [dye1, dye0];

      ctx.bindFramebuffer(ctx.FRAMEBUFFER, null);
      ctx.viewport(0, 0, canvas.width, canvas.height);
      ctx.clearColor(0, 0, 0, 0);
      ctx.clear(ctx.COLOR_BUFFER_BIT);
      ctx.enable(ctx.BLEND);
      ctx.blendFunc(ctx.SRC_ALPHA, ctx.ONE_MINUS_SRC_ALPHA);
      ctx.useProgram(displayProgram);
      bindQuad(displayProgram);
      bindTexture(displayProgram, 'uTexture', 0, dye0.tex);
      ctx.drawArrays(ctx.TRIANGLE_STRIP, 0, 4);

      animationFrameId = requestAnimationFrame(loop);
    }

    let lastX = -1;
    let lastY = -1;
    let hue = Math.random();

    function handlePointerMove(clientX: number, clientY: number, dxFallback = 0, dyFallback = 0) {
      const normalizedX = clientX / canvas.width;
      const normalizedY = clientY / canvas.height;

      if (lastX === -1) {
        lastX = normalizedX;
        lastY = normalizedY;
      }

      const dx = normalizedX - lastX || dxFallback;
      const dy = normalizedY - lastY || dyFallback;

      lastX = normalizedX;
      lastY = normalizedY;
      hue = (hue + 0.007) % 1;

      splat(normalizedX, normalizedY, dx, dy, hsv(hue, 0.9, 1.0));
    }

    function onMouseMove(event: MouseEvent) {
      handlePointerMove(event.clientX, event.clientY);
    }

    function onTouchMove(event: TouchEvent) {
      for (const touch of Array.from(event.changedTouches)) {
        hue = (hue + 0.02) % 1;
        handlePointerMove(touch.clientX, touch.clientY, 0.01, 0.01);
      }
    }

    function onResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('resize', onResize);
    loop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', onResize);
    };
  }, []);
}
