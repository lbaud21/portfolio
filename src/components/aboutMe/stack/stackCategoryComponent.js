import React from "react";
import {
  StackCategoryContent,
  StackCategoryElementContainer,
  StackCategoryTitle,
  StackCategoryElement,
  StackCategoryElementTitle,
  StackCategoryElementImageContainer,
  StackCategoryElementImage,
} from "./stackElements";

export const StackCategoryComponent = ({ stackName, stackList }) => {
  return (
    <StackCategoryContent>
      <StackCategoryTitle>{stackName}</StackCategoryTitle>

      <StackCategoryElementContainer>
        {stackList.map((item) => (
          <StackCategoryElement key={item}>
            <StackCategoryElementImageContainer>
              <StackCategoryElementImage
                src={`${process.env.PUBLIC_URL}/images/logos/${item}.svg`}
              />
            </StackCategoryElementImageContainer>

            <StackCategoryElementTitle>{item}</StackCategoryElementTitle>
          </StackCategoryElement>
        ))}
      </StackCategoryElementContainer>
    </StackCategoryContent>
  );
};
