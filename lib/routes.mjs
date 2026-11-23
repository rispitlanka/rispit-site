// Maps each design artboard to its URL on the site. Desktop and mobile
// artboards of the same page share a route.
const pages = {
  '/': ['Home', 'MobHome'],
  '/christmas': ['HomeXmas'],
  '/services/21-day-mvp-sprint': ['ServiceMVP', 'MobServiceMVP'],
  '/services/mobile-app-development': ['ServiceMobile', 'MobServiceMobile'],
  '/services/web-app-development': ['ServiceWeb', 'MobServiceWeb'],
  '/services/ecommerce-development': ['ServiceEcommerce', 'MobServiceEcommerce'],
  '/services/ui-ux-design': ['ServiceUIUX', 'MobServiceUIUX'],
  '/services/ai-integration': ['ServiceAI', 'MobServiceAI'],
  '/services/content-creation': ['ServiceContent', 'MobServiceContent'],
  '/services/it-consultation': ['ServiceIT', 'MobServiceIT'],
  '/portfolio': ['Portfolio', 'MobPortfolio'],
  '/portfolio/kestrel-health': ['CaseStudy', 'MobCaseStudy'],
  '/blog': ['BlogList', 'MobBlog'],
  '/blog/how-to-scope-your-mvp': ['BlogPost', 'MobBlogPost'],
  '/contact': ['Contact', 'MobContact'],
  '/thank-you': ['ThankYou', 'MobThankYou'],
  '/privacy': ['Privacy', 'MobPrivacy'],
  '/terms': ['Terms', 'MobTerms'],
  '/404': ['NotFound', 'MobNotFound'],
};
export const ROUTES = {};
for (const [route, names] of Object.entries(pages)) for (const n of names) ROUTES[n] = route;
export default pages;
