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
  const handleClick = (event) => {
    const refList = Object.values(refs);
    refList[event.target.dataset.index].current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="home" smooth="easeOutQuad" duration={1000} offset={-100}>
          Portfolio
        </NavLogo>
        <NavMenu>
          {sectionsNames.map((sectionName, index) => (
            <NavElement key={sectionName}>
              <NavLink
                onClick={handleClick}
                active={index === activeIndex ? true : false}
                data-index={index}
              >
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
