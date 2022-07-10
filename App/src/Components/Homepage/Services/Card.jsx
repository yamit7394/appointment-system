import React from "react";
import './Card.css';
const Card = (props) => {
  return (
    <>
      <div className="card card-homepage">
        <div className="card-body">
          <h5 className="card-title">{props.data.title}</h5>
          <hr/>
          <p className="card-text">
            {props.data.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
