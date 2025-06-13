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
  background-image: url("/images/enroll_background3.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
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
  font-family: "Suez One", serif;
  font-size: 28px;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const InputHeader = styled.h2`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
  color: ${({ theme }) => theme.colors.dark_grey};
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: #f9f9f9;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.turquoise};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.turquoise + "33"};
  }
`;

export const SendButton = styled.button`
  grid-column: span 2;
  margin: 4rem;
  padding: 1rem 8rem;
  border: none;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.turquoise};
  color: white;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark_grey};
  }

  @media (max-width: 767px) {
    grid-column: span 1;
  }
`;

export const ErrorSpan = styled.span`
  color: red;
  font-size: 0.85rem;
  margin-top: 0.25rem;
`;
