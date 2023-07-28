// Custom setInterval polyfill using requestAnimationFrame
window.setIntervalPolyfill = function(callback, interval) {
    const startTime = Date.now();
    let lastTickTime = startTime;
  
    // Helper function that will be called at each requestAnimationFrame
    function tick() {
      const currentTime = Date.now();
  
      // Check if the time elapsed since the last tick is greater than or equal to the specified interval
      if (currentTime - lastTickTime >= interval) {
        callback(); // Execute the callback function
        lastTickTime = currentTime; // Update the last tick time to the current time
      }
  
      // Continue to the next animation frame
      requestAnimationFrame(tick);
    }
  
    // Start the first requestAnimationFrame
    requestAnimationFrame(tick);
  };
  


  // Example usage of setIntervalPolyfill
  setIntervalPolyfill(function() {
    console.log("This message is logged repeatedly using setIntervalPolyfill");
  }, 2000);
  

  //The requestAnimationFrame function schedules a callback to be invoked before the next repaint, and the tick function will continue to be called repeatedly, checking the elapsed time until the specified delay is reached.