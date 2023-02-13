import React from "react";
import { ContentWrapper, Wrapper } from "./Hero.style";
import HeroMobile from "../../assets/img/image-web-3-mobile.jpg";
import HeroDesktop from "../../assets/img/image-web-3-desktop.jpg";

const Hero = () => {
  return (
    <Wrapper>
      <img src={HeroMobile} alt="" />
      <img src={HeroDesktop} alt="" />
      <ContentWrapper>
        <h1>The Bright Future of Web 3.0?</h1>
        <div>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button>
            <a href="">Read more</a>
          </button>
        </div>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Hero;
