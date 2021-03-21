import React from "react";
import { AboutMeSection, AboutMeContainer } from "./aboutMeElements";
import { Stack } from "./stack";
import { Description } from "./description";

const AboutMe = () => {
  return (
    <AboutMeSection backgroundColor="white" id="about-me">
      <AboutMeContainer>
        <Description />
        <Stack />
      </AboutMeContainer>
    </AboutMeSection>
  );
};

export default AboutMe;
