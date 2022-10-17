import React from "react";
import styled from "styled-components";

const Section = styled.div`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const BannerComponent = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  color: ${(props) => props.theme.text};
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;

  span {
    display: block;
    background-color: ${(props) => props.theme.body};
    padding: 1rem 2rem;
  }
`;

const Banner = () => {
  return (
    <Section id="up">
      <Container >
        <BannerComponent>
          <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="8" data-scroll-target="#up">FASHON IS AN ARMOUR</span>
        </BannerComponent>
        <BannerComponent>
          <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="-6" data-scroll-target="#up">TO SURVIVE EVERYDAY LIFE</span>
        </BannerComponent>
        <BannerComponent>
          <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="6" data-scroll-target="#up">ONE IS NEVER OVER-DRESSED OR</span>
        </BannerComponent>
        <BannerComponent>
          <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="-4" data-scroll-target="#up">UNDER-DRESSED</span>
        </BannerComponent>
        <BannerComponent>
          <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="6" data-scroll-target="#up">WITH A LITTLE BLACK DRESS.</span>
        </BannerComponent>
      </Container>
    </Section>
  );
};

export default Banner;
