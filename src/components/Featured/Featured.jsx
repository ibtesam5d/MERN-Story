import React, { useState } from "react";
import "./Featured.scss";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate(`/books?category=${input}`);
  };
  return (
    <div className="featured">
      <div className="container">
        {/* ===== LEFT ======= */}
        <div className="left">
          <h1>
            Find your perfect <span className="story">story</span> here
          </h1>
          <div className="search">
            <div className="search-input">
              <BiSearch size={30} className="search-icon" />
              <input
                title="text-input"
                type="text"
                placeholder="Try 'comedy'"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button onClick={() => navigate("/books?category=comedy")}>
              Comedy
            </button>
            <button onClick={() => navigate("/books?category=action")}>
              Action
            </button>
            <button onClick={() => navigate("/books?category=mystery")}>
              Mystery
            </button>
          </div>
        </div>

        {/* ===== RIGHT ======= */}
        <div className="right">
          <img src="./images/abook.svg" alt="header image" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
