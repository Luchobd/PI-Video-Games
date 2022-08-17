import React from "react";
import "../stylesheets/Card.css";

function Card({ name, genders, rating, background_image }) {
  // let mapGenders =
  //   typeof genders[0] === "object" ? genders.map((item) => item.name) : genders;
  console.log(genders);
  return (
    <div className="card__container">
      <div className="card__content">
        <h2 className="card__title">{name}</h2>
        <picture className="card__img">
          <img src={background_image} alt={name} width="250" />
        </picture>
        <h3 className="card__genders">
          {typeof genders[0] === "object"
            ? genders.map((e) => e.name + " ")
            : genders.map((e) => e + " ")}
        </h3>
        <h4 className="card__rating">{rating}</h4>
      </div>
    </div>
  );
}

export default Card;
