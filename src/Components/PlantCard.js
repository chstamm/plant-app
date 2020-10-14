import React from "react";

const PlantCard = (props) => {
  return (
    <div className="plantCard">
      <h1>{props.common_name}</h1>
      <img src={props.img} alt="plant"></img>
      <h4>{props.genus}</h4>
      <h2>{props.family_common_name}</h2>
      <h3>{props.scientific_name}</h3>
      <h3>{props.family}</h3>
      <p>{props.year}</p>
    </div>
  );
};

export default PlantCard;
