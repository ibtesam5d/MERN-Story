import React, { useEffect, useRef, useState } from "react";
import "./Books.scss";
import { BsChevronDown } from "react-icons/bs";
import BookCard from "../../src/components/BookCard/BookCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../src/utils/newRequest";
import { useLocation } from "react-router-dom";

const Books = () => {
  const [open, setOpen] = useState(false);

  const [sort, setSort] = useState("sales");
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const category = params.get("category");
  const all = params.get("all");

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["books"],
    queryFn: () =>
      newRequest
        .get(
          `/books${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [sort, category, all]);

  const apply = () => {
    refetch();
  };

  return (
    <div className="books">
      <div className="container">
        <span className="breadcrumbs">
          {all !== null ? `Story - ${all}` : `Story - ${category}`}
        </span>
        <h1>{all !== null ? all : category}</h1>
        <p>
          Explore the world of fights and dramas with story's action library
        </p>
        <div className="menu">
          <div className="left">
            <span>Price</span>
            <input ref={minRef} type="text" placeholder="min" />
            <input ref={maxRef} type="text" placeholder="max" />
            <button onClick={apply}>Apply</button>
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
          {isLoading
            ? "Loading.."
            : error
            ? "something went wrong"
            : data.map((book) => <BookCard item={book} key={book._id} />)}
        </div>
      </div>
    </div>
  );
};

export default Books;
