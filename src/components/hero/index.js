import React from "react";
import {
  HeroContainer,
  HeroBackground,
  HeroTitle,
  HeroHeader,
} from "./heroElements";
import Asteroids from "./asteroids/container";
import { useSectionRef } from "../../contexts/refContext";

const HeroSection = () => {
  const { heroSectionRef } = useSectionRef();
  return (
    <HeroContainer ref={heroSectionRef} backgroundColor="black" id="home">
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
