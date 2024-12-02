import React, { useState } from 'react';

const VideoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="video-container" onClick={openPopup}>
        <img 
          src="/blogcard (1).png" 
          alt="Thumbnail" 
          className="thumbnail"
        />
        <div className="play-icon"></div>
      </div>

      {isOpen && (
        <div className="video-popup">
          <div className="popup-content">
            <span className="close-btn" onClick={closePopup}><img src='/x.png' className='w-25 h-25 d-flex justify-content-end mx-auto' /></span>
            <iframe
              width="560"
              height="315"
              src="https://youtu.be/2H1nD-3sD-M?si=6zl7bCtu3wYiU_xc"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="YouTube Video"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPopup;
