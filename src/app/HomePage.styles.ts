import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
`;

export const BackgroundVideo = styled.video`
  position: fixed;
  top: 10;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -10;
`;

export const Text = styled.p`
  font-family: "Suez One", serif;
  font-weight: 500;
  font-size: 3rem;
  color: white;
`;

export const SecondaryText = styled.p`
  font-family: "Suez One", serif;
  font-weight: 500;
  font-size: 2rem;
  color: white;
`;

export const OverlayContent = styled.div`
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  padding: 30vh;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;
