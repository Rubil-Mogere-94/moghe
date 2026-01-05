import React from 'react';

const Services = () => {
  return (
    <div className="container">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>Custom Software Development</h3>
          <p>We build scalable and robust custom software solutions tailored to your business needs. From web applications to enterprise software, our team delivers high-quality code and exceptional user experiences.</p>
          <div className="service-sub-sections">
            <div className="sub-section">
              <h4>Enterprise Solutions</h4>
              <p>Large-scale software for business automation and data management.</p>
            </div>
            <div className="sub-section">
              <h4>Cloud & DevOps</h4>
              <p>Cloud infrastructure, CI/CD pipelines, and scalable deployments.</p>
            </div>
            <div className="sub-section">
              <h4>Mobile Apps</h4>
              <p>Native and cross-platform mobile applications for iOS and Android.</p>
            </div>
          </div>
        </div>
        <div className="service-card">
          <h3>Game Development</h3>
          <p>Our passion for gaming drives us to create immersive and engaging experiences. We specialize in full-cycle game development for PC, console, and mobile platforms, using the latest technologies and creative design.</p>
          <div className="service-sub-sections">
            <div className="sub-section">
              <h4>PC & Console Games</h4>
              <p>High-fidelity games for Steam, PlayStation, Xbox, and Nintendo Switch.</p>
            </div>
            <div className="sub-section">
              <h4>Mobile Games</h4>
              <p>Casual and core games for the iOS and Android app stores.</p>
            </div>
            <div className="sub-section">
              <h4>VR/AR Experiences</h4>
              <p>Immersive virtual and augmented reality applications for training and entertainment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
