import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  text-transform: capitalize;
  font-size: 20px;
  font-weight: ${({ fw }) => fw};
  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

const MenuLinks = ({ fw }) => {
  const menuLinks = [
    { id: 1, name: "home" },
    { id: 2, name: "new" },
    { id: 3, name: "popular" },
    { id: 4, name: "trending" },
    { id: 5, name: "categories" },
  ];
  return (
    <>
      {menuLinks.map(({ id, name }) => (
        <li key={id}>
          <StyledLink href={`/${name}`} fw={fw}>
            {name}
          </StyledLink>
        </li>
      ))}
    </>
  );
};

export default MenuLinks;
