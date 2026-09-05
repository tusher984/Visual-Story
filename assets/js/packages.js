/* ==========================================================================
   VISUAL STORY 2026 — package data
   --------------------------------------------------------------------------
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO CHANGE PRICES OR PACKAGES.
   index.html reads from here, so one edit updates the package entry, the
   range beside its group heading and the price index at the top of the page.

   Each package looks like this:

     {
       id:       'unique-name-no-spaces',
       cat:      'portraits',           // which group it belongs to
       name:     'Name shown on the site',
       price:    12500,                 // just the number, no comma, no taka sign
       blurb:    'one sentence under the name',
       includes: [ 'one line', 'per line' ],
       note:     'small line under the list, or null'
     }

   `includes` holds only what makes this package different from the one below
   it in price — crew, hours, outfits, album. Editing, high-resolution
   delivery and unlimited coverage are promised once on the page itself, so
   they are not repeated inside every package.
   ========================================================================== */

const CURRENCY = '৳'; // ৳ Bengali taka sign

/* CATEGORIES ---------------------------------------------------------------
   One section on the website, in this order. `name` is the label used in the
   price index at the top of the page; it should match the heading that
   section carries in index.html.                                          */

const CATEGORIES = [
  { id: 'portraits', name: 'Portrait & personal photography' },
  { id: 'events', name: 'Wedding & event photography' },
  { id: 'cinema', name: 'Photography + cinematography' },
  { id: 'weddings', name: 'The wedding package' }
];

const PACKAGES = [
  /* PORTRAITS ---------------------------------------------------------- */
  {
    id: 'outdoor-portrait',
    cat: 'portraits',
    name: 'Outdoor portrait',
    price: 5000,
    blurb: 'A relaxed session on location, built around natural light and your own personality.',
    includes: [
      'Outdoor location of your choice',
      'Up to 3 outfit changes',
      'Up to 15 professionally retouched photographs'
    ],
    note: 'Additional outfit: ৳200 each'
  },
  {
    id: 'studio-portrait',
    cat: 'portraits',
    name: 'Studio portrait & portfolio',
    price: 12500,
    blurb: 'A full studio session with professional lighting, styling and a makeover — for a portrait to keep or a portfolio to send out.',
    includes: [
      'Studio or premium interior location',
      'Makeover',
      'Up to 5 outfit changes',
      'Up to 20 professionally retouched photographs',
      'Up to 4 hours of shooting'
    ],
    note: 'Suits models, actors, performers, creators, personal branding and professional profiles. Additional outfit: ৳200 each'
  },
  /* EVENTS — stills only. The ladder is crew, then the album. ------------ */
  {
    id: 'super-saver',
    cat: 'events',
    name: 'Super saver photography',
    price: 5000,
    blurb: 'One photographer for one event. The simplest way to have the day photographed properly.',
    includes: [
      'Chief Photographer',
      'Up to 5 hours'
    ],
    note: null
  },
  {
    id: 'economy',
    cat: 'events',
    name: 'Economy photography',
    price: 9000,
    blurb: 'A second photographer, so nothing on the far side of the room gets missed.',
    includes: [
      'Chief Photographer',
      '1 Senior Photographer',
      'Up to 5 hours'
    ],
    note: null
  },
  {
    id: 'standard',
    cat: 'events',
    name: 'Standard photography',
    price: 12500,
    blurb: 'Our most-booked stills package: a three-person crew for a mid-size wedding or event.',
    includes: [
      'Chief Photographer',
      '1 Senior Photographer',
      '1 Associate Photographer',
      'Up to 5 hours'
    ],
    note: null
  },
  {
    id: 'standard-plus',
    cat: 'events',
    name: 'Standard photography plus',
    price: 17500,
    blurb: 'A four-person crew, with an album to keep the day in.',
    includes: [
      'Chief Photographer',
      '2 Senior Photographers',
      '1 Associate Photographer',
      'Up to 5 hours',
      'Photo album'
    ],
    note: null
  },
  {
    id: 'exclusive',
    cat: 'events',
    name: 'Exclusive photography',
    price: 20000,
    blurb: 'The largest stills-only crew: five photographers on one event.',
    includes: [
      'Chief Photographer',
      '2 Senior Photographers',
      '2 Associate Photographers',
      'Up to 5 hours',
      'Photo album'
    ],
    note: null
  },
  /* PHOTO + CINEMA — every package here also gets the film and the trailer,
     which the section says once rather than seven times. ----------------- */
  {
    id: 'super-saver-combo',
    cat: 'cinema',
    name: 'Super saver combo',
    price: 10500,
    blurb: 'The smallest way to leave the day with both photographs and a film.',
    includes: [
      '1 Senior Photographer',
      '1 Cinematographer',
      'Up to 5 hours'
    ],
    note: null
  },
  {
    id: 'regular-combo',
    cat: 'cinema',
    name: 'Regular combo',
    price: 14500,
    blurb: 'Chief-led photography, with a senior cinematographer on the film.',
    includes: [
      'Chief Photographer',
      '1 Associate Photographer',
      '1 Senior Cinematographer',
      'Up to 5 hours'
    ],
    note: null
  },
  {
    id: 'regular-combo-plus',
    cat: 'cinema',
    name: 'Regular combo plus',
    price: 19500,
    blurb: 'Two senior cinematographers, so the film has more than one angle.',
    includes: [
      'Chief Photographer',
      '1 Associate Photographer',
      '2 Senior Cinematographers',
      'Up to 5 hours',
      'Photo album'
    ],
    note: null
  },
  {
    id: 'regular-combo-premium',
    cat: 'cinema',
    name: 'Regular combo premium',
    price: 25000,
    blurb: 'A balanced five-person crew: three on stills, two on film.',
    includes: [
      'Chief Photographer',
      '1 Senior Photographer',
      '1 Associate Photographer',
      '2 Cinematographers',
      'Up to 5 hours',
      'Photo album'
    ],
    note: null
  },
  {
    id: 'standard-combo-1',
    cat: 'cinema',
    name: 'Standard combo 1',
    price: 35000,
    blurb: 'Six on the crew, with the Chief Photographer on the event from start to finish.',
    includes: [
      'Chief Photographer — full-event coverage',
      '2 Senior Photographers',
      '1 Associate Photographer',
      '2 Cinematographers',
      'Up to 5 hours',
      'Photo album'
    ],
    note: 'The Visual Story Experience is available with this package.'
  },
  {
    id: 'standard-combo-2',
    cat: 'cinema',
    name: 'Standard combo 2',
    price: 45000,
    blurb: 'An eight-person unit for a large venue running several rooms at once.',
    includes: [
      'Chief Photographer — full-event coverage',
      '2 Senior Photographers',
      '2 Associate Photographers',
      '3 Cinematographers',
      'Up to 5 hours',
      'Photo album'
    ],
    note: 'The Visual Story Experience is available with this package.'
  },
  {
    id: 'premium-combo',
    cat: 'cinema',
    name: 'Premium combo',
    price: 55000,
    blurb: 'A ten-person crew and an extra hour, for one event covered at full scale.',
    includes: [
      'Chief Photographer',
      '3 Senior Photographers',
      '2 Associate Photographers',
      '4 Cinematographers',
      'Up to 6 hours',
      'Photo album'
    ],
    note: 'The Visual Story Experience is available with this package.'
  },
  /* The top of the ladder. It is the Premium crew at two events instead of
     one — that second day is where the price comes from — with the
     cinematographers at senior grade and the Experience included rather than
     offered. Nothing in it is a service the packages above don't already
     describe. */
  {
    id: 'exclusive-combo',
    cat: 'cinema',
    name: 'Exclusive combo',
    price: 100000,
    blurb: 'Both event days covered by the full ten-person crew, with the Experience session included.',
    includes: [
      'Chief Photographer — full-event coverage',
      '3 Senior Photographers',
      '2 Associate Photographers',
      '4 Senior Cinematographers',
      'Two events on separate days',
      'Up to 6 hours at each event',
      'Photo album'
    ],
    note: 'The Visual Story Experience is included with this package.'
  },
  /* THE WEDDING PACKAGE -------------------------------------------------- */
  {
    id: 'wedding-stories',
    cat: 'weddings',
    name: 'Wedding stories',
    price: 8500,
    priceSuffix: 'per event',
    blurb: 'One streamlined package for the whole day, focused on the emotions, people and moments that make it yours.',
    includes: [
      '1 Senior Photographer',
      '1 Associate Photographer',
      'Up to 4 hours',
      '100 specially retouched photographs'
    ],
    note: null
  }
];

