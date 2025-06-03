import styled from "styled-components";

export const ContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  direction: rtl;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LogoText = styled.p`
  font-family: "Playpen Sans Hebrew", cursive;
  font-size: 14px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;

  a {
    color: rgb(222, 171, 59);
    text-decoration: none;
    font-weight: bold;
    padding: 1rem;
    transition: background 0.3s;
    font-size: 16px;

    &:hover {
      background-color: #ddd;
      border-radius: 8px;
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: none;
  background-color: rgb(222, 171, 59);
  padding: 1rem 2rem;

  a {
    color: white;
  }

  &:hover {
    background-color: #ddd;
    cursor: pointer;
  }
`;
