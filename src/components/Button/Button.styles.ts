import styled from "styled-components";

type ButtonPropsType = {
  $backgroundColor?: string;
  $hoverBackgroundColor?: string;
  $width?: string;
  $height?: string;
};

export const ButtonStyle = styled.button<ButtonPropsType>`
  display: flex;
  align-items: center;
  justify-content: center
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  border: none;
  border-radius: 30px;
  flex-wrap: wrap;
  padding: 0 1rem;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ color }) => color};;
  font-size: 1.2rem;
  cursor: pointer;
  font-family: "M PLUS Rounded 1c", sans-serif;

  &:hover {
    background-color: ${({ $hoverBackgroundColor }) => $hoverBackgroundColor};
  }
`;
