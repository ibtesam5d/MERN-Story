import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";
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
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
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
          {currentUser !== null && !currentUser?.isAuthor && (
            <Link to="/" className="link">
              Become an Author
            </Link>
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
                  <Link className="link" to="/messages">
                    Messages
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
      {active && (
        <>
          <hr />
          <div className="menu">
            <Link className="link" to="/">
              Action
            </Link>
            <Link className="link" to="/">
              Sci-fi
            </Link>
            <Link className="link" to="/">
              Romance
            </Link>
            <Link className="link" to="/">
              Comedy
            </Link>
            <Link className="link" to="/">
              Fantasy
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
