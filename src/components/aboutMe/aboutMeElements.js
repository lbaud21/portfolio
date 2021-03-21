import styled from "styled-components";
import { SectionContainer } from "../generalComponents/sectionContainerElement";

export const AboutMeSection = styled(SectionContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutMeContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  padding: 1em;
`;

export const ContainerTitle = styled.h2`
  color: black;
  font-weight: bold;
  font-size: 2em;
  margin-top: 0.5em;
`;
