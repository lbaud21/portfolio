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
import useNavObserver from "../../hooks/useNavObserver";
import { useSectionRef } from "../../contexts/refContext";

const sectionsNames = ["Home", "About me", "Projects", "Contact"];

const Navbar = ({ toggle }) => {
  const refs = useSectionRef();
  const activeIndex = useNavObserver(Object.values(refs));
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="home" smooth="easeOutQuad" duration={1000} offset={-100}>
          Portfolio
        </NavLogo>
        <NavMenu>
          {sectionsNames.map((sectionName, index) => (
            <NavElement key={sectionName}>
              <NavLink active={index === activeIndex ? true : false}>
                {sectionName}
              </NavLink>
            </NavElement>
          ))}
        </NavMenu>

        <MobileIcon>
          <FaBars onClick={toggle} />
        </MobileIcon>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
