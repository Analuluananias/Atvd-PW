self.addEventListener('install', event => {
    console.log('Service Worker instalado!');
});

self.addEventListener('activate', event => {
    console.log('Service Worker ativado!');
});

self.addEventListener('fetch', event => {
    console.log('Requisição interceptada para:', event.request.url);
});
