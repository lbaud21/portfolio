import styled from "styled-components";

export const DescriptionContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  //background: rgba(170, 5, 5, 0.7);
  width: 50%;
  border-radius: 1em;
  border: solid black 0.1em;
`;

export const DescriptionContent = styled.div`
  color: black;
  font-size: 1em;
  margin: 0 1em;
`;

//Profile Image
export const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
`;

export const ProfileImage = styled.img`
  width: 100%;
  border-radius: 50%;
`;
