import React, { useEffect, useState } from 'react';
import './preloader.css';

const Preloader = () => {
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    // Simulate typing complete after 3 seconds
    setTimeout(() => {
      setTypingDone(true);
    }, 3000);
  }, []);

  return (
    <div className={`preloader ${typingDone ? 'hide' : ''}`}>
      <div className="logo-3d">
        <div className="typewriter">
          <h1>Spotcomm Global</h1>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
