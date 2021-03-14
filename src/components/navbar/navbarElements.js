import styled from "styled-components";
import { Link } from "react-scroll";

export const Nav = styled.nav`
  background: #000;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const NavLogo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  margin-left: 5%;
  cursor: pointer;
  font-size: 1.5em;
  justify-self: start;
`;

export const NavMenu = styled.ul`
  display: none;
  @media screen and (min-width: 650px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    margin-right: 5%;
  }
`;
export const NavElement = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2em;

  &:last-child {
    margin-right: 0;
  }
`;
export const NavLink = styled(Link)`
  color: white;
  font-size: 1.2em;
  text-decoration: none;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease-in-out;
  will-change: transform;

  &.active {
    border-bottom: 3px solid red;
  }
  &:hover {
    transform: scale(1.3);
    color: red;
  }
`;

export const MobileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #fff;
  cursor: pointer;
  margin-right: 5%;
  font-size: 1.5em;

  @media screen and (min-width: 650px) {
    display: none;
  }
`;
