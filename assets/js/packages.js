/* ==========================================================================
   VISUAL STORY 2026 — package data
   --------------------------------------------------------------------------
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO CHANGE PRICES OR PACKAGES.
   Both the website (index.html) and the Facebook post kit (facebook-kit.html)
   read from here, so a change made once shows up in both places.

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

   Every line in `includes` becomes one bullet on the website and one bullet in
   the Facebook post, so that list is where you say what a package contains —
   crew, hours, prints and delivery all go in there as plain sentences.
   ========================================================================== */

const CURRENCY = '৳'; // ৳ Bengali taka sign

/* CATEGORIES ---------------------------------------------------------------
   One section on the website, one Facebook post.                          */

const CATEGORIES = [
  {
    id: 'portraits',
    name: 'Portrait & personal photography',
    short: 'Portraits',
    lead: 'Sessions built around one person. You choose the light, the location and how many looks you want to bring.',
    fbTitle: 'PORTRAIT & PERSONAL PHOTOGRAPHY'
  },
  {
    id: 'events',
    name: 'Wedding & event photography',
    short: 'Events',
    lead: 'Stills only. The crew grows with the package, so pick the size that matches your venue and guest count.',
    fbTitle: 'WEDDING & EVENT PHOTOGRAPHY'
  },
  {
    id: 'cinema',
    name: 'Photography + cinematography',
    short: 'Photo + cinema',
    lead: 'Photographs and a film from the same day. Every package includes a full-length Full HD film and a short highlight trailer.',
    fbTitle: 'PHOTOGRAPHY + CINEMATOGRAPHY'
  },
  {
    id: 'weddings',
    name: 'Wedding stories',
    short: 'Wedding stories',
    lead: 'One streamlined wedding package, priced per event, for couples who want the day covered without building a large crew.',
    fbTitle: 'WEDDING STORIES'
  }
];

