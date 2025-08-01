
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Start_Angular',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Start_Angular/home",
    "route": "/Start_Angular"
  },
  {
    "renderMode": 2,
    "route": "/Start_Angular/home"
  },
  {
    "renderMode": 2,
    "route": "/Start_Angular/about"
  },
  {
    "renderMode": 2,
    "route": "/Start_Angular/contact"
  },
  {
    "renderMode": 2,
    "route": "/Start_Angular/portfolio"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Start_Angular/home",
    "route": "/Start_Angular/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5151, hash: '3be581370d310e5b5f5b84d1c3a95dc25a1fc1510e1ae401cc392c0768f9dad8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1072, hash: '2a89767a435bafafe213eb3b67e7f23e5f35e9817f77fe9defa9e969e88f6977', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 15914, hash: 'e8f16721535f568c15d7d609a1fe46c5c058c7ec1b7ab7479b57e4a295d77a0a', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 16168, hash: '55c505891ccb77b8cd1ad8d34186be4ed97cc378f984d069eb5bae04b060f513', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 18980, hash: '1ff32af6581ac943d09aede81364874b307bf7386d724bed1468685d093b6a59', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 18236, hash: '4ca215968ce5c4cfe9781ff45cea4fbcad0ad5acbbf239fa614414985e112dbf', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'styles-4HR7LV3F.css': {size: 316452, hash: 'yvo1MWI4pj0', text: () => import('./assets-chunks/styles-4HR7LV3F_css.mjs').then(m => m.default)}
  },
};
