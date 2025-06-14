import Link from "next/link";
import styled from "styled-components";

interface LinkContainerProps {
  $backgroundColor: string;
}

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  direction: rtl;
  z-index: 10;
  box-shadow: 0px 3px 18px 0px rgba(0, 0, 0, 0.56);
  -webkit-box-shadow: 0px 3px 18px 0px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: 0px 3px 18px 0px rgba(0, 0, 0, 0.56);

  .hamburger {
    display: none;
    font-size: 2rem;
    background: none;
    border: none;
    color: white;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 100;

  a {
    color: ${({ theme }) => theme.colors.gold};
    text-decoration: none;
    font-weight: bold;
    padding: 0.5rem 0;
    font-size: 18px;
    width: 100%;

    &:hover {
      background-color: ${({ theme }) => theme.colors.grey};
      border-radius: 8px;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Hamburger = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 3rem;
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export const LogoText = styled.p`
  font-family: "Playpen Sans Hebrew", cursive;
  font-size: 13px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 0.3rem;
  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.gold};
    text-decoration: none;
    font-weight: bold;
    padding: 1rem;
    transition: background 0.3s;
    font-size: 18px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.grey};
      border-radius: 8px;
    }
  }

  @media (max-width: 768px) {
    display: none;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
