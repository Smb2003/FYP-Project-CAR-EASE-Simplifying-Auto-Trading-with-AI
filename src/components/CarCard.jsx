import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../assets/css/CarCard.css"; // optional custom CSS

export default function CarCard({ carImage, carName, price, description }) {
  return (
    <div className="margin" id="cars">
        <Card style={{ width: "22rem", margin: "10px" }}>
      <Card.Img variant="top" src={carImage} />

      <Card.Body>
        {/* Title + Price */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Card.Title className="mb-0">{carName}</Card.Title>
          <span className="text-primary fw-bold">{price}</span>
        </div>

        {/* Description */}
        <Card.Text className="text-start description">{description}</Card.Text>

        {/* Buttons */}
        <div className="d-flex justify-content-between">
          <Button variant="success">Buy Now</Button>
          <Button variant="outline-success" className="details">Details</Button>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <Button variant="info">Chat with AI</Button>
        </div>
      </Card.Body>
    </Card>

    </div>
  );
}
