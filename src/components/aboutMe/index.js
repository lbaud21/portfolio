import React from "react";
import { AboutMeSection, AboutMeContainer } from "./aboutMeElements";
import { Stack } from "./stack";
import { Description } from "./description";
import { useSectionRef } from "../../contexts/refContext";

const AboutMe = () => {
  const { aboutMeSectionRef } = useSectionRef();
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
