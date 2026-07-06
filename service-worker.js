const CACHE_NAME="dhc-wuma-rechenschieber-2026-v2";
const ASSETS=["./","./index.html","./style.css","./app.js","./manifest.json","./icons/icon-180.png","./icons/icon-192.png","./icons/icon-512.png","./icons/icon-512-maskable.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(u.hostname.includes("docs.google.com")||u.hostname.includes("googleusercontent.com")){e.respondWith(fetch(e.request));return}e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request)))});
