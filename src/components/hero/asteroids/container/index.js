import React from "react";
import Asteroid from "../components/index";

const Asteroids = ({ number }) => {
  const asteroidsList = [];

  for (let i = 0; i < number; i++) {
    asteroidsList.push(
      <Asteroid
        key={i}
        number={i}
        time={Math.floor(Math.random() * 6000) + 2000}
      />
    );
  }

  return <>{asteroidsList}</>;
};

export default Asteroids;
