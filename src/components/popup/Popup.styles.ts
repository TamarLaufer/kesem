import styled from "styled-components";

export const PopupOverlay = styled.div`
  position: absolute;
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
  border-radius: 26px;
`;

export const TextContent = styled.p`
  font-size: 18px;
`;

export const ButtonText = styled.button`
  font-size: 18px;
  width: 9rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.turquoise};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.dark_grey};
  }
`;
