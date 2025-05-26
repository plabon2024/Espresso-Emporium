import React from "react";
import Banner from "../component/Banner";
import CoffeeContainer from "../component/CoffeeContainer";
import Display from "../component/Display";

const Home = () => {
  return (
    <div>
      <div className="rancho-regular">
        <Banner></Banner>
      </div>
      <CoffeeContainer></CoffeeContainer>
      <Display></Display>
    </div>
  );
};

export default Home;
