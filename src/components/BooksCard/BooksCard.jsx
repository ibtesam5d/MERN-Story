import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./BooksCard.scss";

const BooksCard = ({ item }) => {
  // const userData = item?.userId;

  // const { isLoading, error, data, refetch } = useQuery({
  //   queryKey: ["homepageBooks"],
  //   queryFn: () =>
  //     newRequest.get(`/users/${userData}`).then((res) => {
  //       return res.data;
  //     }),
  //   enabled: !!userData,
  // });

  // console.log(userData);

  return (
    <>
      <Link to={`/book/${item._id}`} className="link" key={item._id}>
        <div className="booksCard">
          <img src={item.cover} alt={item.title} />

          <div className="info">
            {/* <img src={data.img} alt={data.username} /> */}
            <div className="texts">
              <h2>{item.category}</h2>
              {/* <span>{data.username}</span> */}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BooksCard;
