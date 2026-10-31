import React, { useEffect, useState } from 'react';
import { SITE } from '../data.js';
import { Logo } from './Icons.jsx';

const LINKS = [
  ['services', 'Services'],
  ['properties', 'Properties'],
  ['founders', 'Founders'],
  ['process', 'How it works'],
  ['contact', 'Contact']
];

function savedTheme() {
  try {
    return localStorage.getItem('ap-theme');
  } catch (e) {
    return null;
  }
}

export default function Header({ scrolled }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    const s = savedTheme();
    if (s) return s === 'dark';
    return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (savedTheme()) document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
    try {
      localStorage.setItem('ap-theme', next ? 'dark' : 'light');
    } catch (e) {
      /* storage blocked, theme still changes for this visit */
    }
  };

  return (
    <header className={`bar${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap bar-row">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <Logo />
          <span>{SITE.name}</span>
        </a>

        <nav className={`links${open ? ' open' : ''}`} aria-label="Main">
          {LINKS.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="tools">
          <a className="btn shine call" href="#contact">Enquire</a>
          <button className="icon-btn" onClick={toggleTheme} aria-label="Switch light or dark theme" title="Theme">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" />
            </svg>
          </button>
          <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path className="m1" d="M4 7h16" />
              <path className="m2" d="M4 12h16" />
              <path className="m3" d="M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
