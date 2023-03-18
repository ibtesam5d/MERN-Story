import React from "react";
import "./Book.scss";
import { Slider } from "infinite-react-carousel/lib";
import { BsFillStarFill, BsCheckLg } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";

const Book = () => {
  return (
    <div className="book">
      <div className="page-title">
        <span className="breadcrumbs">Story - Action -</span>
        <h1>Caught in the plan</h1>
      </div>

      <div className="container">
        {/* ======== LEFT ========== */}
        <div className="left">
          {/* <span className="breadcrumbs">Story - Action -</span>
          <h1>Caught in the plan</h1> */}
          <div className="user">
            <img
              className="pp"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>Anna Bell</span>
            <div className="stars">
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <span>5</span>
            </div>
          </div>
          <div className="cover">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
          <h2>About This Book</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
            deleniti illo, a ab repellendus debitis ratione accusantium quasi ex
            at libero accusamus sed minima blanditiis iusto iste unde? Pariatur
            error architecto quaerat consectetur commodi ut nobis velit autem
            ducimus enim alias incidunt doloremque provident rem, dolorum nisi
            voluptate illum amet. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veniam, sed neque, blanditiis dolorem a natus esse
            magnam ipsam atque, velit quibusdam eaque libero odio error rerum
            optio voluptatibus alias! Fuga libero ex reiciendis impedit vitae
            culpa quidem ipsa cumque rem hic ut unde in dolor quam nulla
            blanditiis, dolorum saepe nam sint ducimus eius laudantium.
            Temporibus officia deleniti incidunt soluta! Quibusdam laboriosam
            tempora ad, distinctio, aspernatur odit sit necessitatibus incidunt
            nulla, non eaque enim perspiciatis impedit consequatur reiciendis
            sed harum rerum quia labore doloribus laborum quod numquam iste!
            Dolore, suscipit. Praesentium qui repellat veniam repellendus
            blanditiis doloremque distinctio delectus dolorum?
          </p>
          <div className="seller">
            <h2>About The Author</h2>
            <div className="user">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info">
                <span>Anna Bell</span>
                <div className="stars">
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <hr />
              <p>
                My name is Anna, I enjoy writing stories. I hope that you love
                my stories. Please let me know if you like to read any
                particular genre from me. Also, don't forget to write a review.
              </p>
            </div>
          </div>

          {/* ====== REVIEWS ======== */}
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Garner David</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Excepturi quibusdam velit assumenda aperiam iste deleniti
                voluptate blanditiis? Atque fugiat nihil officia? Culpa expedita
                sint nostrum voluptatem consequatur esse reiciendis veritatis
                at, facere sit fuga delectus deleniti blanditiis provident
                repellendus sapiente?
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Sidney Owen</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                      alt=""
                    />
                    <span>Germany</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente aut deleniti doloribus possimus ipsa perspiciatis,
                repellat quos voluptatum nobis eum beatae nisi odit voluptatibus
                explicabo.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Lyle Giles </span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia officiis saepe eius aspernatur sit, veniam, nesciunt
                quod modi vel repellat quis obcaecati odit vitae quos cumque
                aperiam numquam, adipisci porro!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>

        {/* ======== RIGHT ========== */}
        <div className="right">
          <div className="price">
            <h3>Caught in the plan</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>
            Get absolute action and drama in this thrill-packed action series
            from one of our best author!
          </p>
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

          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
