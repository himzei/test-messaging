self.addEventListener("push", (event) => {
  const { title, body } = event.data.json();
  event.waitUntil(self.registration.showNotification(title, { body }));
});

self.addEventListener("sync", (event) => {
  const { title, body } = event.data.json();
  event.waitUntil(self.registration.showNotification(title, { body }));
});
