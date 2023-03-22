import React from "react";
import "./Orders.scss";
import { AiFillMessage } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import newRequest from "../../src/utils/newRequest";
import { useQuery } from "@tanstack/react-query";

const Orders = () => {
  const getUser = JSON.parse(localStorage.getItem("currentUser"));
  // console.log(getUser);
  const currentUser = getUser?.userInfo;
  // console.log(currentUser);

  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest.get(`/orders`).then((res) => {
        return res.data;
      }),
  });
  console.log(data);
  return (
    <div className="orders">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Orders</h1>
          </div>

          <div className="orders-container">
            {/* {data.map((order) => {
              <div className="stories" key={order._id}>
                <div className="img-container">
                  <img
                    className="image"
                    src={
                      order.img ||
                      "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    }
                    alt={order.title}
                  />
                </div>
                <p>
                  <strong>Title:</strong> {order.title}
                </p>
                <p>
                  <strong>Price:</strong> {order.price}
                </p>
                <p>
                  <strong>{currentUser?.isAuthor ? "Buyer" : "Author"}</strong>{" "}
                  Maria Anders
                </p>
                <div className="">
                  <AiFillMessage className="message" size={25} />
                </div>
              </div>;
            })} */}
            {data.map((item) => {
              return (
                <div className="stories" key={item._id}>
                  <div className="img-container">
                    <img
                      className="image"
                      src={
                        item.img ||
                        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      }
                      alt={""}
                    />
                  </div>
                  <p>
                    <strong>Title:</strong>
                    {item.title}
                  </p>
                  <p>
                    <strong>Price:</strong>
                    {item.price}
                  </p>
                  <p>
                    <strong>
                      {currentUser?.isAuthor ? "Buyer" : "Author"}
                    </strong>{" "}
                    Maria Anders
                  </p>
                  <div className="">
                    <AiFillMessage className="message" size={25} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
