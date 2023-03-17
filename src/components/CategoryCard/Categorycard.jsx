import React from "react";
import { Link } from "react-router-dom";
import "./Categorycard.scss";

const Categorycard = ({ item }) => {
  return (
    <Link to="/books?cat=romance" key={item.id}>
      <div className="categoryCard">
        <img src={item.image} alt={item.title} />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
};

export default Categorycard;
