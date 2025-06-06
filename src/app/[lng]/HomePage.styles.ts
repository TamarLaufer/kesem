import Link from "next/link";
import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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

export const Text = styled.p`
  font-family: "Suez One", serif;
  font-weight: 500;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const SecondaryText = styled.p`
  font-family: "Suez One", serif;
  font-weight: 500;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const ContentContainer = styled.div`
  color: ${({ theme }) => theme.colors.white};
  padding: 10rem 6rem;

  h1 {
    font-size: 3rem;
    // margin-bottom: 1rem;
  }
`;

export const EnrollButton = styled(Link)`
  border-radius: 30px;
  font-family: "Rubik Dirt", sans-serif;
  padding: 1rem 6rem;
  border-color: ${({ theme }) => theme.colors.white};
  border-width: 3px;
  background-color: ${({ theme }) => theme.colors.turquoise};
  margin-top: 3rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 21px;
  font-weight: 300;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;
