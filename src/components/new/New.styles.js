import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1400px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.black};
  margin: 50px auto 0;
  flex: 1;
  h2 {
    color: ${({ theme }) => theme.colors.yellow};
    font-size: 30px;
    margin-top: 0;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 30px;
  }
`;
