import React from "react";
import AboutCard from "./AboutCard";

export default function AboutSection() {
  const people = [
    {
      name: "Shaikh Muhammad Bilal",
      description: "Backend Developer with expertise in Node.js and database management. Passionate about scalable systems and AI enthusiast.",
      image: "/images/person1.jpg",
      number: 1
    },
    {
      name: "Isbah Ansari",
      description: "MERN Developer and AI enthusiast. Loves building user-friendly applications and exploring new tech.",
      image: "/images/person2.jpg",
      number: 2
    },
    {
      name: "Farjad Zameer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam numquam, suscipit vitae nisi explicabo soluta consequuntur provident eaque reiciendis iusto fuga, incidunt magnam aliquam, qui itaque ullam a! Sapiente, ametgni quidem repellendus",
      image: "/images/person1.jpg",
      number: 3
    },
    {
      name: "Talha Ayub",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam numquam, suscipit vitae nisi explicabo soluta consequuntur provident eaque reiciendis iusto fuga, incidunt magnam aliquam, qui itaque ullam a! Sapiente, ametgni quidem repellendus",
      image: "/images/person1.jpg",
      number: 4
    },
  ];

  return (
    <div className="about-section py-5">
      {people.map((person, idx) => (
        <AboutCard
          key={idx}
          name={person.name}
          description={person.description}
          image={person.image}
          number={person.number}
        />
      ))}
    </div>
  );
}
