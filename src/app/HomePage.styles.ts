"use client";
import Link from "next/link";
import styled from "styled-components";

export const HomeContainer = styled.main`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 5rem;
  overflow: hidden;
  max-width: 100vw;
  background: ${({ theme }) => theme.colors.gold};

  @media (max-width: 767px) {
    padding-top: 7rem;
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
  font-size: 50px;
  padding-bottom: 1rem;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 767px) {
    font-size: 2.4rem;
    text-align: center;
  }
`;

export const SecondaryText = styled.h2`
  font-family: "Rubik Dirt", sans-serif;
  font-weight: 200;
  font-size: 35px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 767px) {
    font-size: 30px;
    text-align: center;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  z-index: 2;
  color: ${({ theme }) => theme.colors.white};
  text-align: right;
  padding: 4rem 5rem;

  @media (max-width: 767px) {
    font-size: 2.4rem;
    text-align: center;
    padding: 1rem 2rem;
  }
`;

export const Text = styled.p`
  font-size: 29px;
  font-family: "Huninn", sans-serif;
  text-align: center;
  line-height: 40px;

  @media (max-width: 767px) {
    font-size: 24px;
  }

  .highlight-line {
    font-size: 32px;
    font-family: "Rubik Dirt", sans-serif;

    @media (max-width: 767px) {
      font-size: 29px;
      line-height: 28px;
    }
  }
`;

export const TextRight = styled.p`
  font-size: 28px;
  font-family: "Huninn", sans-serif;
  line-height: 50px;

  .highlight-line {
    font-size: 30px;
    font-family: "Rubik Dirt", sans-serif;
  }

  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 45px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 11rem;
  margin-top: 2rem;

  @media (max-width: 767px) {
    text-align: right;
    padding-right: 0;
    margin-top: 0;
  }
`;

export const BulletBlock = styled.div`
  text-align: right;
  max-width: 900px;

  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const EnrollButton = styled(Link)`
  border-radius: 45px;
  font-family: "Rubik Dirt", sans-serif;
  padding: 1.1rem 7rem;
  border-color: ${({ theme }) => theme.colors.white};
  border-width: 3px;
  background-color: ${({ theme }) => theme.colors.turquoise};
  color: ${({ theme }) => theme.colors.white};
  font-size: 28px;
  font-weight: 300;
  margin-top: 1rem;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.gray};
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    transform: scale(1.03);
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 767px) {
    padding: 1rem 2.5rem;
    font-size: 20px;
    margin-bottom: 1rem;
  }
`;
