import styled from "styled-components";
import { SectionContainer } from "../generalComponents/sectionContainerElement";

export const HeroContainer = styled(SectionContainer)``;

export const HeroBackground = styled.div`
  width: 100%;
  height: 100%;
`;

export const HeroVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
  background: #232a34;
`;

export const HeroHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroTitle = styled.h1`
  color: red;
  font-size: 3em;
  font-weight: bold;
  text-align: center;
`;
