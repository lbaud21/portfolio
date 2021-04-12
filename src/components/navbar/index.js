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
        <NavLogo to="home" smooth="easeOutQuad" duration={1000} offset={-100}>
          Portfolio
        </NavLogo>
        <NavMenu>
          <NavElement>
            <NavLink
              to="home"
              smooth="easeOutQuad"
              duration={1000}
              offset={-100}
              activeClass="active"
              spy={true}
            >
              Home
            </NavLink>
          </NavElement>
          <NavElement>
            <NavLink
              to="about-me"
              smooth="easeOutQuad"
              duration={1000}
              offset={-70}
              activeClass="active"
              spy={true}
            >
              About me
            </NavLink>
          </NavElement>
          <NavElement>
            <NavLink
              to="projects"
              smooth="easeOutQuad"
              duration={1000}
              offset={-70}
              activeClass="active"
              spy={true}
            >
              Projects
            </NavLink>
          </NavElement>
          <NavElement>
            <NavLink
              to="contacts"
              smooth="easeOutQuad"
              duration={1000}
              offset={-70}
              activeClass="active"
              spy={true}
            >
              Contact
            </NavLink>
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
