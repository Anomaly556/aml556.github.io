self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async function () {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames
          .filter((cacheName) => {})
          .map((cacheName) => caches.delete(cacheName))
      );
    })()
  );
});

self.addEventListener("fetch", (e) => {
  event.respondWith(async () => {
    // キャッシュがあった場合は、キャッシュの内容を返す。
    const cacheResponse = await caches.match(event.request);
    if (cacheResponse) {
      return cacheResponse;
    }

    // request を複製する（ストリームは再利用できないので）
    const fetchRequest = event.request.clone();
    const fetchResponse = await fetch(fetchRequest);

    // レスポンスが正しくない場合はそのまま返却
    if (
      !fetchResponse ||
      fetchResponse.status !== 200 ||
      fetchResponse.type !== "basic"
    ) {
      return fetchResponse;
    }

    // response を複製する（こちらも同じくストリームは再利用できないので）
    const responseToCache = fetchResponse.clone();
    const cache = await caches.open(CacheName);

    // cache に登録する
    cache.put(event.request, responseToCache);
    return fetchResponse;
  });
});