const PACKAGES = [
  /* PORTRAITS ---------------------------------------------------------- */
  {
    id: 'outdoor-portrait',
    cat: 'portraits',
    name: 'Outdoor portrait',
    price: 5000,
    blurb: 'A relaxed outdoor session built around natural light, beautiful locations and your personality.',
    includes: [
      'Outdoor photo session',
      'Up to 3 outfit changes',
      'Up to 15 professionally retouched photographs',
      'High-resolution digital delivery'
    ],
    note: 'Additional outfit: ৳200 each'
  },
  {
    id: 'studio-portrait',
    cat: 'portraits',
    name: 'Studio portrait',
    price: 12000,
    blurb: 'A complete studio portrait experience with professional lighting and styling.',
    includes: [
      'Studio / premium interior location',
      'Makeover',
      'Up to 5 outfit changes',
      'Up to 20 professionally retouched photographs',
      'Up to 4 hours of shooting',
      'High-resolution digital delivery'
    ],
    note: 'Additional outfit: ৳200 each'
  },
  {
    id: 'portfolio-session',
    cat: 'portraits',
    name: 'Portfolio session',
    price: 12500,
    blurb: 'Built for models, actors, performers, creators and professionals who need a strong visual portfolio.',
    includes: [
      'Professional studio session',
      'Up to 5 outfit changes',
      'Up to 20 professionally retouched photographs',
      'Up to 4 hours of shooting',
      'High-resolution digital delivery'
    ],
    note: 'Made for models, actors, performers, creators, personal branding and professional profiles.'
  },
  /* EVENTS ------------------------------------------------------------- */
  {
    id: 'mini',
    cat: 'events',
    name: 'Mini photography',
    price: 1500,
    blurb: 'A simple package for small events and intimate occasions.',
    includes: [
      '1 Photographer',
      'Up to 2 hours',
      '10–15 specially edited photographs'
    ],
    note: null
  },
  {
    id: 'super-saver',
    cat: 'events',
    name: 'Super saver photography',
    price: 4000,
    blurb: 'An affordable single-event photography package.',
    includes: [
      'Chief Photographer',
      'Up to 5 hours',
      'Unlimited photographs captured during coverage',
      'Professionally edited photographs',
      'High-resolution digital delivery'
    ],
    note: null
  },
  {
    id: 'star-saver',
    cat: 'events',
    name: 'Star saver photography',
    price: 5500,
    blurb: 'Super saver coverage with a set of matte prints to keep.',
    includes: [
      'Chief Photographer',
      'Up to 5 hours',
      'Unlimited photographs captured during coverage',
      'Professionally edited photographs',
      '100 × 4R printed photographs',
      'Matte paper',
      'High-resolution digital delivery'
    ],
    note: null
  },
  {
    id: 'economy',
    cat: 'events',
    name: 'Economy photography',
    price: 9000,
    blurb: 'Two photographers, so nothing on the far side of the room gets missed.',
    includes: [
      'Chief Photographer',
      '1 Senior Photographer',
      'Up to 5 hours',
      'Unlimited photographs captured during coverage',
      'Professionally edited photographs',
      '100 × 4R printed photographs',
      'Matte paper',
      'High-resolution digital delivery'
    ],
    note: null
  },
  {
    id: 'standard',
    cat: 'events',
    name: 'Standard photography',
    price: 12500,
    blurb: 'Our most-booked stills package for a mid-size wedding or event.',
    includes: [
      'Chief Photographer',
      '1 Senior Photographer',
      '1 Associate Photographer',
      'Up to 5 hours',
      'Unlimited photographs captured during coverage',
      'Professionally edited photographs',
      '100 × 4R printed photographs',
      'Matte paper',
      'High-resolution digital delivery'
    ],
    note: null
  },
  {
    id: 'standard-plus',
    cat: 'events',
    name: 'Standard photography plus',
    price: 17500,
    blurb: 'A four-person crew and a printed album included.',
    includes: [
      'Chief Photographer',
      '2 Senior Photographers',
      '1 Associate Photographer',
      'Up to 5 hours',
      'Unlimited photographs captured during coverage',
      'Professionally edited photographs',
      '200 × 4R printed photographs',
      'Photo album',
      'High-resolution digital delivery'
    ],
    note: null
  },
  {
    id: 'exclusive',
    cat: 'events',
    name: 'Exclusive photography',
    price: 20000,
    blurb: 'The largest stills-only crew, with enlargements for the wall.',
    includes: [
      'Chief Photographer',
      '2 Senior Photographers',
      '2 Associate Photographers',
      'Up to 5 hours',
      'Unlimited photographs captured during coverage',
      'Professionally edited photographs',
      '200 × 4R printed photographs',
      '2 × 12L prints',
      'Photo album',
      'High-resolution digital delivery'
    ],
    note: null
  },
  /* PHOTO + CINEMA ----------------------------------------------------- */
  {
    id: 'super-saver-combo',
    cat: 'cinema',
    name: 'Super saver combo',
    price: 10500,
    blurb: 'The smallest way to get both photographs and a film from your day.',
    includes: [
      '1 Senior Photographer',
      '1 Cinematographer',
      'Up to 5 hours',
      'Unlimited photographs captured during coverage',
      'Professionally edited photographs',
      'Full HD 1080p wedding / event film',
      'Short highlight trailer',
      '100 × 4R printed photographs',
      'High-resolution digital delivery'
    ],
    note: null
  },
  {
    id: 'regular-combo',
    cat: 'cinema',
    name: 'Regular combo',
    price: 14500,
    blurb: 'Chief-led photography with a senior cinematographer on the film.',
    includes: [
      'Chief Photographer',
      '1 Associate Photographer',
      '1 Senior Cinematographer',
      'Up to 5 hours',
      'Unlimited photographs captured during coverage',
      'Professionally edited photographs',
      'Full HD 1080p video',
      'Short highlight trailer',
      '100 × 4R printed photographs',
      'High-resolution digital delivery'
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
      'Unlimited photographs captured during coverage',
      'Professionally edited photographs',
      'Full HD 1080p video',
      'Short highlight trailer',
      '200 × 4R printed photographs',
      'Photo album',
      'High-resolution digital delivery'
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
      'Unlimited photographs captured during coverage',
      'Professionally edited photographs',
      'Full HD 1080p video',
      'Short highlight trailer',
      '200 × 4R printed photographs',
      '2 × 12L prints',
      'Photo album',
      'High-resolution digital delivery'
    ],
    note: null
  },
  {
    id: 'standard-combo-1',
    cat: 'cinema',
    name: 'Standard combo 1',
    price: 35000,
    blurb: 'Broader coverage, with the Chief Photographer on the event from start to finish.',
    includes: [
      'Chief Photographer — full-event coverage',
      '2 Senior Photographers',
      '1 Associate Photographer',
      '2 Cinematographers',
      'Full HD 1080p video',
      'Short highlight trailer',
      'Unlimited photographs captured during coverage',
      'Professionally edited photographs',
      '100 × 5R printed photographs',
      '2 × 12L prints',
      'Photo album',
      'Up to 5 hours'
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
      'Full HD 1080p video',
      'Short highlight trailer',
      'Unlimited photographs captured during coverage',
      'Professionally edited photographs',
      '200 × 5R printed photographs',
      '3 × 12L prints',
      'Photo album',
      'Up to 5 hours'
    ],
    note: 'The Visual Story Experience is available with this package.'
  },
  {
    id: 'premium-combo-1',
    cat: 'cinema',
    name: 'Premium combo 1',
    price: 55000,
    blurb: 'Our most comprehensive package: a ten-person crew and an extra hour of coverage.',
    includes: [
      'Chief Photographer',
      '3 Senior Photographers',
      '2 Associate Photographers',
      '4 Cinematographers',
      'Full HD 1080p video',
      'Short highlight trailer',
      'Unlimited photographs captured during coverage',
      'Professionally edited photographs',
      '200 × 5R printed photographs',
      '4 × 12L prints',
      'Photo album',
      'Up to 6 hours'
    ],
    note: 'The Visual Story Experience is available with this package.'
  },
  /* WEDDING STORIES ---------------------------------------------------- */
  {
    id: 'wedding-stories',
    cat: 'weddings',
    name: 'Wedding stories',
    price: 8500,
    priceSuffix: 'per event',
    blurb: 'A streamlined wedding package focused on the emotions, people and moments that make your day yours.',
    includes: [
      '1 Senior Photographer',
      '1 Associate Photographer',
      'Up to 4 hours',
      'Unlimited photographs captured during coverage',
      'Professionally post-processed photographs',
      '100 specially retouched photographs',
      '100 × 5R prints',
      'Matte / glossy paper',
      'High-resolution digital delivery'
    ],
    note: 'Delivered in about 2 weeks.'
  }
];

