if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("my-service-worker.js");
}

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  navigator.serviceWorker.ready.then((registration) => {
    registration.pushManager.getSubscription().then((subscription) => {
      if (subscription) {
        // save subscription on DB
        console.log(subscription);
      } else {
        registration.pushManager
          .subscribe({
            userVisibleOnly: true,
            applicationServerKey:
              "BE1tPvfmImoJF3Pf7EW5V3hTtlWyrmhInlf0EcNqgiTajkEyWR-ix0BxcfK1xoBDJsTzfXrwjPX5jO6Ox5YvS1A",
          })
          .then((subscription) => {
            // save subscription on DB
          });
      }
    });
  });
});
