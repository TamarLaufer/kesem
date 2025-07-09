"use client";
import Link from "next/link";
import styled from "styled-components";

export const HomeContainer = styled.main`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 8rem;
  position: relative;
  overflow: hidden;
  max-width: 100vw;
  background: transparent !important;
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  top: var(--header-height);
  left: 0;
  width: 100%;
  height: calc(100% - var(--header-height));
  object-fit: cover;
  z-index: -1;
  pointer-events: none;
`;

export const BackgroundVideoOverlay = styled.div`
  position: absolute;
  top: var(--header-height);
  left: 0;
  width: 100%;
  height: calc(100% - var(--header-height));
  background: rgba(0, 0, 0, 0.4);
  z-index: -1;
  pointer-events: none;
`;

export const Header = styled.h1`
  font-family: "Suez One", serif;
  font-weight: 500;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const SecondaryText = styled.h2`
  font-family: "Suez One", serif;
  font-weight: 500;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  z-index: 2;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: 6rem 2rem;
`;

export const EnrollButton = styled(Link)`
  border-radius: 30px;
  font-family: "Rubik Dirt", sans-serif;
  padding: 1rem 6rem;
  border-color: ${({ theme }) => theme.colors.white};
  border-width: 3px;
  background-color: ${({ theme }) => theme.colors.turquoise};
  color: ${({ theme }) => theme.colors.white};
  font-size: 22px;
  font-weight: 300;
  margin-top: 1rem;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.gray};
  }

  @media (max-width: 767px) {
    padding: 1rem 2.5rem;
    font-size: 18px;
  }
`;
