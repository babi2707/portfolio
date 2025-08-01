import React from "react";
import "./resume.css";
import Data from "./Data";

const Card = (props) => {
  return (
    <div className={`timeline__item ${props.isSubcategory ? 'subcategory' : ''} ${props.isLast ? 'last' : ''}`}>
        <i className={props.icon}></i>
        <span className="timeline__date">{props.year}</span>
        <h3 className="timeline__title">{props.title}</h3>
        <p className="timeline__text">{props.desc}</p>
    </div>
  );
};

export default Card;
