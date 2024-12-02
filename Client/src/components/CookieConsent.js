import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const userConsent = localStorage.getItem('cookieConsent');
    if (!userConsent) {
      setIsVisible(true); 
    }
  }, []);

  const handleAccept = () => {
    // Logic to accept cookies
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    // Logic to reject cookies
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent">
      <div className="cookie-text">
        We use cookies on our website to provide you with a more personalized digital experience. To learn more about how we use cookies and how you can change your settings, please refer to the following:
        <a href="https://example.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Statement</a>,
        <a href="https://example.com/cookies" target="_blank" rel="noopener noreferrer">Cookie Classification</a>
      </div> <br />
      <div className="cookie-buttons d-flex">
        <button className="reject-btn mx-2" onClick={handleReject}>Reject All</button>
        <button className="accept-btn" onClick={handleAccept}>Accept All</button>
        <button className="close-btn mx-2" onClick={handleReject}>✕</button>
      </div>
    </div>
  );
};

export default CookieConsent;
