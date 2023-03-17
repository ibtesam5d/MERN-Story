import React from "react";
import "./Featured.scss";
import { BiSearch } from "react-icons/bi";

const Featured = () => {
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
              <input type="text" placeholder="Try 'comedy'" />
            </div>
            <button>Search</button>
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
