import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarElement,
  SidebarLink,
} from "./sidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>

      <SidebarMenu>
        <SidebarElement isOpen={isOpen} delay="0.1s">
          <SidebarLink to="home" onClick={toggle}>
            Home
          </SidebarLink>
        </SidebarElement>
        <SidebarElement isOpen={isOpen} delay="0.2s">
          <SidebarLink to="about-me" onClick={toggle}>
            About me
          </SidebarLink>
        </SidebarElement>
        <SidebarElement isOpen={isOpen} delay="0.3s">
          <SidebarLink to="my-stack" onClick={toggle}>
            My stack
          </SidebarLink>
        </SidebarElement>
        <SidebarElement isOpen={isOpen} delay="0.4s">
          <SidebarLink to="projects" onClick={toggle}>
            Projects
          </SidebarLink>
        </SidebarElement>
        <SidebarElement isOpen={isOpen} delay="0.5s">
          <SidebarLink to="contacts" onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarElement>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
