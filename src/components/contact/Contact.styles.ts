import styled from "styled-components";

export const ContactContainer = styled.main`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  padding-top: 9rem;
  background-image: url("/images/enroll_background5.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    background-image: url("/images/enroll_background8.png");
  }
`;

export const Header = styled.h1`
  font-family: "M PLUS Rounded 1c", sans-serif;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Text = styled.p`
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-size: 18px;
  line-height: 28px;
  padding: 0.5rem 0;
`;

export const TextContainer = styled.div`
  text-align: center;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputHeader = styled.legend`
  font-family: "M PLUS Rounded 1c", sans-serif;
  margin: 0 0.35rem;
`;

export const Input = styled.input`
  width: 25rem;
  padding: 0.75rem;
  margin: 0.75rem 0;
  border-radius: 12px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: #f9f9f9;

  &::placeholder {
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-size: 18px;
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

export const Textarea = styled.textarea`
  width: 25rem;
  height: 15rem;
  padding: 0.75rem;
  margin: 0.75rem 0;
  border-radius: 12px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: #f9f9f9;
  resize: none;

  &::placeholder {
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-size: 18px;
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

export const ErrorSpan = styled.span`
  color: red;
  font-size: 0.85rem;
  margin-top: 0.25rem;
`;

export const FieldsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;

  @media (max-width: 768px) {
    margin-top: 1.7rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 0;
    flex-direction: column;
  }
`;

export const IframeContainer = styled.div`
  flex: 1;
  display: flex;
  padding: 0 4rem;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 2rem;
    line-height: 20px;
  }
`;

export const StyledIframe = styled.iframe`
  width: 100%;
  min-height: 300px;
  height: 40vw;
  max-height: 450px;
  border: 0;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    height: 300px;
    min-height: 160px;
  }
`;

export const DetailsContainer = styled.div`
  line-height: 3rem;
  margin: 3.5rem 0;

  @media (max-width: 768px) {
    line-height: 3rem;
    margin: 1rem 0;
  }
`;

export const ButtonContainer = styled.div`
  margin: 2rem;

  @media (max-width: 768px) {
    margin: 1rem 2rem;
  }
`;
