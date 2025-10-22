/* sw.js - Quiz do Consumidor (PWA) */
const VERSION = 'v2.0.0';
const STATIC_CACHE = `static-${VERSION}`;
const STATIC_ASSETS = [
  '/',              // Netlify entrega index.html na raiz
  '/index.html',
  '/manifest.webmanifest',
  '/icons/icon-192.png',
  '/icons/icon-256.png',
  '/icons/icon-384.png',
  '/icons/icon-512.png',
  '/icons/maskable-512.png'
  // se separar css/js, adicione aqui
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(STATIC_CACHE).then((c) => c.addAll(STATIC_ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter(k => k !== STATIC_CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // network-first para quiz.json (se existir)
  if (url.pathname.endsWith('quiz.json')) {
    e.respondWith(
      fetch(e.request).then((res) => {
        const copy = res.clone();
        caches.open(STATIC_CACHE).then((c) => c.put(e.request, copy));
        return res;
      }).catch(() => caches.match(e.request))
    );
    return;
  }

  // cache-first para estáticos (mesma origem)
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(e.request).then((cached) => {
        return cached || fetch(e.request).then((res) => {
          // cache apenas GET navegável/estático
          if (e.request.method === 'GET' && res.status === 200 && res.type === 'basic') {
            const copy = res.clone();
            caches.open(STATIC_CACHE).then((c) => c.put(e.request, copy));
          }
          return res;
        });
      })
    );
  }
});
