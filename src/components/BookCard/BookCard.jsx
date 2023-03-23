import React from "react";
import { Link } from "react-router-dom";
import "./BookCard.scss";
import { BsFillStarFill, BsFillHeartFill } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const BookCard = ({ item }) => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  });

  console.log(item);

  return (
    <Link to="/book/12" className="link">
      {isLoading ? (
        "Loading"
      ) : error ? (
        "failed to load"
      ) : (
        <div className="bookCard">
          <img src={item.cover} alt={item.title} />
          {/* ==== INFO ==== */}
          <div className="info">
            <div className="user">
              <img src={data.img} alt={data.username} />
              <span>{data.username}</span>
            </div>

            <p>{item.desc}</p>
            <div className="star">
              <BsFillStarFill className="star-icon" />
              <span>
                {!isNaN(item.totalStars / item.starNumber) &&
                  Math.round(item.totalStars / item.starNumber)}
              </span>
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
      )}
    </Link>
  );
};

export default BookCard;
