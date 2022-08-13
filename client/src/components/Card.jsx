import React from "react";

function Card({ name, genders, rating, background_image }) {
  let mapGenders =
    typeof genders[0] === "object" ? genders.map((item) => item.name) : genders;
  console.log(genders);
  console.log(JSON.stringify(genders));
  // console.log(...genders);
  return (
    <div className="card">
      <h2>{name}</h2>
      <h3>{mapGenders}</h3>
      <h4>{rating}</h4>
      <img src={background_image} alt={name} width="250" />
    </div>
  );
}

export default Card;
