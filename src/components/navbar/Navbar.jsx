import React, { useEffect, useState } from "react";
import {
  Backdrop,
  HideMenu,
  HomeLink,
  MenuToggle,
  StyledBar,
  StyledMenu,
} from "./Navbar.style";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { ReactComponent as HamMenu } from "../../assets/img/icon-menu.svg";
import { ReactComponent as HamMenuClose } from "../../assets/img/icon-menu-close.svg";
import { useWindowSize } from "../../assets/hooks/useWindowSize";
import MenuLinks from "../menuLinks/MenuLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const menuLinks = [
    { id: 1, name: "home" },
    { id: 2, name: "new" },
    { id: 3, name: "popular" },
    { id: 4, name: "trending" },
    { id: 5, name: "categories" },
  ];

  const screenWidth = useWindowSize();

  useEffect(() => {
    screenWidth.x >= 1024 && setIsOpen(false);
  }, [screenWidth.x]);

  return (
    <>
      <StyledBar>
        <HomeLink href="/">
          <Logo />
        </HomeLink>
        <StyledMenu>
          <MenuLinks fw="400" />
        </StyledMenu>
        <MenuToggle onClick={handleClick} isOpen={isOpen}>
          <HamMenu />
          <HamMenuClose />
        </MenuToggle>
      </StyledBar>
      <Backdrop isOpen={isOpen} />
      <HideMenu isOpen={isOpen}>
        <MenuLinks fw="500" />
      </HideMenu>
    </>
  );
};

export default Navbar;
