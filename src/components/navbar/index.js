import React, { useMemo } from "react";
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

const handleClick = (event, refsList) => {
  refsList[event.target.dataset.index].current.scrollIntoView({
    behavior: "smooth",
  });
};

const Navbar = ({ toggle }) => {
  const refs = useSectionRef();
  const refsList = useMemo(() => Object.values(refs), [refs]);
  const activeIndex = useNavObserver(refsList);

  return (
    <Nav>
      <NavContainer>
        <NavLogo
          onClick={() => {
            refsList[0].current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Portfolio
        </NavLogo>
        <NavMenu>
          {sectionsNames.map((sectionName, index) => (
            <NavElement key={sectionName}>
              <NavLink
                onClick={(event) => handleClick(event, refsList)}
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
