import React from "react";
import "../assets/css/Services.css";

export default function Services() {
  const services = [
    "AI-powered price negotiation for smart deals.",
    "Real-time suggestions for buyers and sellers.",
    "Seamless communication between users.",
    "Secure and transparent transactions.",
    "Easy and fast car listings.",
    "Quick and easy registration process."
  ];

  return (
    <div id="services" className="about-us-section py-5 px-3 px-md-5 text-center">
      <h2 className="mb-5">Our Services</h2>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div className="service-point d-flex align-items-center text-start" key={idx}>
            <div className="service-number">{idx + 1}</div>
            <p className="service-text mb-0">{service}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
