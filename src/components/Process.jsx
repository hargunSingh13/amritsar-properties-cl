import React from 'react';
import { STEPS } from '../data.js';

export default function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <div className="eyebrow">How it works</div>
          <h2>From first call to the keys in your hand</h2>
        </div>

        <div className="steps" data-reveal="line">
          {STEPS.map(([title, text], i) => (
            <div className="step" key={title} style={{ '--i': i }}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
