import React from "react";
import { Link } from "react-router-dom";
import "./BookCard.scss";
import { BsFillStarFill, BsFillHeartFill } from "react-icons/bs";

const BookCard = ({ item }) => {
  return (
    <Link to="/book/12" className="link">
      <div className="bookCard">
        <img src={item.image} alt={item.title} />
        {/* ==== INFO ==== */}
        <div className="info">
          <div className="user">
            <img src={item.profilePic} alt={item.author} />
            <span>{item.author}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            <BsFillStarFill className="star-icon" />
            <span>{item.star}</span>
          </div>
        </div>

        {/* ==== DETAILS ==== */}

        <div className="detail">
          <BsFillHeartFill className="heart-icon" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>{item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
