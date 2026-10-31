import React from 'react';

/**
 * Hero artwork: a block of flats, a kothi, a domed gateway and a second kothi on Ranjit Avenue.
 * Buildings rise from the ground one after another, windows light up, clouds and birds drift,
 * and the sun turns slowly. All motion is CSS (see styles.css) and stops for reduced-motion users.
 */
export default function Skyline() {
  const windows = [];
  for (let r = 0; r < 5; r += 1) {
    for (let c = 0; c < 3; c += 1) {
      windows.push(
        <rect
          key={`${r}-${c}`}
          className="win"
          style={{ '--t': `${((r * 7 + c * 5) % 9) * 0.6}s` }}
          x={46 + c * 32}
          y={138 + r * 32}
          width="10"
          height="14"
          rx="1.5"
        />
      );
    }
  }

  const rays = Array.from({ length: 12 }, (_, i) => (
    <line key={i} x1="455" y1="28" x2="455" y2="18" transform={`rotate(${i * 30} 455 78)`} />
  ));

  return (
    <svg className="skyline" viewBox="0 0 560 360" role="img" aria-label="Illustration of houses and a domed gateway on Ranjit Avenue">
      <g className="sun">
        <g className="sun-rays" stroke="var(--gold)" strokeWidth="4" strokeLinecap="round">{rays}</g>
        <circle className="sun-disc" cx="455" cy="78" r="36" fill="var(--gold)" />
      </g>

      <g className="cloud c1" fill="var(--surface)" opacity=".92">
        <ellipse cx="90" cy="70" rx="34" ry="14" />
        <ellipse cx="72" cy="62" rx="18" ry="12" />
        <ellipse cx="108" cy="60" rx="20" ry="14" />
      </g>
      <g className="cloud c2" fill="var(--surface)" opacity=".8">
        <ellipse cx="300" cy="44" rx="28" ry="11" />
        <ellipse cx="286" cy="38" rx="14" ry="10" />
        <ellipse cx="316" cy="37" rx="16" ry="11" />
      </g>

      <g className="bird b1" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round">
        <path d="M0 0q6-8 12 0q6-8 12 0" />
      </g>
      <g className="bird b2" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round">
        <path d="M0 0q5-6 10 0q5-6 10 0" />
      </g>

      <path d="M0 300 Q140 250 280 290 T560 270 V360 H0z" fill="var(--sky)" />

      <g className="rise" style={{ '--d': 100 }}>
        <rect x="30" y="120" width="110" height="190" fill="var(--teal)" />
        <rect x="30" y="112" width="110" height="8" fill="var(--ink)" />
        {windows}
      </g>

      <g className="rise" style={{ '--d': 260 }}>
        <path d="M158 310V205l60-48 60 48v105z" fill="var(--surface)" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
        <rect x="196" y="250" width="44" height="60" fill="var(--gold)" />
        <rect x="172" y="218" width="22" height="26" fill="var(--teal)" />
        <rect x="242" y="218" width="22" height="26" fill="var(--teal)" />
      </g>

      <g className="rise" style={{ '--d': 420 }}>
        <rect x="300" y="215" width="90" height="95" fill="var(--surface)" stroke="var(--ink)" strokeWidth="3" />
        <path d="M308 215a37 37 0 0 1 74 0z" fill="var(--gold)" stroke="var(--ink)" strokeWidth="3" />
        <path d="M345 178v-16" stroke="var(--ink)" strokeWidth="3" />
        <path d="M345 162l-4-6 4-6 4 6z" fill="var(--gold)" stroke="var(--ink)" strokeWidth="3" />
        <path d="M322 310v-40a23 23 0 0 1 46 0v40z" fill="var(--teal)" />
        <circle className="glint" cx="345" cy="153" r="7" fill="var(--gold)" />
      </g>

      <g className="rise" style={{ '--d': 580 }}>
        <path d="M408 310V230h110v80z" fill="var(--surface)" stroke="var(--ink)" strokeWidth="3" />
        <path d="M400 232l63-42 63 42z" fill="var(--ink)" />
        <rect x="443" y="262" width="40" height="48" fill="var(--teal)" />
        <rect x="420" y="246" width="16" height="20" fill="var(--gold)" />
        <rect x="490" y="246" width="16" height="20" fill="var(--gold)" />
      </g>

      <rect x="0" y="310" width="560" height="6" fill="var(--ink)" />
      <path className="road" d="M0 336h560" stroke="var(--ink)" strokeWidth="2" strokeDasharray="22 16" fill="none" />
    </svg>
  );
}
