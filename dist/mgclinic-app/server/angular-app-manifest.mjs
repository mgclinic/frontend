
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
    'index.csr.html': {size: 65958, hash: 'd777192dd10b4d7616c0a3ecc55609c81613cf5f204f0b620ade6ee172b47f5c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1747, hash: '278d6c337c4766d5f9c6cef7b6ce456f15c082c819f9b1a9154f20f3d8d91c2a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 123395, hash: 'ae266b0972cf97e3bb3a848afd9a7e2555a9b0022605d9bbb88bdfe425c944af', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'hair-treatment/index.html': {size: 102379, hash: 'a7eb4d299cb703c3b4ac8dc5c61e5fad7b4fb01fbc1bb406c66e454c98bc061f', text: () => import('./assets-chunks/hair-treatment_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 161032, hash: '628eafb66c980e2b0d18d39e3833401eb2a6c5b97056a1f2c8cade0203cf0a98', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'skin-treatment/index.html': {size: 120540, hash: '3dc9991a38462cbd60ea72282eea03f5e9795a62c682d6de35d46074f797a260', text: () => import('./assets-chunks/skin-treatment_index_html.mjs').then(m => m.default)},
    'laser-treatment/index.html': {size: 99188, hash: '014f53f29f79ef6e4f9d2f5d88040a0daffbe3ce92f1672e38719ed0209197e4', text: () => import('./assets-chunks/laser-treatment_index_html.mjs').then(m => m.default)},
    'nail-treatment/index.html': {size: 101068, hash: 'ac8f3b4c07de1fc21da66469fd48b71b1d89a469602d164725dc78522103e276', text: () => import('./assets-chunks/nail-treatment_index_html.mjs').then(m => m.default)},
    'procedures/index.html': {size: 128005, hash: 'dae1d6105319446a87c8b2c89dcaa2257247d6c12a7334e843e95c2a9e39b151', text: () => import('./assets-chunks/procedures_index_html.mjs').then(m => m.default)},
    'terms-condition/index.html': {size: 104781, hash: '808f3a55ef034ae4a8b5139142708409cd0984cb95310d2912e68548c1dbdbea', text: () => import('./assets-chunks/terms-condition_index_html.mjs').then(m => m.default)},
    'index.html': {size: 270650, hash: '910cf41d2cfcd1460d632ac4107b8ef469c9d12c333661387c58827f4e5d784b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 110802, hash: '244f3d3979f98a6d56a2f125d16c233f5c2933d04b932725768e8b3f922acc97', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'book-appointment/index.html': {size: 198549, hash: '897af1eba6b494c389bb78e3c6a1860ec9ef45b6e2bc10264da7dc6e8c4e09f9', text: () => import('./assets-chunks/book-appointment_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 152240, hash: '8625760ad70500e7b867357b63efd72650c1f2ea4b7193b46432fe8fde444e34', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'admin-panel/index.html': {size: 152238, hash: '626a50d629cea665c794a3e1b58ef0f1dfb4a4d7f6124a5da93c10d56c274d0c', text: () => import('./assets-chunks/admin-panel_index_html.mjs').then(m => m.default)},
    'admin-panel/faqs/index.html': {size: 152238, hash: '2c3b823ccb276c404726d69d5f3807c5965e1ed03087a24dd8480e388910a03a', text: () => import('./assets-chunks/admin-panel_faqs_index_html.mjs').then(m => m.default)},
    'admin-panel/appointments/index.html': {size: 152245, hash: '19834ae671a31ccb9cfff453ddcf4ace53c965bc858695da1d0ecfe840619341', text: () => import('./assets-chunks/admin-panel_appointments_index_html.mjs').then(m => m.default)},
    'admin-panel/slider/index.html': {size: 152238, hash: '5287b4bf1b60a565b8da92e2c872d27d8b94be878229b7f2e94c6b0c199fdd35', text: () => import('./assets-chunks/admin-panel_slider_index_html.mjs').then(m => m.default)},
    'admin-panel/enquiries/index.html': {size: 152238, hash: '986ca874a6159f074def65c7bab9d2025245eeebf19fa5d043a6d85658537481', text: () => import('./assets-chunks/admin-panel_enquiries_index_html.mjs').then(m => m.default)},
    'admin-panel/testimonials/index.html': {size: 152245, hash: 'bc72be01ebb08d743bb5f7b4c5b71b58f6f474788da1168666962fb1d6a43309', text: () => import('./assets-chunks/admin-panel_testimonials_index_html.mjs').then(m => m.default)},
    'styles-6JMS5GNF.css': {size: 425871, hash: 'mjzfnEC8Flk', text: () => import('./assets-chunks/styles-6JMS5GNF_css.mjs').then(m => m.default)}
  },
};
