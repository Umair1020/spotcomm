import React from 'react';


const services = [
  {
    image: 'hotel (9).png', // Replace with actual image paths
    title: 'Quad IoT Networks',
    description: 'Building high-speed IoT communications networks for secure, comprehensive, and remotely managed engineering.',
  },
  {
    image: 'hotel (2).png',
    title: 'Bandwidth Management',
    description: 'Optimize network resources and manage bandwidth effectively to deliver quality services.',
  },
  {
    image: 'hotel (3).png',
    title: 'Firewalls and Security Protocols',
    description: 'Maintain network integrity with advanced firewalls and security protocols.',
  },
  {
    image: 'hotel (4).png',
    title: 'Quad Data Privacy',
    description: 'Implement robust data privacy measures that meet global standards.',
  },
  {
    image: 'hotel (5).png',
    title: '24/7 Network Monitoring',
    description: 'Monitor your network for optimal uptime and reliability around the clock.',
  },
  {
    image: 'hotel (6).png',
    title: 'IoT Integration',
    description: 'Streamline IoT systems and devices for better network efficiency.',
  },
  {
    image: 'hotel (7).png',
    title: 'Telehost Networking Infrastructure',
    description: 'Design robust networking infrastructure for telecommunication providers.',
  },
  {
    image: 'hotel (8).png',
    title: 'Managed Network Services',
    description: 'Ensure network reliability with fully managed service offerings.',
  },
  {
    image: 'hotel (11).png',
    title: 'Cost-Effective Solutions',
    description: 'Maximize ROI with solutions that offer cost efficiency for network management.',
  },
  {
    image: 'hotel (10).png',
    title: 'Technical Support and Training',
    description: 'Get expert technical support and training for your IT staff.',
  },
];

const ServicesGrid = () => {
  return (
    <div className="services-grid">
      <h2>What We Provide To The Industry</h2>
      <div className="grid-container">
        {services.map((service, index) => (
          <div key={index} className="grid-item">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;



