import styled from "styled-components";
import { SectionContainer } from "../generalComponents/sectionContainerElement";

export const ProjectSection = styled(SectionContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const ProjectItemWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin: 1em;
  border-radius: 10%;
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.7;
  transition: transform 0.5s ease;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    transform: scale(1.1);
    & > p {
      opacity: 1;
      transform: translateY(100%);
      background-color: black;
    }
  }
`;

export const ProjectItemTitle = styled.p`
  color: red;
  font-size: 2em;
  width: 80%;
  text-align: center;
  opacity: 0;
  position: absolute;
  top: -10%;
  will-change: transform, opacity;
  transition: 0.5s ease-out;
`;
