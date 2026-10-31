import React, { useState } from 'react';
import { SITE, isRealNumber, digitsOnly } from '../data.js';
import { Pin, Phone, Clock } from './Icons.jsx';

const INTERESTS = ['Buy a home', 'Sell a property', 'Rent or lease', 'Buy a plot', 'Commercial space', 'Investment advice'];

export default function Contact() {
  const [v, setV] = useState({ name: '', phone: '', interest: INTERESTS[0], msg: '' });
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setText(
      `Hello Amritsar Properties,\nName: ${v.name}\nPhone: ${v.phone}\nInterested in: ${v.interest}` +
        (v.msg ? `\nDetails: ${v.msg}` : '')
    );
  };

  const copy = () => {
    try {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      }, () => {});
    } catch (err) {
      /* clipboard unavailable */
    }
  };

  const callable = SITE.founders.filter((f) => isRealNumber(f.phone));

  return (
    <section id="contact">
      <div className="wrap c-grid">
        <div data-reveal="left">
          <div className="sec-head">
            <div className="eyebrow">Contact</div>
            <h2>Tell us what you are looking for</h2>
            <p>Fill in the form to prepare your enquiry, then send it to either founder, or walk into the office.</p>
          </div>

          <form onSubmit={submit}>
            <label htmlFor="f-name">
              Your name
              <input id="f-name" required value={v.name} onChange={set('name')} autoComplete="name" />
            </label>
            <label htmlFor="f-phone">
              Phone number
              <input id="f-phone" required inputMode="tel" value={v.phone} onChange={set('phone')} autoComplete="tel" />
            </label>
            <label htmlFor="f-int">
              I want to
              <select id="f-int" value={v.interest} onChange={set('interest')}>
                {INTERESTS.map((o) => <option key={o}>{o}</option>)}
              </select>
            </label>
            <label htmlFor="f-msg">
              Details (area, budget, size)
              <textarea id="f-msg" value={v.msg} onChange={set('msg')} />
            </label>

            <button className="btn shine" type="submit">Prepare my enquiry</button>

            {text && (
              <div className="sent" role="status">
                <strong>Your enquiry is ready</strong>
                <pre>{text}</pre>
                <div className="sent-actions">
                  <button type="button" className="mini" onClick={copy}>{copied ? 'Copied' : 'Copy enquiry'}</button>
                  {callable.map((f) => (
                    <a
                      key={f.name}
                      className="mini"
                      target="_blank"
                      rel="noreferrer"
                      href={`https://wa.me/${digitsOnly(f.phone)}?text=${encodeURIComponent(text)}`}
                    >
                      WhatsApp {f.name.split(' ')[0]}
                    </a>
                  ))}
                </div>
                {callable.length === 0 && (
                  <span>Add the founders' phone numbers in src/data.js to enable the WhatsApp buttons.</span>
                )}
              </div>
            )}
          </form>
        </div>

        <div className="office" data-reveal="right">
          <div className="box">
            <Pin />
            <div>
              <h3>Office</h3>
              <p>{SITE.name}, {SITE.addressLines.join(', ')}</p>
            </div>
          </div>
          {SITE.founders.map((f) => (
            <div className="box" key={f.name}>
              <Phone />
              <div>
                <h3>{f.name}</h3>
                <code>{f.phone}</code>
              </div>
            </div>
          ))}
          <div className="box">
            <Clock />
            <div>
              <h3>Visiting</h3>
              <p>Call before you come so a founder is at the office to meet you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
