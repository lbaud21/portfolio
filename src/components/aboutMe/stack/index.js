import React from "react";
import { StackContainer, StackCategoryContainer } from "./stackElements";
import { ContainerTitle } from "../aboutMeElements";
import { StackCategoryComponent } from "./stackCategoryComponent";

const myStacks = [
  {
    stackName: "Front-end",
    stackList: ["html", "css", "javascript", "react", "redux", "typescript"],
  },
  {
    stackName: "Back-end",
    stackList: ["node", "express", "mongodb", "socket-io"],
  },
  {
    stackName: "Tools",
    stackList: ["git", "github", "gitlab"],
  },
];

export const Stack = () => {
  return (
    <StackContainer>
      <ContainerTitle>My stack</ContainerTitle>

      <StackCategoryContainer>
        {myStacks.map((stack) => (
          <StackCategoryComponent
            key={stack.stackName}
            stackName={stack.stackName}
            stackList={stack.stackList}
          />
        ))}
      </StackCategoryContainer>
    </StackContainer>
  );
};
