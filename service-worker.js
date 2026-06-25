const CACHE='fog-shell-v2';
const SHELL=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png',
  './img/bg-title.jpg','./img/char-rep.jpg','./img/char-doc.jpg','./img/char-stu.jpg',
  './img/npc-joe.jpg','./img/npc-gu.jpg','./img/card-back.jpg',
  './img/scene-archive.jpg','./img/scene-dock.jpg','./img/scene-tavern.jpg',
  './img/scene-secret.jpg','./img/scene-lantern.jpg','./img/scene-lighthouse.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()).catch(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const url=new URL(e.request.url);
  if(url.hostname.includes('googleapis.com'))return;
  if(e.request.method!=='GET')return;
  e.respondWith(caches.match(e.request).then(cached=>{
    const fetched=fetch(e.request).then(r=>{
      if(r&&r.ok&&url.origin===location.origin){const cp=r.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));}
      return r;
    }).catch(()=>cached);
    return cached||fetched;
  }));
});
