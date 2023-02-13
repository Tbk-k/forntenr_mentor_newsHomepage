import styled from "styled-components";

export const StyledBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    padding-top: 60px;
  }
`;

export const HomeLink = styled.a`
  cursor: pointer;
`;

export const StyledMenu = styled.menu`
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 40px;
  position: relative;
  z-index: 10;
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const MenuToggle = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  position: relative;
  z-index: 10;
  svg {
    &:first-of-type {
      display: ${({ isOpen }) => (isOpen ? "none" : "block")};
    }
    &:last-of-type {
      display: ${({ isOpen }) => (!isOpen ? "none" : "block")};
    }
  }
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const HideMenu = styled.menu`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 80%;
  max-width: ${({ isOpen }) => (isOpen ? "300px" : "0px")};
  overflow: hidden;
  height: 100vh;
  background-color: white;
  position: absolute;
  z-index: 1;
  right: 0;
  top: 0;
  padding-top: 150px;
  transition: ${({ isOpen }) =>
    isOpen && "max-width 0.5s cubic-bezier(0, 0.49, 0.62, 1.05)"};
  li {
    padding-bottom: 20px;
    padding-left: 40px;
  }
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #807e8945;
  z-index: 1;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;
