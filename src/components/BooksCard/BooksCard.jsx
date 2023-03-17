import React from "react";
import { Link } from "react-router-dom";
import "./BooksCard.scss";

const BooksCard = ({ item }) => {
  return (
    <Link to="/" className="link" key={item.id}>
      <div className="booksCard">
        <img src={item.image} alt={item.title} />
        <div className="info">
          <img src={item.profilePic} alt={item.author} />
          <div className="texts">
            <h2>{item.category}</h2>
            <span>{item.author}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BooksCard;