/* THE VISUAL STORY EXPERIENCE ---------------------------------------------
   Add-ons offered with selected Standard and Premium Combo packages.     */

const EXPERIENCE = {
  title: 'The Visual Story Experience',
  lead: 'Selected Standard and Premium Combo packages can be extended with sessions built around the two of you, directed by the Chief Photographer.',
  items: [
    'Bride and groom portrait session',
    'Couple photography',
    'Conceptual photography',
    'Family portraits',
    'Candid moments',
    'Pre-wedding and post-wedding sessions',
    'Creative storytelling coverage',
    'Chief Photographer-led conceptual direction'
  ],
  note: 'Pre-wedding and post-wedding sessions are available with selected combo packages. Ask us when you enquire.'
};

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
    text: 'Everything arrives digitally in high resolution. Photography packages take about 2 weeks. Larger photography and cinematography projects take 20–30 working days, depending on the scale of the event.'
  },
  {
    term: 'Prints and albums',
    text: 'Print sizes, quantities, paper type and album specification follow the package you choose.'
  }
];

const CONTACT = {
  facebook: 'https://www.facebook.com/Visualstory984/',
  handle: 'Visualstory984',
  ask: 'Send us your event date, location and the package you have in mind.'
};

/* Made available to index.html and facebook-kit.html. Nothing to edit below. */
window.VS = { CURRENCY, CATEGORIES, PACKAGES, EXPERIENCE, TERMS, CONTACT };
