/* Explora el karso — service worker
   Guarda la app en el dispositivo para que funcione sin internet.
   CADA VEZ QUE SUBAS UN index.html NUEVO, sube también este archivo
   cambiando VERSION (por ejemplo 2026-10-25 → 2026-11-02). Así los iPads
   bajan la versión nueva la próxima vez que abran la app con internet. */
const VERSION = "2026-10-25";
const CACHE = "explora-el-karso-" + VERSION;
const FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-32.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith("explora-el-karso-") && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Primero lo guardado (abre al instante y sin señal); si hay internet, se actualiza en segundo plano. */
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    caches.open(CACHE).then(async cache => {
      const key = req.mode === "navigate" ? "./index.html" : req;
      const cached = await cache.match(key, { ignoreSearch: true });
      const fresh = fetch(req).then(res => {
        if (res && res.ok) cache.put(key, res.clone());
        return res;
      }).catch(() => null);
      return cached || (await fresh) || new Response("Sin conexión", { status: 503 });
    })
  );
});
