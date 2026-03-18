export function getScrollBehavior(): ScrollBehavior {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'smooth';
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
}

export function scrollToId(id: string) {
  if (typeof document === 'undefined') return;
  document.getElementById(id)?.scrollIntoView({ behavior: getScrollBehavior(), block: 'start' });
}

export function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, '');
  if (!id) return;
  scrollToId(id);
}

export function scrollToTop() {
  if (typeof window === 'undefined') return;
  window.scrollTo({ top: 0, behavior: getScrollBehavior() });
}
