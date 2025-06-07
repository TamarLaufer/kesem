import Link from "next/link";
import styled from "styled-components";

interface LinkContainerProps {
  $backgroundColor: string;
}

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  direction: rtl;
  z-index: 10;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LogoText = styled.p`
  font-family: "Playpen Sans Hebrew", cursive;
  font-size: 13px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.gold};
    text-decoration: none;
    font-weight: bold;
    padding: 1rem;
    transition: background 0.3s;
    font-size: 18px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray};
      border-radius: 8px;
    }
  }
`;

export const LinkContainer = styled(Link)<LinkContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: none;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  padding: 0.8rem 2rem;

  a {
    color: white;
    font-weight: 200;
    font-family: "Playpen Sans Hebrew", cursive;
    font-size: 16px;
  }

  &:hover {
    background-color: #ddd;
    cursor: pointer;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
