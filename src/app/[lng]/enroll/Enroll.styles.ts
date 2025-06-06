import styled from "styled-components";

export const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
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
  padding: 1rem;
  font-size: 22px;
  background-color: #555;
`;

export const Input = styled.input`
  display: flex;
  padding: 1rem 10rem;
  border-radius: 3rem;
  border-width: 0.5px;
`;

export const Button = styled.button`
  display: flex;
  padding: 1rem 7rem;
  border-radius: 3rem;
  border-width: 0.5px;
  font-size: 18px;
`;
