import React from "react";
import "./Orders.scss";
import { AiFillMessage } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isAuthor: true,
  };

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>

        <div className="orders-container">
          <div className="stories">
            <div className="img-container">
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
            <p>
              <strong>Title:</strong> Caught in the plan
            </p>
            <p>
              <strong>Price:</strong> 59.<sup>99</sup>
            </p>
            <p>
              <strong>{currentUser.isAuthor ? "Author" : "Buyer"}</strong> Maria
              Anders
            </p>
            <div className="">
              <AiFillMessage className="message" size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
