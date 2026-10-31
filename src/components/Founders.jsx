import React, { useState } from 'react';
import { SITE, isRealNumber, digitsOnly } from '../data.js';
import Tilt from './Tilt.jsx';

function Portrait({ f }) {
  if (f.photo) return <img src={f.photo} alt={`Portrait of ${f.name}`} />;
  return (
    <svg viewBox="0 0 150 200" role="img" aria-label={`Placeholder portrait of ${f.name}`}>
      <rect width="150" height="200" fill="var(--sky)" />
      <circle className="halo" cx="75" cy="82" r="42" fill="none" stroke="var(--gold)" strokeWidth="3" />
      <circle cx="75" cy="78" r="30" fill="var(--teal)" />
      <path d="M20 200c0-42 24-66 55-66s55 24 55 66z" fill="var(--teal)" />
      <text x="75" y="88" textAnchor="middle" fontSize="26" fill="var(--teal-ink)" fontFamily="var(--font-display)">
        {f.initials}
      </text>
    </svg>
  );
}

function Founder({ f, side }) {
  const [copied, setCopied] = useState(false);
  const real = isRealNumber(f.phone);

  const copy = () => {
    const done = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    };
    try {
      navigator.clipboard.writeText(f.phone).then(done, () => {});
    } catch (e) {
      /* clipboard unavailable */
    }
  };

  return (
    <div data-reveal={side}>
      <Tilt>
        <article className="fcard">
          <div className="portrait"><Portrait f={f} /></div>
          <div className="info">
            <div className="role">{f.role}</div>
            <h3>{f.name}</h3>
            <p>{f.bio}</p>
            <div className="num">
              <code>{f.phone}</code>
              {real && <button className="mini" onClick={copy}>{copied ? 'Copied' : 'Copy'}</button>}
              {real && <a className="mini" href={`tel:+${digitsOnly(f.phone)}`}>Call</a>}
              {real && (
                <a className="mini" href={`https://wa.me/${digitsOnly(f.phone)}`} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              )}
            </div>
          </div>
        </article>
      </Tilt>
    </div>
  );
}

export default function Founders() {
  return (
    <section id="founders" className="founders">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <div className="eyebrow">Meet the founders</div>
          <h2>Two property consultants, one office on Ranjit Avenue</h2>
          <p>Call either of us directly. We take every enquiry ourselves.</p>
        </div>

        <div className="f-grid">
          {SITE.founders.map((f, i) => (
            <Founder key={f.name} f={f} side={i % 2 === 0 ? 'left' : 'right'} />
          ))}
        </div>
      </div>
    </section>
  );
}
