import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 30px;
  flex: 2;
  img {
    width: 100%;
    &:last-of-type {
      display: none;
    }
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      &:first-of-type {
        display: none;
      }
      &:last-of-type {
        display: block;
      }
    }
  }
`;

export const ContentWrapper = styled.div`
  h1 {
    font-size: 40px;
    font-weight: black;
    line-height: 1;
  }
  div {
    p {
      line-height: 1.5;
      color: ${({ theme }) => theme.colors.gray};
      font-size: 15px;
    }
    button {
      text-transform: uppercase;
      font-weight: bold;
      border: none;
      background-color: ${({ theme }) => theme.colors.red};
      padding: 15px 40px;
      cursor: pointer;
      margin-top: 20px;
      &:hover {
        background-color: ${({ theme }) => theme.colors.black};
      }
      a {
        color: white;
        text-decoration: none;
        letter-spacing: 3px;
        font-size: 15px;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    margin-top: 30px;
    h1 {
      font-size: 55px;
      margin: 0;
      max-width: 300px;
    }
    p {
      max-width: 350px;
      margin: 0;
      padding: 0;
    }
  }
`;
