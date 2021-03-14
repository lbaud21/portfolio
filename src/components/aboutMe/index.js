import React from "react";
import {
  AboutMeContainer,
  GridContainer,
  DescriptionContainer,
  QualitiesContainer,
  WhatILikeContainer,
  DescriptionTitle,
} from "./aboutMeElements";

const AboutMe = () => {
  return (
    <AboutMeContainer backgroundColor="white" id="about-me">
      <GridContainer>
        <DescriptionContainer>
          <DescriptionTitle>
            My name is Lucas and I'm a full stack developer
          </DescriptionTitle>
        </DescriptionContainer>
        <QualitiesContainer></QualitiesContainer>
        <WhatILikeContainer></WhatILikeContainer>
      </GridContainer>
    </AboutMeContainer>
  );
};

export default AboutMe;
