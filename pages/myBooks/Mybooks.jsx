import React from "react";
import { Link } from "react-router-dom";
import "./Mybooks.scss";
import { MdDelete } from "react-icons/md";

const Mybooks = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isAuthor: true,
  };

  return (
    <div className="myBooks">
      <div className="container">
        <div className="title">
          <h1>{currentUser.isAuthor ? "Books" : "Orders"}</h1>
          {currentUser.isAuthor && (
            <Link to="/add">
              <button>Add New Book</button>
            </Link>
          )}
        </div>

        <div className="stories-container">
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
              <strong>Sales:</strong> 13
            </p>
            <div className="">
              <MdDelete className="delete" />
            </div>
          </div>
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
              <strong>Sales:</strong> 13
            </p>
            <div className="">
              <MdDelete className="delete" />
            </div>
          </div>
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
              <strong>Sales:</strong> 13
            </p>
            <div className="">
              <MdDelete className="delete" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mybooks;
