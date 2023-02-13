import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: white;
  border-bottom: 0.5px outset white;
  padding-bottom: 10px;
  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }
  h3 {
    font-weight: 900;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }
  p {
    font-weight: 300;
    line-height: 1.5;
    font-size: 15px;
  }
`;

const NewItem = ({ title, content }) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <p>{content}</p>
    </Wrapper>
  );
};

export default NewItem;
