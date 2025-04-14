
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
    'index.csr.html': {size: 65958, hash: '66ff13acb5720ebfcc4b150d12eff51d66dfe71e17e17516e17b5225ceb4f5e8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1747, hash: 'ebe4287979b7ca4ac1b6e866bb74f81fd3051324f0272a95fe81c82dde4199fe', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 123456, hash: 'b126a2e0ef3e7d46fa78bb3eecfc7d1b52ff0a1d004db059d828195cb4fd1f17', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 161093, hash: 'fce011c51216520dafe4ed58c7b015a8a1572690eddbba6b69c780fea84de174', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'hair-treatment/index.html': {size: 102440, hash: '4e6bed4a756234d50c3c1879ad9438a78574095801c1193ccb108e4ca6d1a58d', text: () => import('./assets-chunks/hair-treatment_index_html.mjs').then(m => m.default)},
    'nail-treatment/index.html': {size: 101129, hash: '14dbe6208e498c7953b6d3ff5a57e134ac56c210c5dc8e9c6bc9afaf19ca0ca8', text: () => import('./assets-chunks/nail-treatment_index_html.mjs').then(m => m.default)},
    'skin-treatment/index.html': {size: 120601, hash: 'dfb071ed86dd18383489509ba0125b27361b1b9f54822ddd417c19d2bd1d5fa1', text: () => import('./assets-chunks/skin-treatment_index_html.mjs').then(m => m.default)},
    'laser-treatment/index.html': {size: 99249, hash: '38de54c8d2a6eca54f1d7a4b81bfd8254f66387be3c760ff629201f9e666e952', text: () => import('./assets-chunks/laser-treatment_index_html.mjs').then(m => m.default)},
    'procedures/index.html': {size: 128066, hash: '0cfe50cf7385979cab8e3906bd96d6b7b6fb6123054bf34c5084fecfadd78b56', text: () => import('./assets-chunks/procedures_index_html.mjs').then(m => m.default)},
    'index.html': {size: 270711, hash: '1c1ba7bcdab24cfc518ec182e313bde9689f2b02b4d25e661c941969635b833c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'terms-condition/index.html': {size: 104842, hash: 'f9032efe49efdb4822525aa6780c77954cbde32cca903dbaeafde1e087c40f48', text: () => import('./assets-chunks/terms-condition_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 110863, hash: 'bd5e10d938478f254ea59d46d934d72786131097fa7b705028d9508b6dbbd936', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'book-appointment/index.html': {size: 198610, hash: '3c0ba76b8aff81ff031c46d98cded705b3ee53d9ca4435ce20b794ab27af4ace', text: () => import('./assets-chunks/book-appointment_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 152296, hash: '07287ddc36b32ecfdd0edec5b4ba6d21a7a203226cf0ba1ad73f5b20dbe07bdd', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'admin-panel/index.html': {size: 152301, hash: '62fc27aaeeb3683e1ebfdf273bb213a7c9773423487c5a4ea690cbd5364a6cc8', text: () => import('./assets-chunks/admin-panel_index_html.mjs').then(m => m.default)},
    'admin-panel/faqs/index.html': {size: 152299, hash: '9c71ecf2e16285309e947e503e7cf93a9f61e1ac849c40e9d7dcc005bf1a89f7', text: () => import('./assets-chunks/admin-panel_faqs_index_html.mjs').then(m => m.default)},
    'admin-panel/appointments/index.html': {size: 152296, hash: '6667c8c7dd207df422a3c692f7dc10bfe41f2b0a1f0d56ccbdf492cced7ca724', text: () => import('./assets-chunks/admin-panel_appointments_index_html.mjs').then(m => m.default)},
    'admin-panel/enquiries/index.html': {size: 152306, hash: '756d4acde0537e4fc9f067f739f7db44b13afa5e7b6e31f2beef24429c377e97', text: () => import('./assets-chunks/admin-panel_enquiries_index_html.mjs').then(m => m.default)},
    'admin-panel/slider/index.html': {size: 152303, hash: 'f2a013a815fc1789cbdf1a3d202c34fe16c0851a24cf0fb5f32081fbe6e5d66e', text: () => import('./assets-chunks/admin-panel_slider_index_html.mjs').then(m => m.default)},
    'admin-panel/testimonials/index.html': {size: 152296, hash: 'df38a3f913bac56e6a59a088cc1a40f0d845db6b9db56b4567f76d0c33464ab8', text: () => import('./assets-chunks/admin-panel_testimonials_index_html.mjs').then(m => m.default)},
    'styles-6JMS5GNF.css': {size: 425871, hash: 'mjzfnEC8Flk', text: () => import('./assets-chunks/styles-6JMS5GNF_css.mjs').then(m => m.default)}
  },
};
