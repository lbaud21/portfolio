import styled from "styled-components";

export const SectionContainer = styled.section`
  position: relative;
  background-color: ${(props) => props.backgroundColor};
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  padding-top: 5vh;
  scroll-snap-align: start;
`;
