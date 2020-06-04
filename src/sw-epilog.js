// Add a listener to receive messages from clients
self.addEventListener('message', function (event) {
  // Force SW upgrade (activation of new installed SW version) when button is clicked
  if (event.data === 'skipWaiting') {
    self.skipWaiting()
  }
})