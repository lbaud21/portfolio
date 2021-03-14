import styled from "styled-components";
import { SectionContainer } from "../generalComponents/sectionContainerElement";

export const AboutMeContainer = styled(SectionContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GridContainer = styled.div`
  width: 80%;
  height: 80%;
  display: grid;
  column-gap: 1%;
  row-gap: 1%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 60% 39%;
  grid-template-areas:
    "description description description description"
    "qualities qualities whatILike whatILike";
  padding: 1em;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  background: rgba(170, 5, 5, 0.7);
  grid-area: description;
  border-radius: 1em;
  border: solid black 0.1em;
`;

export const QualitiesContainer = styled.div`
  background: rgba(0, 0, 0, 0.4);
  grid-area: qualities;
  border-radius: 1em;
  border: solid black 0.1em;
`;

export const WhatILikeContainer = styled.div`
  background: rgba(0, 0, 0, 0.4);
  grid-area: whatILike;
  border-radius: 1em;
  border: solid black 0.1em;
`;

export const DescriptionTitle = styled.h2`
  color: white;
  font-weight: bold;
  font-size: 3em;
`;

export const DescriptionSubTitle = styled.h3`
  color: white;
  font-weight: bold;
  font-size: 1.5em;
`;

export const DescriptionContent = styled.div`
  color: white;
  font-size: 0.5em;
`;
