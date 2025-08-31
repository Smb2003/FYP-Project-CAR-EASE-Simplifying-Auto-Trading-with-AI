// Main.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Main.css"; // custom CSS for background + faded effect

export default function Main() {
  return (
    <div id="home" className="hero-section d-flex align-items-center justify-content-center text-center">
      <div className="overlay"></div>
      <div className="content text-white px-3">
        <h1 className="display-3 fw-bold">CarEase</h1>
        <h3 className="mb-3">Simplifying Auto Trading with AI</h3>
        <p className="lead mb-4">
          CarEase is your intelligent assistant for car buying and selling.
          With AI-powered price negotiation, real-time suggestions, and
          seamless communication between buyers and sellers, we make auto
          trading smarter, faster, and more transparent. Your dream car is
          just a few clicks away.
        </p>
        <button className="btn btn-primary btn-lg">Get Started</button>
      </div>
    </div>
  );
}


