if (!self.define) {
  let e,
    s = {}
  const c = (c, a) => (
    (c = new URL(c + '.js', a).href),
    s[c] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = c), (e.onload = s), document.head.appendChild(e)
        } else (e = c), importScripts(c), s()
      }).then(() => {
        let e = s[c]
        if (!e) throw new Error(`Module ${c} didn’t register its module`)
        return e
      })
  )
  self.define = (a, n) => {
    const i =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[i]) return
    let t = {}
    const r = (e) => c(e, i),
      o = { module: { uri: i }, exports: t, require: r }
    s[i] = Promise.all(a.map((e) => o[e] || r(e))).then((e) => (n(...e), t))
  }
}
define(['./workbox-6a1bf588'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/PZxbi-4g9FGXt1K-p94Us/_buildManifest.js',
          revision: '0c03b4712380d4376c0174775e17b006',
        },
        {
          url: '/_next/static/PZxbi-4g9FGXt1K-p94Us/_ssgManifest.js',
          revision: '5352cb582146311d1540f6075d1f265e',
        },
        {
          url: '/_next/static/chunks/651.c723311056ab9550.js',
          revision: 'c723311056ab9550',
        },
        {
          url: '/_next/static/chunks/651.c723311056ab9550.js.map',
          revision: '2cebdab95740639c4386c77dad578b19',
        },
        {
          url: '/_next/static/chunks/741.5b09b0bb25501cf4.js',
          revision: '5b09b0bb25501cf4',
        },
        {
          url: '/_next/static/chunks/741.5b09b0bb25501cf4.js.map',
          revision: '0e44a13f5122031aee8d6be41f56f5d7',
        },
        {
          url: '/_next/static/chunks/770-81c9ab477128300a.js',
          revision: '81c9ab477128300a',
        },
        {
          url: '/_next/static/chunks/770-81c9ab477128300a.js.map',
          revision: '5343febc7dfa68c8aa7fe44304a64bbc',
        },
        {
          url: '/_next/static/chunks/85-500567cc6ff710cc.js',
          revision: '500567cc6ff710cc',
        },
        {
          url: '/_next/static/chunks/85-500567cc6ff710cc.js.map',
          revision: '984a05922a9a2cd5eb35c93f668f1068',
        },
        {
          url: '/_next/static/chunks/ef6529d7-c11189d9cbce2de6.js',
          revision: 'c11189d9cbce2de6',
        },
        {
          url: '/_next/static/chunks/framework-067cf7484a0ce9ea.js',
          revision: '067cf7484a0ce9ea',
        },
        {
          url: '/_next/static/chunks/framework-067cf7484a0ce9ea.js.map',
          revision: '887e4b956c842d1056db7112230e8cb3',
        },
        {
          url: '/_next/static/chunks/main-212ce5e08b8d6a2b.js',
          revision: '212ce5e08b8d6a2b',
        },
        {
          url: '/_next/static/chunks/main-212ce5e08b8d6a2b.js.map',
          revision: '9cfeea1ca9942f51c237d21dc0cb5e1e',
        },
        {
          url: '/_next/static/chunks/pages/404-244c89023e2c7e48.js',
          revision: '244c89023e2c7e48',
        },
        {
          url: '/_next/static/chunks/pages/404-244c89023e2c7e48.js.map',
          revision: '3661ffa5becf4286bd8eb701bae64698',
        },
        {
          url: '/_next/static/chunks/pages/_app-f9ce6c41c5a5dcf0.js',
          revision: 'f9ce6c41c5a5dcf0',
        },
        {
          url: '/_next/static/chunks/pages/_error-aee7115db6f1f942.js',
          revision: 'aee7115db6f1f942',
        },
        {
          url: '/_next/static/chunks/pages/_error-aee7115db6f1f942.js.map',
          revision: 'a7834063d522e3d28fa7a6b562f70cc1',
        },
        {
          url: '/_next/static/chunks/pages/index-e1db7b75e914f23b.js',
          revision: 'e1db7b75e914f23b',
        },
        {
          url: '/_next/static/chunks/pages/index-e1db7b75e914f23b.js.map',
          revision: '845f514589214c6848f6526adb7d5672',
        },
        {
          url: '/_next/static/chunks/pages/todo-b5f1ee6b5061e41f.js',
          revision: 'b5f1ee6b5061e41f',
        },
        {
          url: '/_next/static/chunks/pages/todo-b5f1ee6b5061e41f.js.map',
          revision: '83caed08096fafda487bbbf26a4ef7a2',
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0',
        },
        {
          url: '/_next/static/chunks/webpack-e3c7c028c033b144.js',
          revision: 'e3c7c028c033b144',
        },
        {
          url: '/_next/static/chunks/webpack-e3c7c028c033b144.js.map',
          revision: 'd05d38e0b6c3fb3fbdbe29a0e8a698ef',
        },
        {
          url: '/_next/static/css/591af44a18c8f949.css',
          revision: '591af44a18c8f949',
        },
        {
          url: '/_next/static/css/591af44a18c8f949.css.map',
          revision: '04b7e276c6cd855772769306b8db642c',
        },
        { url: '/favicon.ico', revision: 'c30c7d42707a47a3f4591831641e50dc' },
        {
          url: '/fonts/bold.ttf',
          revision: 'c9c7790611487f10ab2d674f6a8909d6',
        },
        {
          url: '/fonts/medium.ttf',
          revision: 'f27978ebb847738736f0bc1b76a96c0e',
        },
        {
          url: '/fonts/regular.ttf',
          revision: 'e191fa05c7960306760e908cc169f28b',
        },
        {
          url: '/icons/icon-192x192.png',
          revision: '5753e58a5befb19d0ce750fabf4b62c9',
        },
        {
          url: '/icons/icon-256x256.png',
          revision: 'cc4d41cd7522efac01b5f444d51f894e',
        },
        {
          url: '/icons/icon-384x384.png',
          revision: 'c0ad99cc9f8279a02b11e28c5ba721b7',
        },
        {
          url: '/icons/icon-512x512.png',
          revision: '6a1e059df69eb33d249fbc5a7b84ca4a',
        },
        { url: '/manifest.json', revision: '74778176493897413a63bae2ac2fcdd8' },
        { url: '/og-image.webp', revision: '7d6ab8b8b226dabe7bad7287f3289706' },
        { url: '/robots.txt', revision: '1cea2cb37783372ffa0f1a20343967b1' },
        { url: '/sitemap-0.xml', revision: '958c69f15e571a5aa00863941a98e900' },
        { url: '/sitemap.xml', revision: '3f3f6787f68764f56a215c18911e3539' },
        { url: '/toon.webp', revision: 'f462fb2598450e6381e2c1263cfe27f8' },
        { url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: c,
              state: a,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    )
})
//# sourceMappingURL=sw.js.map
