import React from "react";
import {
  DescriptionContainer,
  DescriptionContent,
  ProfileImageContainer,
  ProfileImage,
} from "./descriptionElements";
import { ContainerTitle } from "../aboutMeElements";

export const Description = () => {
  return (
    <DescriptionContainer>
      <ProfileImageContainer>
        <ProfileImage
          src={`${process.env.PUBLIC_URL}/images/profile/profile-picture.jpg`}
        />
      </ProfileImageContainer>
      <ContainerTitle>So...who am I?</ContainerTitle>
      <DescriptionContent>
        First of all, a guy who loves what he does. I truly believe that web
        development is an amazing field that make people life easier. As a
        developer, as in life, I like to see the whole picture, that's why I
        chose to learn both front end and back end. I focus on writting clean
        and scalable code to deliver beautiful app that are easy to maintain.
        <br />
      </DescriptionContent>
    </DescriptionContainer>
  );
};