/* THE VISUAL STORY EXPERIENCE ---------------------------------------------
   Sessions offered with the three packages whose note says so.            */

const EXPERIENCE = [
  'Bride and groom portrait session',
  'Couple photography',
  'Conceptual photography',
  'Family portraits',
  'Candid moments',
  'Pre-wedding and post-wedding sessions',
  'Creative storytelling coverage',
  'Chief Photographer-led conceptual direction'
];

/* BOOKING & TERMS ---------------------------------------------------------
   Written as term + plain-language explanation.                           */

const TERMS = [
  {
    term: 'Booking a date',
    text: 'A 50% advance confirms your booking. For events, please send the advance at least 7 days before the date.'
  },
  {
    term: 'Final payment',
    text: 'The remaining 50% is due on the day we deliver your photographs and film.'
  },
  {
    term: 'Advance payments',
    text: 'Advance payments are non-refundable.'
  },
  {
    term: 'Extra hours',
    text: 'We can add coverage beyond the hours in your package, depending on the crew’s availability that day.'
  },
  {
    term: 'Custom packages',
    text: 'Nothing here is fixed. Tell us your event and your budget and we will build a package around them.'
  },
  {
    term: 'Delivery',
    text: 'Photography packages take about 2 weeks. Larger photography and cinematography projects take 20–30 working days, depending on the scale of the event.'
  },
  {
    term: 'Albums and prints',
    text: 'Every package is delivered as digital files; loose prints and enlargements are not included in any of them. The packages that list a photo album include it, in the specification that package sets.'
  }
];

/* Read by index.html through assets/js/site.js. Nothing to edit below. */
window.VS = { CURRENCY, CATEGORIES, PACKAGES, EXPERIENCE, TERMS };

