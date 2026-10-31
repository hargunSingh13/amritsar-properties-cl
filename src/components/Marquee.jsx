import React from 'react';
import { MARQUEE } from '../data.js';

export default function Marquee() {
  // The list is rendered twice so the loop never shows a gap.
  const row = (suffix) =>
    MARQUEE.map((t) => (
      <span key={t + suffix} className="m-item">
        <i aria-hidden="true" />
        {t}
      </span>
    ));

  return (
    <div className="strip" aria-label="What we deal in">
      <div className="track">
        <div className="set">{row('a')}</div>
        <div className="set" aria-hidden="true">{row('b')}</div>
      </div>
    </div>
  );
}
