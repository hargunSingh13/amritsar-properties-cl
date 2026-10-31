import { useEffect, useState } from 'react';

/** Adds .is-in to every [data-reveal] element as it scrolls into view. */
export function useRevealAll() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/** Publishes --sy (scroll px) and --p (0..1 page progress) and reports a few scroll flags. */
export function useScrollEffects() {
  const [scrolled, setScrolled] = useState(false);
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty('--sy', String(Math.min(y, 900)));
      root.style.setProperty('--p', max > 0 ? String(Math.min(y / max, 1)) : '0');
      setScrolled(y > 12);
      setShowFab(y > 640);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return { scrolled, showFab };
}
