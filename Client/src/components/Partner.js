import React from 'react';
import './partner.css'; // Import your custom CSS

const Partners = () => {
  return (
    <section className="partners-section cmp-border-header cmp-border-header-650763923"  data-aos="fade-right" data-aos-delay="500"> <br /><br />
      <h2 className="partners-title">PARTNERS</h2> <br />
      <div className="partners-grid">
        <div className="partner-card">
          <img src="/partner (1).png" alt="AWS" className="partner-logo" />
        </div>
        <div className="partner-card">
          <img src="/partner (2).png" alt="Tencent" className="partner-logo" />
        </div>
        <div className="partner-card">
          <img src="/partner3.png" alt="Microsoft Azure" className="partner-logo" />
        </div>
        <div className="partner-card">
          <img src="/partner4.png" alt="Google Cloud" className="partner-logo" />
        </div>
        <br />  <br />
      </div>
    </section>
  );
};

export default Partners;
