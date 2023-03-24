import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";
import { cards } from "../../../data.js";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const getUser = JSON.parse(localStorage.getItem("currentUser"));
  // console.log(getUser);
  const currentUser = getUser?.userInfo;
  // console.log(currentUser);

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to={"/"} className="link">
            <span className="text">story</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <Link className="link" to="/">
            Home
          </Link>
          {currentUser?.isAuthor ? (
            <Link to="/" className="link">
              Reader
            </Link>
          ) : currentUser !== undefined && currentUser?.isAuthor ? (
            <Link to="/" className="link">
              Author
            </Link>
          ) : (
            <Link to="/books?all=all-book" className="link"></Link>
          )}

          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <BiUserCircle size={30} className="user-icon" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isAuthor && (
                    <>
                      <Link className="link" to="/my-books">
                        My Books
                      </Link>
                      <Link className="link" to="/add">
                        Add New Book
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">
                Sign In
              </Link>
              <Link to="/register" className="link">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {active && pathname === "/" ? (
        <>
          <hr />
          <div className="menu">
            {cards.map((item) => {
              return (
                <Link
                  className="link"
                  to={`/books?category=${item.category}`}
                  key={item.id}
                >
                  {item.category}
                </Link>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <hr />
          <div className="menu">
            {cards.map((item) => {
              return (
                <Link
                  className="link"
                  to={`/books?category=${item.category}`}
                  key={item.id}
                >
                  {item.category}
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
