import React from 'react';
import { AREAS } from '../data.js';

export default function Areas() {
  return (
    <section className="areas">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <div className="eyebrow">Where we work</div>
          <h2>Localities across Amritsar</h2>
          <p>Our office is in Ranjit Avenue. We also help with properties in other parts of the city.</p>
        </div>

        <div className="area-list" data-reveal="pop">
          {AREAS.map((a, i) => {
            const home = a === 'Ranjit Avenue';
            return (
              <span key={a} className={`area${home ? ' home' : ''}`} style={{ '--i': i }}>
                {home && <i className="live" aria-hidden="true" />}
                {home ? `${a} (our office)` : a}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
