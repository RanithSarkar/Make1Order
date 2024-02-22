// service-worker.js
const cacheName = 'your-app-cache-v1';
const cacheFiles = [
  '/',
  'index.html',
  'style.css',
  'index.js',
  'manifest.json',
  'Loho.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(cacheFiles);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
