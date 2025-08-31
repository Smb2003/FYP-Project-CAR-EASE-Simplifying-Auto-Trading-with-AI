import React from "react";
import Card from "react-bootstrap/Card";
import "../assets/css/AboutCard.css";

export default function AboutCard({ name, description, image, number }) {
  return (
    <div id="about">
      <Card className="about-card mb-4 position-relative">
        <div className="d-flex flex-column flex-md-row align-items-center">
          {/* Person Image */}
          {image && (
            <Card.Img
              variant="left"
              src={image}
              className="about-card-img"
            />
          )}

          <Card.Body className="about-card-body text-center text-md-start">
            <Card.Title className="about-name">{name}</Card.Title>
            <Card.Text className="about-description">{description}</Card.Text>
          </Card.Body>

          {/* Number Badge */}
          {number && <div className="about-number">{number}</div>}
        </div>
      </Card>
    </div>
  );
}
