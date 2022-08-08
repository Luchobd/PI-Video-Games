import React from "react";

function Card({ id, name, genders, background_image }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <h4>{genders}</h4>
      <img src={background_image} alt={name} width="250" />
    </div>
  );
}

export default Card;
