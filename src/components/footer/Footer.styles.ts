import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.dark_grey};
  height: 15rem;
  gap: 2rem;
`;

export const IconAndTextContainer = styled.div``;

export const Text = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
  padding: 0 10rem;
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 0.5rem;
`;

export const IconLink = styled.a``;
