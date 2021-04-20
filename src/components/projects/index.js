import React from "react";
import {
  ProjectSection,
  ProjectContainer,
  ProjectItemWrapper,
  ProjectItemTitle,
} from "./projectsElements";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const projectsNames = ["Pokedex", "Message-app", "Social-network"];

const Projects = () => {
  const { projectsSectionRef, projectsVisible } = useIntersectionObserver();

  return (
    <ProjectSection
      id="projects"
      ref={projectsSectionRef}
      backgroundColor="black"
    >
      <ProjectContainer>
        {projectsNames.map((project) => (
          <ProjectItemWrapper
            key={project}
            backgroundImage={`${process.env.PUBLIC_URL}/images/projects/${project}.jpg`}
          >
            <ProjectItemTitle>{project}</ProjectItemTitle>
          </ProjectItemWrapper>
        ))}
      </ProjectContainer>
    </ProjectSection>
  );
};

export default Projects;
