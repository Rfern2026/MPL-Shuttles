// Minimal service worker — no caching, always fetches fresh.
// This exists only so browsers treat the page as installable;
// it never serves stale data since your roster/check-ins are live.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => new Response('Offline', { status: 503 })));
});
