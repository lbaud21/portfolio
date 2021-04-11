import React, { useState, useEffect } from "react";
import { AsteroidContainer, AsteroidElement } from "../styles";

const Asteroid = ({ number, time }) => {
  const [coord, setCoord] = useState([
    {
      x0: 0,
      x1: 100,
      y0: 0,
      y1: 100,
    },
  ]);

  const [rotation, setRotation] = useState(360);

  const generateRandomCoord = () => {
    const startCoord = [
      Math.floor(Math.random() * 100) + 1,
      Math.random() < 0.5 ? -40 : 140,
    ];
    const x0 = startCoord[Math.floor(Math.random() * 2)];
    const y0 = startCoord.filter((coord) => coord !== x0)[0];

    const x1 =
      x0 === 140 || x0 === -40 ? -(x0 - 100) : Math.floor(Math.random() * 101);
    const y1 =
      y0 === 140 || y0 === -40 ? -(y0 - 100) : Math.floor(Math.random() * 101);

    return { x0, y0, x1, y1 };
  };

  const generateRandomRotation = () => {
    const rotation = Math.floor(Math.random() * 2000);
    return rotation;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const coord = generateRandomCoord();
      const rotation = generateRandomRotation();
      setCoord(coord);
      setRotation(rotation);
    }, time);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <AsteroidContainer
      number={number}
      time={time}
      x0={`${coord.x0}%`}
      x1={`${coord.x1}%`}
      y0={`${coord.y0}%`}
      y1={`${coord.y1}%`}
    >
      <AsteroidElement
        number={number}
        time={time}
        rotation={`${rotation}deg`}
        src={`${process.env.PUBLIC_URL}/images/hero/asteroid.jpg`}
      />
    </AsteroidContainer>
  );
};

export default Asteroid;
