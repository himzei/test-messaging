self.addEventListener("push", function (event) {
  const payload = event.data ? event.data.text() : "no payload";
  event.waitUntil(
    self.registration.showNotification("PWA Web Push", {
      body: payload,
    })
  );
});
