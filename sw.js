self.addEventListener('install', (e) => {
  console.log('[Service Worker] Terpasang');
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Hanya numpang lewat agar syarat PWA terpenuhi
  e.respondWith(fetch(e.request).catch(() => new Response('Sedang Offline')));
});
