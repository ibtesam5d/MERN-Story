import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.scss";

const Categorycard = ({ item }) => {
  return (
    <Link to="/books?cat=romance" className="link card">
      <div className="categoryCard">
        <img src={item.image} alt={item.title} />
        <span className="title">{item.category}</span>
      </div>
    </Link>
  );
};

export default Categorycard;
