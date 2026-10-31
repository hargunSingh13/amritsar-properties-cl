import React from 'react';
import { HomeIcon, KeyIcon, PlotIcon, ShopIcon, DocIcon, ChartIcon } from './Icons.jsx';

const SERVICES = [
  { Icon: HomeIcon, t: 'Buy a home', d: 'Houses and flats shortlisted to your budget, family size and school or work commute.' },
  { Icon: KeyIcon, t: 'Sell or rent out', d: 'Realistic pricing, serious enquiries only, and help with tenant or buyer verification.' },
  { Icon: PlotIcon, t: 'Plots and land', d: 'Residential and investment plots checked for approvals, boundaries and access.' },
  { Icon: ShopIcon, t: 'Shops and offices', d: 'Commercial space for retail, clinics, showrooms and offices, for lease or purchase.' },
  { Icon: DocIcon, t: 'Paperwork support', d: 'Agreement to sell, registry and transfer steps explained before you sign.' },
  { Icon: ChartIcon, t: 'Investment advice', d: 'Which localities are growing and what rental returns to expect, said plainly.' }
];

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <div className="eyebrow">What we do</div>
          <h2>Every kind of property deal, handled in one office</h2>
          <p>Whether you are buying your first home or leasing a showroom, you get the same careful process.</p>
        </div>

        <div className="svc-grid">
          {SERVICES.map(({ Icon, t, d }, i) => (
            <div className="svc" key={t} data-reveal style={{ '--i': i }}>
              <Icon />
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
