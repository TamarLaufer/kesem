import { theme } from "@/theme";
import { ButtonStyle } from "./Button.styles";

type ButtonPropsType = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  $backgroundColor?: string;
  color?: string;
  $hoverBackgroundColor?: string;
  $width?: string;
  $height?: string;
};

const Button = ({
  text,
  onClick,
  type = "button",
  $width = "9rem",
  $height = "3rem",
  $backgroundColor = theme.colors.turquoise,
  color = theme.colors.white,
  $hoverBackgroundColor = theme.colors.dark_grey,
}: ButtonPropsType) => {
  return (
    <ButtonStyle
      onClick={onClick && onClick}
      $width={$width}
      $height={$height}
      $backgroundColor={$backgroundColor}
      color={color}
      $hoverBackgroundColor={$hoverBackgroundColor}
      type={type}
    >
      {text}
    </ButtonStyle>
  );
};
export default Button;
