import styled from "styled-components";
import { SectionContainer } from "../generalComponents/sectionContainerElement";
import { OrbitronPolice } from "../generalComponents/police";

export const ContactMeSection = styled(SectionContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactMeContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

const ContactMeText = styled.p`
  color: black;
  font-family: ${OrbitronPolice};
  font-size: 4em;
  margin-top: 0.5em;
`;

export const ContactMeTextLeft = styled(ContactMeText)`
  transition: 1s ease-in-out;
  transform: ${({ visible }) =>
    visible ? "translateX(0%) scale(1)" : "translateX(-100%) scale(1.8)"};
  margin: 0;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

export const ContactMeTextRight = styled(ContactMeText)`
  margin: 0;
  transition: transform 1s ease-in-out, opacity 1s ease-in-out,
    background-position 0.5s;
  transform: ${({ visible }) =>
    visible ? "translateX(0%) scale(1)" : "translateX(100%) scale(0.2)"};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  background-size: 200% 100%;
  background-image: linear-gradient(to right, white 50%, black 50%);
  will-change: transform opacity background-position;

  &:hover {
    color: red;
    cursor: pointer;
    background-position: 100% -100%;
  }
`;
