
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 663, hash: '17237814028135c7088e0b4c44ce76b55972b46e39ab6d15f5ab30743d919db1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1007, hash: '8cdeda0de99d9cd28da133d077da520ad6f2eeda046b7f4a76e8c3b699d2e06c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3627, hash: '4b6fd7a501ab4ac6e38f231a41bf199add80ddb7ec98d4a07aeda437ffec7780', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-2AHCJNZ2.css': {size: 44, hash: 'XCkUW1eHtJY', text: () => import('./assets-chunks/styles-2AHCJNZ2_css.mjs').then(m => m.default)}
  },
};
