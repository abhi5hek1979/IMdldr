self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('fetch', function(event) {
  // No-op, can be extended for offline features if needed
});
