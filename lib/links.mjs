// Where the design's placeholder links should go on the live site.
// The design uses "#something" anchors for links it doesn't know yet.
// An empty string keeps the placeholder (the link does nothing) until you fill it in.
// External URLs open in a new tab.
export const LINKS = {
  // Home: blog preview cards and testimonial "case study" links
  // (only one post / case study template exists so far; point each at its own page when you add more)
  '#blog-scope-mvp': '/blog/how-to-scope-your-mvp',
  '#blog-nocode': '/blog/how-to-scope-your-mvp',
  '#blog-ai': '/blog/how-to-scope-your-mvp',
  '#case-kestrel': '/portfolio/kestrel-health',
  '#case-lumora': '/portfolio/kestrel-health',

  // Social profiles (footer on every page)
  '#linkedin': '', // e.g. 'https://www.linkedin.com/company/rispit'
  '#instagram': '',
  '#x': '',

  // Contact page
  '#whatsapp': '', // e.g. 'https://wa.me/94XXXXXXXXX'
  '#map': '', // e.g. a Google Maps link

  // Case study page
  '#video': '', // client story video
  '#view-app': '', // App Store / Google Play link
  '#visit-site': '', // client's website

  // Thank-you page "add to calendar" buttons: use the links your booking tool (Cal.com / Calendly) provides
  '#google': '',
  '#outlook': '',
  '#ics': '',
};

// Blog share buttons: built from the current page URL at click time.
export const SHARE = {
  '#share-x': (url, title) => `https://x.com/intent/post?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  '#share-linkedin': (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
};
