import React, { useRef } from 'react';

/** Gentle 3D tilt that follows a mouse or pen. Does nothing on touch. */
export default function Tilt({ children, className = '', max = 5 }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el || e.pointerType === 'touch') return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--ry', `${(x * max * 2).toFixed(2)}deg`);
    el.style.setProperty('--rx', `${(-y * max * 2).toFixed(2)}deg`);
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--rx', '0deg');
  };

  return (
    <div ref={ref} className={`tilt ${className}`} onPointerMove={onMove} onPointerLeave={reset}>
      {children}
    </div>
  );
}
