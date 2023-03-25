import React from "react";
import "./Book.scss";
import { Slider } from "infinite-react-carousel/lib";
import { BsFillStarFill, BsCheckLg } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../src/utils/newRequest";
import Reviews from "../../src/components/Reviews/Reviews";
import getCurentUser from "../../src/utils/getCurrentUser";

const Book = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentUser = getCurentUser();

  const { isLoading, error, data } = useQuery({
    queryKey: ["book"],
    queryFn: () =>
      newRequest.get(`/books/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  const userId = data?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  return (
    <div className="book">
      {isLoading ? (
        "Loading.."
      ) : error ? (
        "something went wrong.."
      ) : (
        <>
          <div className="page-title">
            <span className="breadcrumbs">{`Story - ${data.category}`}</span>

            <h1>{data.title}</h1>
          </div>

          <div className="container">
            {/* ======== LEFT ========== */}
            <div className="left">
              {/* <span className="breadcrumbs">Story - Action -</span>
         <h1>Caught in the plan</h1> */}
              {isLoadingUser ? (
                "loading"
              ) : errorUser ? (
                "failed to load"
              ) : (
                <div className="user">
                  <img
                    className="pp"
                    src={dataUser.img || "/images/userrn.png"}
                    alt={dataUser.username}
                  />
                  <span>{dataUser.username}</span>
                  <div className="stars">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <span>5</span>
                  </div>
                </div>
              )}
              <div className="cover">
                <img
                  src={
                    data.cover ||
                    "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  }
                  alt={`${data.title} cover image`}
                />
              </div>
              {/* ======= ABOUT THIS BOOK ========= */}
              <h2>About This Book</h2>
              <p>{data.desc}</p>
              {/* ======= ABOUT THE AUTHOR ========= */}
              <div className="seller">
                <h2>About The Author</h2>
                {isLoadingUser ? (
                  "Loading.."
                ) : errorUser ? (
                  "failed to load"
                ) : (
                  <>
                    <div className="user">
                      <img
                        src={dataUser.img || "/images/userrn.png"}
                        alt={dataUser.username}
                      />
                      <div className="info">
                        <span>{dataUser.username}</span>

                        {!isNaN(data.totalStars / data.starNumber) && (
                          <div className="stars">
                            {Array(
                              Math.round(data.totalStars / data.starNumber)
                            )
                              .fill()
                              .map((item, i) => (
                                <BsFillStarFill key={i} />
                              ))}
                            <span>
                              {Math.round(data.totalStars / data.starNumber)}
                            </span>
                          </div>
                        )}

                        <button className="contact-button">Contact Me</button>
                      </div>
                    </div>
                    <div className="box">
                      <hr />
                      <p>{dataUser.desc}</p>
                    </div>
                  </>
                )}
              </div>

              {/* ====== REVIEWS ======== */}
              <Reviews bookId={id} />
            </div>

            {/* ======== RIGHT ========== */}
            <div className="right">
              <div className="price">
                <h3>{data.title}</h3>
                <h2>$ {data.price}</h2>
              </div>
              <p>{data.shortDesc}</p>
              <div className="details">
                <div className="item">
                  <BsCheckLg />
                  <span>Instant Access</span>
                </div>
                <div className="item">
                  <GiTakeMyMoney />
                  <span>Moneyback guranteed</span>
                </div>
              </div>
              <div className="order-button">
                {currentUser?.isAuthor ? (
                  <Link className="link pay-button" to={`/add`}>
                    Create book
                  </Link>
                ) : (
                  currentUser && (
                    <Link className="link pay-button" to={`/pay/${id}`}>
                      Continue
                    </Link>
                  )
                )}
                {!currentUser && (
                  <Link className="link pay-button" to={"/login"}>
                    Please Login to Continue
                  </Link>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Book;
