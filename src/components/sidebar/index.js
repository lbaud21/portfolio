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
        <SidebarElement>
          <SidebarLink to="home">Home</SidebarLink>
        </SidebarElement>
        <SidebarElement>
          <SidebarLink to="about-me">About me</SidebarLink>
        </SidebarElement>
        <SidebarElement>
          <SidebarLink to="my-stack">My stack</SidebarLink>
        </SidebarElement>
        <SidebarElement>
          <SidebarLink to="projects">Projects</SidebarLink>
        </SidebarElement>
        <SidebarElement>
          <SidebarLink to="contacts">Contact</SidebarLink>
        </SidebarElement>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
