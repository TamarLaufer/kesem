import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.dark_grey};
  height: 15rem;
  gap: 2rem;

  @media (max-width: 767px) {
    flex-direction: column;
    height: auto;
    padding: 2rem 0;
  }
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-family: "M PLUS Rounded 1c", sans-serif;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
  padding: 0 10rem;

  @media (max-width: 767px) {
    font-size: 17px;
    padding: 2rem;
  }
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 0.5rem;
`;

export const IconLink = styled.a``;
