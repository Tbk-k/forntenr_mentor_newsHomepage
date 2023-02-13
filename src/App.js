import styled from "styled-components";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import New from "./components/new/New";
import Posts from "./components/posts/Posts";

export const Wrapper = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    width: 90%;
    margin: 0 auto;
    max-width: 1400px;
    gap: 50px;
  }
`;

function App() {
  return (
    <main>
      <Navbar />
      <Wrapper>
        <Hero />
        <New />
      </Wrapper>
      <Posts />
    </main>
  );
}

export default App;
