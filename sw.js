self.addEventListener('install', e => {
  const timeStamp = Date.now();
  e.waitUntil(
    caches.open('RestoMapp').then(cache => {
      return cache.addAll([
        				`/`,
					`/index.html?timestamp=${timeStamp}`,
					`/js/app.js?timestamp=${timeStamp}`,
					`/css/styles.css?timestamp=${timeStamp}`,
					`/images/Baguio.png?timestamp=${timeStamp}`,
					`/images/marker.png?timestamp=${timeStamp}`
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch: true}).then(response => {
      return response || fetch(event.request);
    })
  );
});