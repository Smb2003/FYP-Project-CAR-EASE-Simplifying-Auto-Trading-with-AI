import React from "react";
import CarCard from "./CarCard";
import "../assets/css/CarCard.css";

export default function CarList() {
  const cars = [
    {
      carImage: "/images/car1.jpg",
      carName: "Tesla Model S",
      price: "$80,000",
      description: "Electric car with autopilot and premium features."
    },
    {
      carImage: "/images/car2.jpg",
      carName: "BMW X5",
      price: "$60,000",
      description: "Luxury SUV with comfort and performance."
    },
    {
      carImage: "/images/car1.jpg",
      carName: "Tesla Model S",
      price: "$80,000",
      description: "Electric car with autopilot and premium features."
    },
    {
      carImage: "/images/car2.jpg",
      carName: "BMW X5",
      price: "$60,000",
      description: "Luxury SUV with comfort and performance."
    },
    {
      carImage: "/images/car1.jpg",
      carName: "Tesla Model S",
      price: "$80,000",
      description: "Electric car with autopilot and premium features."
    },
    {
      carImage: "/images/car2.jpg",
      carName: "BMW X5",
      price: "$60,000",
      description: "Luxury SUV with comfort and performance."
    }
  ];

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {cars.map((car, idx) => (
        <CarCard
          key={idx}
          carImage={car.carImage}
          carName={car.carName}
          price={car.price}
          description={car.description}
        />
      ))}
    </div>
  );
}
