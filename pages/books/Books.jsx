import React, { useState } from "react";
import "./Books.scss";
import { BsChevronDown } from "react-icons/bs";
import { books } from "../../data";
import BookCard from "../../src/components/BookCard/BookCard";

const Books = () => {
  const [open, setOpen] = useState(false);

  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  return (
    <div className="books">
      <div className="container">
        <span className="breadcrumbs">Story - Action</span>
        <h1>Non-stop Action</h1>
        <p>
          Explore the world of fights and dramas with story's action library
        </p>
        <div className="menu">
          <div className="left">
            <span>Price</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sortby</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <BsChevronDown className="down" onClick={() => setOpen(!open)} />

            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* ====== BOOKS ======== */}
        <div className="cards">
          {books.map((book) => (
            <BookCard item={book} key={book.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
