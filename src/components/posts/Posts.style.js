import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  margin: 50px auto;
  max-width: 1400px;
  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 10px;
    justify-content: space-between;
  }
`;
