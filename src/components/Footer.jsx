import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer py-3">
      <div className="container text-center text-white">
        <p className="mb-1">&copy; {new Date().getFullYear()} CarEase. All Rights Reserved.</p>
        <p className="mb-0">
          Designed by <span className="footer-name">CarEase Team</span>
        </p>
      </div>
    </footer>
  );
}
