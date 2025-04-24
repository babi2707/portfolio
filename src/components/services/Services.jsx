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
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    image: Image2,
    title: "Backend Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    image: Image3,
    title: "Database Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    image: Image4,
    title: "Unit Tests",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title secTitle">Services</h2>

      <div className="services__container grid">
        {data.map(({id, image, title, description}) => {
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
