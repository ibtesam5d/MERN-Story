import React, { useState } from "react";
import "./Featured.scss";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate(`/books?search=${input}`);
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
                type="text"
                placeholder="Try 'finding lucy..'"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Action Comedy</button>
            <button>Office Comedy</button>
            <button>Off World Sci-fi</button>
            <button>Magic!</button>
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
