
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/hair-treatment"
  },
  {
    "renderMode": 2,
    "route": "/skin-treatment"
  },
  {
    "renderMode": 2,
    "route": "/nail-treatment"
  },
  {
    "renderMode": 2,
    "route": "/laser-treatment"
  },
  {
    "renderMode": 2,
    "route": "/procedures"
  },
  {
    "renderMode": 2,
    "route": "/terms-condition"
  },
  {
    "renderMode": 2,
    "route": "/book-appointment"
  },
  {
    "renderMode": 2,
    "route": "/privacy-policy"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/admin-panel"
  },
  {
    "renderMode": 2,
    "route": "/admin-panel/faqs"
  },
  {
    "renderMode": 2,
    "route": "/admin-panel/appointments"
  },
  {
    "renderMode": 2,
    "route": "/admin-panel/enquiries"
  },
  {
    "renderMode": 2,
    "route": "/admin-panel/slider"
  },
  {
    "renderMode": 2,
    "route": "/admin-panel/testimonials"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 65958, hash: 'afe0c4495f8d25f647ca0cd33a0d8c31847bf5b9175d9987bebc3679b055c2a2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1747, hash: '900f9b00e3be574e6672cabc372716e6e3319361c91592875821a7e250ad2ca4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 123282, hash: '5c52ea8b8200ca7019c50ba5cfc827c4a5f707ab7f898932affe47b675229718', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 160982, hash: '7ef35e1fe90b08a752594cd11b25158f67efdd82a79d4df7b1be20b5c9c2b00c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'hair-treatment/index.html': {size: 101697, hash: '3fa84a5f0c99f5595b90819ecf64826ea9185417af91e1ef3e5215d6bdae974d', text: () => import('./assets-chunks/hair-treatment_index_html.mjs').then(m => m.default)},
    'skin-treatment/index.html': {size: 119232, hash: '48bac343afee894f7ad4c2f8909ec496ab24c2df4ecd64c09cba6031a702e536', text: () => import('./assets-chunks/skin-treatment_index_html.mjs').then(m => m.default)},
    'nail-treatment/index.html': {size: 100614, hash: '7227af25d06b37b391382951a6924b4b70b7cdd311556d26d97086847f2b007a', text: () => import('./assets-chunks/nail-treatment_index_html.mjs').then(m => m.default)},
    'procedures/index.html': {size: 128639, hash: 'afee3e6f598996bbf5e14f2dc7e4fcfede4e6d44de6a73e118fa7a880895e2b7', text: () => import('./assets-chunks/procedures_index_html.mjs').then(m => m.default)},
    'laser-treatment/index.html': {size: 98739, hash: '47b0544c053eead82b52cb45ead77af37e7820c40e44ffe52699ab895532111c', text: () => import('./assets-chunks/laser-treatment_index_html.mjs').then(m => m.default)},
    'terms-condition/index.html': {size: 104731, hash: 'a38ef89353c9d1634d54e58ed20148d49287e0cdfa1f0a475eafe7113bbbff68', text: () => import('./assets-chunks/terms-condition_index_html.mjs').then(m => m.default)},
    'book-appointment/index.html': {size: 198329, hash: '65f49d582a2cd4ae2409b2543ff023c973f7cda642ff4be35a8a6918a47fa9d9', text: () => import('./assets-chunks/book-appointment_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 110752, hash: 'c3f4475c37aee2d36713645f1a0ea5c97fd8c07f1e6c635b58975ad33353eec1', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 152238, hash: '252b213501ef885de73f5f2f5e6bdfed6669e48ee99bac11a79ffc61bd8ca35c', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 270021, hash: '058800180618325c166fca54bb876243eacd290334c7d158c0d3bffea7e1bd5d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'admin-panel/index.html': {size: 152235, hash: '6d05aa85f6da9944f807c2184db16e23e255d005f48419021bd53e0155130ee7', text: () => import('./assets-chunks/admin-panel_index_html.mjs').then(m => m.default)},
    'admin-panel/faqs/index.html': {size: 152242, hash: 'f3587fc2341c75e779437dd4fc87881f66b6047180dc3e6c74f483fb3914c8f3', text: () => import('./assets-chunks/admin-panel_faqs_index_html.mjs').then(m => m.default)},
    'admin-panel/appointments/index.html': {size: 152240, hash: 'dc912e49371eddcd4240ba80c2036c84742de5cd7d3ca980b94c9fc6e001329b', text: () => import('./assets-chunks/admin-panel_appointments_index_html.mjs').then(m => m.default)},
    'admin-panel/enquiries/index.html': {size: 152235, hash: '650a8099e44f9ce5a290ef3f3f71beb0f104042a5ed1bf818fb51d591d4d4151', text: () => import('./assets-chunks/admin-panel_enquiries_index_html.mjs').then(m => m.default)},
    'admin-panel/slider/index.html': {size: 152244, hash: 'b77b60b325f2c5932807407a72b846e64aedf9e560dcaf18c1a01ddeb6cee229', text: () => import('./assets-chunks/admin-panel_slider_index_html.mjs').then(m => m.default)},
    'admin-panel/testimonials/index.html': {size: 152245, hash: '9f53ea68f4f61565075d5a90b96c9054c31c82c1fd64eb7e942fb559450003bb', text: () => import('./assets-chunks/admin-panel_testimonials_index_html.mjs').then(m => m.default)},
    'styles-6JMS5GNF.css': {size: 425871, hash: 'mjzfnEC8Flk', text: () => import('./assets-chunks/styles-6JMS5GNF_css.mjs').then(m => m.default)}
  },
};
