import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import getCurentUser from "../../utils/getCurrentUser";
import newRequest from "../../utils/newRequest";
import Review from "../Review/Review";
import "./Reviews.scss";
import { Link } from "react-router-dom";

const Reviews = ({ bookId }) => {
  const currentUser = getCurentUser();
  const queryClient = useQueryClient();
  const [errorUSer, setErrorUser] = useState(false);
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/reviews/${bookId}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post("/reviews", review);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentUser.isAuthor) {
      setErrorUser(true);
    }

    const desc = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({ bookId, desc, star });
  };

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {isLoading
        ? "loading"
        : error
        ? "Something went wrong!"
        : data.map((review) => <Review key={review._id} review={review} />)}
      <div className="add">
        <h3>Add a review</h3>
        {errorUSer && (
          <p style={{ color: `red` }}>Sorry, author can't post reviews</p>
        )}
        <form action="" className="addForm" onSubmit={handleSubmit}>
          {!currentUser && (
            <Link className="link pay-button" to={"/login"}>
              Please Login to Continue
            </Link>
          )}
          <input type="text" placeholder="write your opinion" />
          <select name="" id="">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
