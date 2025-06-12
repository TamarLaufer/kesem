import styled from "styled-components";

export const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 10rem;
  overflow: hidden;
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  top: var(--header-height);
  left: 0;
  width: 100%;
  height: calc(100% - var(--header-height));
  object-fit: cover;
  z-index: -1;
`;

export const BackgroundVideoOverlay = styled.div`
  position: absolute;
  top: var(--header-height);
  left: 0;
  width: 100%;
  height: calc(100% - var(--header-height));
  background: rgba(0, 0, 0, 0.4);
  z-index: -1;
`;

export const HeaderText = styled.p`
  display: flex;
  padding: 2rem 0;
  font-family: "Playpen Sans Hebrew", cursive;
  font-size: 28px;
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
`;

export const InputHeader = styled.h2``;

export const Input = styled.input`
  display: flex;
  padding: 0.8rem;
  margin: 0.2rem;
  width: 20rem;
  border-radius: 0.7rem;
  border: 0.8 solid black;
  font-size: 16px;
  font-family: "Playpen Sans Hebrew", cursive;
`;

export const SendButton = styled.button`
  display: flex;
  padding: 1rem 7rem;
  border-radius: 3rem;
  border-width: 0.5px;
  font-size: 18px;
  margin: 3rem 0;
`;

export const ErrorSpan = styled.span`
  color: red;
`;
