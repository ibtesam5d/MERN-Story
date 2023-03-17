import React from "react";
import Featured from "../../src/components/Featured/Featured";
import Slide from "../../src/components/Slide/Slide";
import "./Home.scss";
import Categorycard from "../../src/components/CategoryCard/Categorycard";
import { cards } from "../../data";

const Home = () => {
  return (
    <div>
      <Featured />
      <Slide slidesToShow={5}>
        {cards.map((item) => (
          <Categorycard item={item} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
