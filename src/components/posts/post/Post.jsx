import React from "react";
import styled from "styled-components";

const StyledPost = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 30px;
  img {
    height: 150px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    span {
      font-size: 35px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.gray};
      margin: 0;
      padding: 0;
    }
    h4 {
      margin: 0;
      font-weight: 900;
      font-size: 22px;
      cursor: pointer;
      &:hover {
        color: ${({ theme }) => theme.colors.yellow};
      }
    }
    p {
      margin: 0;
      line-height: 2;
      max-width: 250px;
    }
  }

  @media screen and (min-width: 1024px) {
    div {
      span {
        font-size: 25px;
      }
      h4 {
        font-size: 18px;
      }
      p {
        line-height: 1.5;
      }
    }
  }
`;

const Post = ({ img, id, title, content }) => {
  return (
    <StyledPost>
      <img src={img} alt="" />
      <div>
        <span>0{id}</span>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </StyledPost>
  );
};

export default Post;
