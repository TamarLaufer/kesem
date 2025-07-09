import styled from "styled-components";

export const ContainerAll = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 6rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    padding: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 7rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const ContainerForm = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
  }
`;

export const Text = styled.h1`
  font-family: "Suez One", serif;
  margin: 1.8rem 0 1rem 0;
  flex-wrap: wrap;
  text-align: right;

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 28px;
    padding: 0 1rem;
    text-align: center;
  }
`;

export const SecondaryText = styled.h1`
  display: flex;
  font-family: "Suez One", serif;
  line-height: 50px;
  font-size: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 20px;
  }
`;

export const ParagraphText = styled.p`
  font-family: "Fredoka SemiExpanded Medium", Arial, sans-serif;
  line-height: 50px;
  font-size: 25px;
  font-weight: bold;

  @media (max-width: 900px) {
    font-size: 18px;
    line-height: 30px;
    padding: 0 1rem;
  }
`;

export const Reqiurements = styled.p`
  font-family: "Fredoka SemiExpanded Medium", Arial, sans-serif;
  line-height: 25px;
  font-size: 18px;
  text-align: right;

  @media (max-width: 900px) {
    font-size: 18px;
    line-height: 28px;
    padding: 0 1rem;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column;
    font-size: 18px;
    width: 100%;
  }
`;

export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
    // width: 50%;
  }
`;

export const FieldGroup = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputHeader = styled.legend`
  font-weight: bold;
  font-family: "M PLUS Rounded 1c", sans-serif;
  margin: 0.7rem 0;
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

export const BoxStyleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.51);
  -webkit-box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.51);
  border-radius: 24px;
  margin: 0.5rem 0 1rem 0;

  width: 100%;
  max-width: 650px;
  padding: 2.5rem;

  @media (max-width: 900px) {
    max-width: 90vw;
    padding: 0.2rem;
  }
`;

export const ErrorSpan = styled.span`
  color: red;
  font-size: 0.85rem;
  margin-top: 0.25rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2.5rem 0 1rem 0;
`;
