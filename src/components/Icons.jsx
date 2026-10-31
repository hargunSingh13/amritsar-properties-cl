import React from 'react';

const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, 'aria-hidden': true };
const p = { pathLength: 1 };

export const Pin = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" {...base}>
    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const Phone = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" {...base}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

export const Clock = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const Check = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" {...base} strokeWidth="2.4">
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

export const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" {...base} strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* Service icons: every shape has pathLength so it can redraw itself on hover. */
export const HomeIcon = () => (
  <svg width="34" height="34" viewBox="0 0 32 32" {...base}>
    <path {...p} d="M4 15L16 5l12 10" />
    <path {...p} d="M7 13v14h18V13" />
    <path {...p} d="M13 27v-8h6v8" />
  </svg>
);

export const KeyIcon = () => (
  <svg width="34" height="34" viewBox="0 0 32 32" {...base}>
    <circle {...p} cx="11" cy="16" r="5" />
    <path {...p} d="M16 16h13" />
    <path {...p} d="M24 16v5M28 16v3" />
  </svg>
);

export const ShopIcon = () => (
  <svg width="34" height="34" viewBox="0 0 32 32" {...base}>
    <path {...p} d="M4 12l2-7h20l2 7H4z" />
    <path {...p} d="M6 12v15h20V12" />
    <path {...p} d="M12 27v-8h8v8" />
  </svg>
);

export const PlotIcon = () => (
  <svg width="34" height="34" viewBox="0 0 32 32" {...base}>
    <path {...p} d="M4 24L10 8l14-3 5 15-13 6z" />
    <path {...p} d="M10 8l6 18" />
    <path {...p} d="M24 5l-8 21" />
  </svg>
);

export const DocIcon = () => (
  <svg width="34" height="34" viewBox="0 0 32 32" {...base}>
    <path {...p} d="M8 4h12l6 6v18H8z" />
    <path {...p} d="M20 4v6h6" />
    <path {...p} d="M12 16h10M12 21h10" />
  </svg>
);

export const ChartIcon = () => (
  <svg width="34" height="34" viewBox="0 0 32 32" {...base}>
    <path {...p} d="M4 27h24" />
    <path {...p} d="M8 22v-6" />
    <path {...p} d="M14 22V9" />
    <path {...p} d="M20 22v-9" />
    <path {...p} d="M26 22V6" />
  </svg>
);

export function Logo() {
  return (
    <svg className="logo" width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
      <rect width="34" height="34" rx="6" fill="var(--teal)" />
      <path d="M6 27V16l6-5 6 5v11M18 27V14l5-4 5 4v13" fill="none" stroke="var(--teal-ink)" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="23" cy="6.5" r="2.2" fill="var(--gold)" />
    </svg>
  );
}
