import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/Walking Girl.mp4";

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DarkCover = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title = styled.h1`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};
  z-index: 2;

  div{
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-size: ${(props) => props.theme.fontBig};
    font-family: "Kaushan Script";
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  }

  h2 {
    font-size: ${(props) => props.theme.fontlg};
    font-family: "Sirin Stencil";
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    font-weight: 400;
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkCover />
      <Title>
        <div>
          <h1 data-scroll data-scroll-delay="0.15" data-scroll-speed='4'>W</h1>
          <h1 data-scroll data-scroll-delay="0.09" data-scroll-speed='4'>i</h1>
          <h1 data-scroll data-scroll-delay="0.06" data-scroll-speed='4'>b</h1>
          <h1 data-scroll data-scroll-delay="0.04" data-scroll-speed='4'>e</h1>
        </div>
        <div>
          <h2 data-scroll data-scroll-delay="0.04" data-scroll-speed='2'>Inspire, Create, Believe</h2>
        </div>
      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
