import styled from "styled-components";

export const FormContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 8rem;
  overflow: hidden;
  background-image: url("/images/enroll_background3.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;

  @media (max-width: 768px) {
    background-image: url("/images/enroll_background10.png");
  }
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

  @media (max-width: 768px) {
    font-size: 24px;
    align-items: center
    justify-content: center;
    text-align: center;
    padding: 0 5.5rem;
    padding-bottom: 1.5rem;
    flex-direction: column;
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.fieldset`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  border: none;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.1rem;
  }
`;

export const HeaderContainer = styled.div`
  margin-bottom: 0.5rem;
`;

export const InputHeader = styled.legend`
  font-weight: bold;
  font-family: "M PLUS Rounded 1c", sans-serif;
  margin-bottom: 0.5rem;
  display: block;
  color: ${({ theme }) => theme.colors.dark_grey};

  @media (max-width: 768px) {
    font-size: 16px;
    font-weight: none;
    margin-bottom: 0.5rem;
  }
`;

export const Input = styled.input`
  width: 25rem;
  padding: 0.75rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: #f9f9f9;

  &::placeholder {
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-size: 16px;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.turquoise};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.turquoise + "33"};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    font-weight: none;
    width: 17rem;
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
    padding: 1rem 6.5rem;
  }
`;

export const ErrorSpan = styled.span`
  color: red;
  font-size: 0.85rem;
  margin-top: 0.25rem;
`;

export const InputCheckBox = styled.input`
  display: block;
`;

export const CeckBoxLabel = styled.label`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  margin: 0.5rem 0 1rem 0;
`;

export const Textarea = styled.textarea`
  width: 25rem;
  padding: 0.75rem;
  margin: 0.75rem 0;
  border-radius: 12px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: #f9f9f9;
  resize: none;

  &::placeholder {
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-size: 16px;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.turquoise};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.turquoise + "33"};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    font-weight: none;
    width: 17rem;
  }
`;
