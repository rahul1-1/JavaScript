// Custom setTimeout polyfill using requestAnimationFrame
window.setTimeoutPolyfill = function(callback, delay) {
    const startTime = Date.now();
  
    // Helper function that will be called at each requestAnimationFrame
    function tick() {
      // Check if the time elapsed is greater than or equal to the specified delay
      if (Date.now() - startTime >= delay) {
        callback(); // Execute the callback function
      } else {
        requestAnimationFrame(tick); // Continue to the next animation frame
      }
    }
  
    // Start the first requestAnimationFrame
    requestAnimationFrame(tick);
  };
  
  // Example usage of setTimeoutPolyfill
  setTimeoutPolyfill(function() {
    console.log("This message is delayed using setTimeoutPolyfill");
  }, 5000);

  