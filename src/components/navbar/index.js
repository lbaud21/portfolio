import React from "react";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavMenu,
  NavElement,
  NavLink,
  MobileIcon,
} from "./navbarElements";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo>Portfolio</NavLogo>
        <NavMenu>
          <NavElement>
            <NavLink to="home">Home</NavLink>
          </NavElement>
          <NavElement>
            <NavLink to="about-me">About me</NavLink>
          </NavElement>
          <NavElement>
            <NavLink to="my-stack">My stack</NavLink>
          </NavElement>
          <NavElement>
            <NavLink to="projects">Projects</NavLink>
          </NavElement>
          <NavElement>
            <NavLink to="contacts">Contact</NavLink>
          </NavElement>
        </NavMenu>

        <MobileIcon>
          <FaBars onClick={toggle} />
        </MobileIcon>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
