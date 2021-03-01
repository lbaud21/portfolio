import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export const SidebarContainer = styled.aside`
  z-index: 999;
  background: black;
  position: fixed;
  width: 100%;
  height: 100%;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2em;
  right: 1.2em;
  font-size: 3em;
  cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
  color: white;
  transition: transform 0.6s ease-in-out;

  &:hover {
    transform: rotate(360deg) scale(1.5);
  }
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 100%;
  height: 100%;
`;

export const SidebarElement = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em 0;
`;

export const SidebarLink = styled(Link)`
  color: white;
  font-size: 3em;
  cursor: pointer;
  transition: transform 0.5s;
  will-change: transform;

  &:hover {
    color: red;
    transform: scale(1.2);
  }
`;
