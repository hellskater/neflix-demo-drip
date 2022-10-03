import React from "react";
import ListToggle from "./ListToggle";
import { Link } from "react-router-dom";

const Item = ({ backdrop, title, score, overview, titleId }) => {
  console.log(titleId);
  return (
    <Link
      className="Item"
      to={`/movie/${titleId.id}`}
      style={{ backgroundImage: "url(" + backdrop + ")" }}
    >
      <div className="overlay">
        <div className="title">{title}</div>
        <div className="rating">{score} / 10</div>
        <div className="plot">{overview}</div>
        <ListToggle />
      </div>
    </Link>
  );
};

export default Item;
