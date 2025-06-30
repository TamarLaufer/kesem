import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";

interface LinkContainerProps {
  $backgroundColor: string;
}

export const HeaderContainer = styled.menu`
  position: fixed;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  font-family: "M PLUS Rounded 1c", sans-serif;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  direction: rtl;
  z-index: 10;
  box-shadow: 0px 3px 18px 0px rgba(0, 0, 0, 0.56);
  -webkit-box-shadow: 0px 3px 18px 0px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: 0px 3px 18px 0px rgba(0, 0, 0, 0.56);

  @media (max-width: 768px) {
    @media (max-width: 768px) {
      justify-content: center;
      padding: 0.5rem 1rem;
    }
  }
`;

export const LogoAndHam = styled.div`
  @media (max-width: 768px) {
    display: flex;
    gap: 1rem;
  }
`;

export const MobileMenuMotion = styled(motion.menu)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 80vw;
  background: ${({ theme }) => theme.colors.white};
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.1);
  padding: 2rem 2.3rem;
  gap: 2rem;
  color: ${({ theme }) => theme.colors.gold};
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-size: 18px;
  list-style-type: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  @media (min-width: 769px) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.gold};
  cursor: pointer;
  z-index: 110;
`;

export const LogoContainer = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const HamburgerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Hamburger = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 1rem;
    top: 1.6rem;
    background: none;
    border: none;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.gold};
    z-index: 11;
  }
`;

export const LogoText = styled.p`
  font-family: "Playpen Sans Hebrew", cursive;
  font-size: 13px;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: flex-start;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  text-decoration: none;
  list-style: none;

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

  @media (max-width: 1290) {
    padding: 0.3rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Li = styled.li`
  text-align: center;
`;

export const LinkContainer = styled(Link)<LinkContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: none;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  width: 7rem;
  height: 3rem;
  color: white;
  font-weight: 200;
  font-family: "Playpen Sans Hebrew", cursive;
  font-size: 16px;

  &:hover {
    background-color: #ddd;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuButton = styled(Link)`
  font-weight: bold;
  text-decoration: none;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Select = styled.select`
  border-radius: 30px;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: : ${({ theme }) => theme.colors.black};

  &:arrow {
    padding: 1rem;
  }
`;
