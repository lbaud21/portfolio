import React from "react";
import {
  HeroContainer,
  HeroBackground,
  HeroTitle,
  HeroHeader,
} from "./heroElements";
import Asteroids from "./asteroids/container";

const HeroSection = () => {
  return (
    <HeroContainer backgroundColor="black" id="home">
      <HeroBackground>
        <Asteroids number={4} />
      </HeroBackground>
      <HeroHeader>
        <HeroTitle>
          Hello there! I'm Lucas Baudino <br /> I'm a web developper
        </HeroTitle>
      </HeroHeader>
    </HeroContainer>
  );
};

export default HeroSection;
