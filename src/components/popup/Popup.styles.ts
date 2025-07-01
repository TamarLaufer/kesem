import styled from "styled-components";

type HeaderPropsType = {
  $color: string;
};

type ButtonTextPropsType = {
  $buttonTextColor: string;
};

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 0, 0, 0.6);
`;

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.colors.white};
  width: 25rem;
  height: 15rem;
  border-radius: 21px;

  h2 {
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 18rem;
    padding-bottom: 10px;
  }
`;

export const Header = styled.h2<HeaderPropsType>`
  font-family: "M PLUS Rounded 1c", sans-serif;
  color: ${({ $color }) => $color};
`;

export const TextContent = styled.p`
  font-size: 18px;
  font-family: "M PLUS Rounded 1c", sans-serif;

  @media (max-width: 768px) {
    text-align: center;
    padding: 10px 10px;
  }
`;

export const ButtonText = styled.button<ButtonTextPropsType>`
  font-size: 18px;
  width: 9rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.turquoise};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: none;
  font-family: "M PLUS Rounded 1c", sans-serif;
  color: ${({ $buttonTextColor }) => $buttonTextColor};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.dark_grey};
  }
`;
