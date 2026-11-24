// Offline cache: the app shell and the encrypted books. New version = new cache.
const CACHE = 'library-4201bf743c';
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  // network first, so a new chapter shows up as soon as it is pushed; cache when offline
  e.respondWith(fetch(e.request, {cache: 'no-cache'}).then(r => {
    const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r;
  }).catch(() => caches.match(e.request, {ignoreSearch: false}).then(r => r || caches.match('./'))));
});
