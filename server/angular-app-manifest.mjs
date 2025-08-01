
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/rokaia1692006/Start_Angular/tree/main',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/rokaia1692006/Start_Angular/tree/main/home",
    "route": "/rokaia1692006/Start_Angular/tree/main"
  },
  {
    "renderMode": 2,
    "route": "/rokaia1692006/Start_Angular/tree/main/home"
  },
  {
    "renderMode": 2,
    "route": "/rokaia1692006/Start_Angular/tree/main/about"
  },
  {
    "renderMode": 2,
    "route": "/rokaia1692006/Start_Angular/tree/main/contact"
  },
  {
    "renderMode": 2,
    "route": "/rokaia1692006/Start_Angular/tree/main/portfolio"
  },
  {
    "renderMode": 2,
    "redirectTo": "/rokaia1692006/Start_Angular/tree/main/home",
    "route": "/rokaia1692006/Start_Angular/tree/main/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5193, hash: '3c8af9b51fef785d78281254393b212c22941c506b6cbcef63206ac276a55d79', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1114, hash: '39339a98d843b95f905f59b8cef31965f2c5510414723b658c15ad9e378446e7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 15956, hash: '4b9c94ccb94adb2597097104a8a3dc82f6afaa9e55593c841f0e5323a6f8f392', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 18278, hash: '4979fe9dfea0a25341f65ab6f7c6190319037cfa5a32c0d8253e9701177d9e7c', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 16210, hash: '871a5fb566312d4f202727b3e759a2f972ef1d14c2b0e7083106596311dc1c26', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 19022, hash: 'ef3056f44921901ab0c2c3d7b4dae9bf2b0e5120381016a306db7018dd91b711', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-4HR7LV3F.css': {size: 316452, hash: 'yvo1MWI4pj0', text: () => import('./assets-chunks/styles-4HR7LV3F_css.mjs').then(m => m.default)}
  },
};
