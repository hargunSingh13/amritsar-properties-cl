import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

// Scroll-reveal styles only apply once JavaScript is running, so content is never hidden without it.
document.documentElement.classList.add('js');

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
