self.addEventListener('activate', (event) => {
    event.waitUntil(
        (async function () {
            const cacheNames = await caches.keys();
            await Promise.all(
                cacheNames.filter((cacheName) => {

                }).map((cacheName) => caches.delete(cacheName)),
            );
        })(),
    );
});

self.addEventListener('fetch', function(e) {
    event.respondWith(
        async () => {
            const cacheResponse = await caches.match(event.request);
            if (cacheResponse) {
                return cacheResponse;
            }

            const fetchRequest = event.request.clone();
            const fetchReponse = await fetch(fetchRequest);

            if (!fetchReponse || fetchReponse.status !== 200 || fetchReponse.type !== 'basic') {
                return fetchReponse;
            }

            const responseToCache = fetchResponse.clone();
            const cache = await caches.open(CacheName);

            cache.put(event.request, responseToCache);
            return fetchReponse;
        }
    );
})