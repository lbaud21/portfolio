import React from "react";
import Asteroid from "../components/index";

const Asteroids = ({ number }) => {
  const asteroidsList = [];

  for (let i = 0; i < number; i++) {
    asteroidsList.push(
      <Asteroid
        key={i}
        number={i}
        time={
          Math.random < 0.25
            ? Math.floor(Math.random() * 7000) + 5000
            : Math.floor(Math.random() * 4000) + 1500
        }
      />
    );
  }

  return <>{asteroidsList}</>;
};

export default Asteroids;
