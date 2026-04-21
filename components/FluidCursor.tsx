'use client';
import { useEffect } from 'react';

import fluidCursor from '@/hooks/use-FluidCursor';

const FluidCursor = () => {
  useEffect(() => {
    fluidCursor();
  }, []);

  return (
    <canvas
      id="fluid"
      className="pointer-events-none fixed inset-0 z-0 h-screen w-screen"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
};
export default FluidCursor;
