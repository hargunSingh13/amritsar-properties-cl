import React from 'react';
import { SITE } from './data.js';
import { useRevealAll, useScrollEffects } from './hooks.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Properties from './components/Properties.jsx';
import Why from './components/Why.jsx';
import Founders from './components/Founders.jsx';
import Process from './components/Process.jsx';
import Areas from './components/Areas.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  const { scrolled, showFab } = useScrollEffects();
  useRevealAll();

  return (
    <>
      <div className="progress" aria-hidden="true" />
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <Services />
        <Properties />
        <Why />
        <Founders />
        <Process />
        <Areas />
        <Contact />
      </main>
      <footer>
        <div className="wrap foot">
          <span>© {new Date().getFullYear()} {SITE.name}. {SITE.addressLines[0]}, Amritsar.</span>
          <a href="#top">Back to top</a>
        </div>
      </footer>
      <a className={`fab${showFab ? ' show' : ''}`} href="#contact" tabIndex={showFab ? 0 : -1} aria-hidden={!showFab}>
        Enquire now
      </a>
    </>
  );
}
