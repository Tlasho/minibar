// Nuclear option to prevent all zooming
(function() {
  // Prevent zoom on double tap
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function(event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
  
  // Prevent pinch zoom
  document.addEventListener('touchmove', function(event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  }, { passive: false });
  
  // Disable all gesture events
  document.addEventListener('gesturestart', function(event) {
    event.preventDefault();
  });
  document.addEventListener('gesturechange', function(event) {
    event.preventDefault();
  });
  document.addEventListener('gestureend', function(event) {
    event.preventDefault();
  });
  
  // iOS specific: disable double tap to zoom
  document.documentElement.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  }, false);
  
  let lastTouchStart = 0;
  document.documentElement.addEventListener('touchend', function(event) {
    const now = Date.now();
    if (now - lastTouchStart < 300) {
      event.preventDefault();
    }
    lastTouchStart = now;
  }, false);
})();