import React from "react";
import {
  ProjectSection,
  ProjectContainer,
  ProjectItemWrapper,
  ProjectItemTitle,
} from "./projectsElements";

const projectsNames = ["Pokedex", "Message-app", "Social-network"];

const Projects = () => {
  return (
    <ProjectSection id="projects" backgroundColor="black">
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
