import React, { useContext, useRef } from "react";

const refContext = React.createContext();

export const useSectionRef = () => {
  return useContext(refContext);
};

export const SectionRefProvider = ({ children }) => {
  const heroSectionRef = useRef();
  const aboutMeSectionRef = useRef();
  const projectsSectionRef = useRef();
  const contactSectionRef = useRef();

  return (
    <refContext.Provider
      value={{
        heroSectionRef,
        aboutMeSectionRef,
        projectsSectionRef,
        contactSectionRef,
      }}
    >
      {children}
    </refContext.Provider>
  );
};
