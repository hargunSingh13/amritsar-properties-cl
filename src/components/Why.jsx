import React from 'react';
import { WHY } from '../data.js';
import { Check } from './Icons.jsx';

export default function Why() {
  return (
    <section>
      <div className="wrap why-grid">
        <div className="sec-head flush" data-reveal="left">
          <div className="eyebrow">Why Amritsar Properties</div>
          <h2>A small office that answers its phone</h2>
          <p>
            We stay small on purpose. Every client works directly with one of the two founders, so nothing gets passed
            along or lost.
          </p>
        </div>

        <ul className="why-list">
          {WHY.map(([title, text], i) => (
            <li key={title} data-reveal="right" style={{ '--i': i }}>
              <span className="dot"><Check /></span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
