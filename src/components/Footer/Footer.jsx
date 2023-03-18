import React from "react";
import "./Footer.scss";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        {/* ========= TOP ======= */}
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Action</span>
            <span>Action</span>
            <span>Action</span>
            <span>Action</span>
            <span>Action</span>
            <span>Action</span>
            <span>Action</span>
            <span>Action</span>
            <span>Action</span>
          </div>
        </div>
        <hr />
        {/* ========= BOTTOM ======= */}
        <div className="bottom">
          <div className="left">
            <h2>Story</h2>
            <span>&copy; Story Ltd. 2023</span>
          </div>
          <div className="right">
            <BsFacebook className="icon" size={20} />
            <BsInstagram className="icon" size={20} />
            <BsTwitter className="icon" size={20} />
            <BsPinterest className="icon" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
