self.addEventListenner("install", (event) => {
    caches.open("tudo-meu-amor").then((cache)) => {
        consolelog("Cache aberto!")
        cache.add("index.html")
    })
})

self.addEventListenner("install", (event) => (
    console.log("Service Worker instalado")
));
self.addEventListenner("active", (event) => (
    console.log("Service Worker ativado")
));
self.addEventListenner("fetch", (event) => (
    event.responWith(fetch(event.request))
));
