// Everything you are likely to edit lives in this file.

export const SITE = {
  name: 'Amritsar Properties',
  addressLines: ['D Block, Ranjit Avenue', 'Amritsar, Punjab'],
  founders: [
    {
      name: 'Gurpreet Singh',
      initials: 'GS',
      role: 'Founder · Property Consultant',
      // Replace with the real number, for example '+91 98765 43210'.
      phone: '+91 XXXXX XXXXX',
      // Put a photo in /public (for example /gurpreet.jpg) and set photo: '/gurpreet.jpg'
      photo: '',
      bio: 'Guides buyers, sellers and investors through Amritsar deals, from the first site visit to registry.'
    },
    {
      name: 'Hargun Singh',
      initials: 'HS',
      role: 'Founder · Property Consultant',
      phone: '+91 XXXXX XXXXX',
      photo: '',
      bio: 'Helps families and business owners find the right home, plot or shop and negotiate a fair price.'
    }
  ]
};

export const isRealNumber = (n) => Boolean(n) && !/X/i.test(n);
export const digitsOnly = (n) => n.replace(/[^\d]/g, '');

export const MARQUEE = [
  'Residential', 'Commercial', 'Plots and land', 'Rentals',
  'Registry support', 'Investment advice', 'Ranjit Avenue'
];

// Sample cards. Replace with real properties, photos and prices.
export const LISTINGS = [
  { type: 'House', filter: 'Houses', title: 'Independent kothi', loc: 'Ranjit Avenue', a: 'Residential', b: 'Corner plot', c: 'Ready to move' },
  { type: 'Flat', filter: 'Flats', title: 'Apartment in a gated block', loc: 'Green Avenue', a: '2 and 3 BHK', b: 'Parking', c: 'Ready to move' },
  { type: 'Shop', filter: 'Commercial', title: 'Showroom on a main road', loc: 'Mall Road', a: 'Commercial', b: 'Ground floor', c: 'Lease or sale' },
  { type: 'Plot', filter: 'Plots', title: 'Residential plot', loc: 'Majitha Road', a: 'Plot', b: 'Clear title check', c: 'Ready for registry' },
  { type: 'House', filter: 'Houses', title: 'Double-storey house', loc: 'Lawrence Road', a: 'Residential', b: '4 bedrooms', c: 'Resale' },
  { type: 'Shop', filter: 'Commercial', title: 'Office floor', loc: 'Ranjit Avenue', a: 'Commercial', b: 'First floor', c: 'Lease' }
];

export const FILTERS = ['All', 'Houses', 'Flats', 'Plots', 'Commercial'];

export const WHY = [
  ['Local knowledge', 'We work out of Ranjit Avenue and know the streets, blocks and price ranges around Amritsar.'],
  ['Straight pricing', 'You get a fair market range with reasons, not a number designed to start an argument.'],
  ['Documents first', 'We check title, approvals and ownership papers before you pay any token amount.'],
  ['One point of contact', 'You deal directly with a founder from first call to handover.']
];

export const STEPS = [
  ['Tell us what you need', 'Call or visit the office. Share budget, area and timeline.'],
  ['See shortlisted options', 'We arrange site visits for properties that fit, and skip the rest.'],
  ['Verify and negotiate', 'Papers are checked and price talks are handled on your behalf.'],
  ['Close and hand over', 'Agreement, registry and possession, with us until it is done.']
];

export const AREAS = [
  'Ranjit Avenue', 'Green Avenue', 'Mall Road', 'Lawrence Road',
  'Majitha Road', 'Airport Road', 'Court Road', 'Model Town'
];
