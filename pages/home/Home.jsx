import React from "react";
import Featured from "../../src/components/Featured/Featured";
import Slide from "../../src/components/Slide/Slide";
import "./Home.scss";
import Categorycard from "../../src/components/CategoryCard/Categorycard";
import { cards, books } from "../../data";
import { BiCheckCircle } from "react-icons/bi";
import BooksCard from "../../src/components/BooksCard/BooksCard";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <Slide slidesToShow={5}>
        {cards.map((item) => (
          <Categorycard item={item} />
        ))}
      </Slide>
      {/* ======= Features ======= */}
      <div className="features">
        <div className="container">
          {/* left */}
          <div className="left">
            <h1>A whole world full of imaginations at your fingertips</h1>
            <div className="title">
              <BiCheckCircle size={25} className="icon" />
              <span>The best for every inspiration</span>
            </div>
            <p>
              Find high quality books written by our best authors only for you!
            </p>
            <div className="title">
              <BiCheckCircle size={25} className="icon" />
              <span>The best for every inspiration</span>
            </div>
            <p>
              Find high quality books written by our best authors only for you!
            </p>
            <div className="title">
              <BiCheckCircle size={25} className="icon" />
              <span>The best for every inspiration</span>
            </div>
            <p>
              Find high quality books written by our best authors only for you!
            </p>
            <div className="title">
              <BiCheckCircle size={25} className="icon" />
              <span>The best for every inspiration</span>
            </div>
            <p>
              Find high quality books written by our best authors only for you!
            </p>
          </div>
          {/* right */}
          <div className="right">
            <img
              src="/images/tackle.svg"
              alt="features image saying never stop reading"
            />
          </div>
        </div>
      </div>
      {/* ======== Second Feature - story pro ========== */}
      <div className="features dark">
        <div className="container">
          {/* left */}
          <div className="left">
            <h1>
              Story <span className="pro">PRO</span>
            </h1>
            <h2>An unlimited supply of books only for you</h2>
            <p className="pro-desc">
              Upgrade to a pro subscription today to never miss a single book
              from your favourite author.
            </p>

            <div className="title">
              <BiCheckCircle size={25} className="icon" />
              <span>The best for every inspiration</span>
            </div>
            <div className="title">
              <BiCheckCircle size={25} className="icon" />
              <span>The best for every inspiration</span>
            </div>
            <div className="title">
              <BiCheckCircle size={25} className="icon" />
              <span>The best for every inspiration</span>
            </div>
            <button>Explore Story PRO</button>
          </div>
          {/* right */}
          <div className="right">
            <img
              src="/images/never.svg"
              alt="features image saying never stop reading"
            />
          </div>
        </div>
      </div>
      {/* ========= Books Slide =========== */}
      <Slide slidesToShow={4}>
        {books.map((item) => (
          <BooksCard item={item} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
