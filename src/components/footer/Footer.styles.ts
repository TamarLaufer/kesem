import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.dark_turquoise};
  height: 15rem;
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;
