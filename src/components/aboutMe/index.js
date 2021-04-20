import React from "react";
import { AboutMeSection, AboutMeContainer } from "./aboutMeElements";
import { Stack } from "./stack";
import { Description } from "./description";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const AboutMe = () => {
  const { aboutMeSectionRef, aboutMeVisible } = useIntersectionObserver();

  return (
    <AboutMeSection
      ref={aboutMeSectionRef}
      backgroundColor="white"
      id="about-me"
    >
      <AboutMeContainer>
        <Description />
        <Stack />
      </AboutMeContainer>
    </AboutMeSection>
  );
};

export default AboutMe;
