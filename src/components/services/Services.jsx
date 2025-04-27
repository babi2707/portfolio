import React from "react";
import "./services.css";
import Image1 from "../../assets/services-1.png";
import Image2 from "../../assets/services-2.png";
import Image3 from "../../assets/services-3.png";
import Image4 from "../../assets/services-4.png";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Frontend Development",
    description:
      "Designing and developing modern, responsive, and intuitive user interfaces with a strong emphasis on delivering seamless and engaging user experiences. I focus on creating accessible, high-performance, and scalable solutions that adapt seamlessly across various devices and platforms.",
  },
  {
    id: 2,
    image: Image2,
    title: "Backend Development",
    description:
      "Building robust, efficient, and scalable systems, with a strong focus on designing reliable architectures, implementing complex business logic, and ensuring seamless integration between services and platforms.",
  },
  {
    id: 3,
    image: Image3,
    title: "Database Development",
    description:
      "Designing, structuring, and optimizing databases to ensure high standards of efficiency, integrity, and scalability, while enabling seamless integration with backend systems and supporting business operations with reliable data solutions.",
  },
  {
    id: 4,
    image: Image4,
    title: "Unit Tests",
    description:
      "Developing and implementing automated tests to validate code quality, functionality, and reliability, ensuring that applications maintain high performance and stability throughout their lifecycle.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title secTitle">Services</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
