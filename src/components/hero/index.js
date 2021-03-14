import React from "react";
import {
  HeroContainer,
  HeroBackground,
  HeroVideo,
  HeroTitle,
  HeroHeader,
} from "./heroElements";

const HeroSection = () => {
  return (
    <HeroContainer backgroundColor="black" id="home">
      <HeroBackground>
        <HeroVideo
          /*autoPlay*/
          loop
          muted
          src={`${process.env.PUBLIC_URL}/videos/heroVideo-3840x2160.mp4`}
          type="video/mp4"
        />
      </HeroBackground>
      <HeroHeader>
        <HeroTitle>
          Hello there! I'm Lucas Baudino <br /> I'm a full-stack web developer
        </HeroTitle>
      </HeroHeader>
    </HeroContainer>
  );
};

export default HeroSection;
