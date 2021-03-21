import styled from "styled-components";

export const StackContainer = styled.div`
  //background: rgba(0, 0, 0, 0.4);
  grid-area: qualities;
  border-radius: 1em;
  border: solid black 0.1em;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 47%;
`;

export const StackCategoryContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: space-around;
  flex-grow: 1;
  width: 100%;
`;

export const StackCategoryContent = styled.div`
  color: black;
  font-size: 1em;
  margin: 0 1%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 48%;
  height: 40%;
`;

export const StackCategoryElementContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const StackCategoryElement = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: auto;
  margin: 0.2em 0;
`;

export const StackCategoryTitle = styled.h3`
  text-align: center;
`;

export const StackCategoryElementTitle = styled.p`
  margin: 0;
  width: 100%;
  text-align: center;
`;

export const StackCategoryElementImageContainer = styled.div`
  width: 50%;
`;

export const StackCategoryElementImage = styled.img`
  width: 100%;
`;
