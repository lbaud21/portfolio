import React from "react";
import {
  ProjectSection,
  ProjectContainer,
  ProjectItemWrapper,
  ProjectItemTitle,
} from "./projectsElements";
import { useSectionRef } from "../../contexts/refContext";

const projectsNames = ["Pokedex", "Message-app", "Social-network"];

const Projects = () => {
  const { projectsSectionRef } = useSectionRef();

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
