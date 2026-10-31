import React, { useState } from 'react';
import { LISTINGS, FILTERS } from '../data.js';
import { Arrow } from './Icons.jsx';

function Art({ kind }) {
  let body;
  if (kind === 'House') {
    body = (
      <>
        <path className="a-roof" d="M70 120V70l90-44 90 44v50z" fill="var(--surface)" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
        <rect x="140" y="84" width="40" height="36" fill="var(--gold)" />
        <rect x="90" y="76" width="24" height="24" fill="var(--teal)" />
        <rect x="206" y="76" width="24" height="24" fill="var(--teal)" />
      </>
    );
  } else if (kind === 'Flat') {
    const wins = [];
    for (let r = 0; r < 3; r += 1) {
      for (let c = 0; c < 3; c += 1) {
        wins.push(<rect key={`${r}${c}`} className="win" style={{ '--t': `${(r * 3 + c) * 0.5}s` }} x={114 + c * 36} y={30 + r * 28} width="20" height="18" />);
      }
    }
    body = (
      <>
        <rect x="100" y="20" width="120" height="100" fill="var(--teal)" />
        {wins}
        <rect x="148" y="92" width="24" height="28" fill="var(--gold)" />
      </>
    );
  } else if (kind === 'Shop') {
    body = (
      <>
        <rect x="60" y="50" width="200" height="70" fill="var(--surface)" stroke="var(--ink)" strokeWidth="3" />
        <path d="M52 50l12-24h192l12 24z" fill="var(--gold)" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
        <rect x="80" y="70" width="80" height="50" fill="var(--teal)" />
        <rect x="180" y="70" width="60" height="26" fill="var(--sky)" />
      </>
    );
  } else {
    body = (
      <>
        <path d="M50 124l30-70 170-10 28 80z" fill="var(--sky)" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" strokeDasharray="8 6" />
        <g className="flag">
          <path d="M160 50v30" stroke="var(--teal)" strokeWidth="4" />
          <path d="M160 50l22 7-22 8z" fill="var(--gold)" />
        </g>
        <circle cx="160" cy="96" r="4" fill="var(--ink)" />
      </>
    );
  }
  return (
    <svg viewBox="0 0 320 160" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect x="0" y="118" width="320" height="42" fill="var(--line)" />
      {body}
    </svg>
  );
}

export default function Properties() {
  const [filter, setFilter] = useState('All');
  const list = LISTINGS.filter((l) => filter === 'All' || l.filter === filter);

  return (
    <section id="properties" className="listings">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <div className="eyebrow">Properties</div>
          <h2>What we help people find</h2>
          <p>Ask us for current availability in the area you like. Details and prices are shared on a call or at the office.</p>
        </div>

        <div className="filters" role="group" aria-label="Filter property type" data-reveal>
          {FILTERS.map((f) => (
            <button key={f} className="chip" aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>

        <div className="cards" key={filter}>
          {list.map((l, i) => (
            <article className="card" key={l.title + l.loc} style={{ '--i': i }}>
              <div className="art"><Art kind={l.type} /></div>
              <div className="body">
                <div className="tag">Sample · {l.filter}</div>
                <h3>{l.title}</h3>
                <div className="loc">{l.loc}, Amritsar</div>
                <div className="meta">
                  {[l.a, l.b, l.c].map((m) => <span key={m}>{m}</span>)}
                </div>
                <div className="price">
                  <span>Price on request</span>
                  <a href="#contact">Enquire <Arrow /></a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="note">
          These cards show the kinds of property we handle. They are examples, not live listings. Replace them with
          real properties, photos and prices in <code>src/data.js</code>.
        </p>
      </div>
    </section>
  );
}
