import React from 'react';
import Skyline from './Skyline.jsx';
import Marquee from './Marquee.jsx';
import { Pin } from './Icons.jsx';

const HEADLINE = ['Find', 'the', 'right', 'property', 'in', 'Amritsar', 'with', 'people', 'who', 'live', 'here.'];

export default function Hero() {
  return (
    <div id="top">
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow fade-up" style={{ '--i': 0 }}>Real estate consultants, Amritsar</div>

            <h1 aria-label={HEADLINE.join(' ')}>
              {HEADLINE.map((word, i) => (
                <React.Fragment key={word + i}>
                  <span className="w" aria-hidden="true" style={{ '--w': i }}>
                    <span className={word === 'Amritsar' ? 'hl' : undefined}>{word}</span>
                  </span>{' '}
                </React.Fragment>
              ))}
            </h1>

            <p className="lede fade-up" style={{ '--i': 5 }}>
              Amritsar Properties helps you buy, sell and rent homes, plots and commercial space, with honest advice
              from two founders you can meet in person.
            </p>

            <div className="cta fade-up" style={{ '--i': 6 }}>
              <a className="btn gold shine" href="#contact">Talk to a consultant</a>
              <a className="btn ghost" href="#properties">Browse property types</a>
            </div>

            <div className="addr fade-up" style={{ '--i': 7 }}>
              <span className="ping" aria-hidden="true"><Pin /></span>
              <span>Visit our office: D Block, Ranjit Avenue, Amritsar</span>
            </div>
          </div>

          <div className="hero-art">
            <Skyline />
          </div>
        </div>
      </section>
      <Marquee />
    </div>
  );
}
