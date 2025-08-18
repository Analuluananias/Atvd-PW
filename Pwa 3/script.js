if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").
    then((registration) =>{
        console.log("Service Worker resgistrado com sucesso!", registration);
    })
    .catch((error) => {
        console.log("Service Worker resgistrado com sucesso!", registration);
    });
}