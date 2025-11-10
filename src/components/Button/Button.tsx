"use client";
import { theme } from "@/theme";
import s from "./Button.module.css";
import React from "react";

type ButtonPropsType = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  $backgroundColor?: string;
  color?: string;
  $hoverBackgroundColor?: string;
  $width?: string;
  $height?: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonPropsType> = ({
  text,
  onClick,
  disabled,
  type = "button",
  $width = "9rem",
  $height = "3rem",
  $backgroundColor = theme.colors.turquoise,
  color = theme.colors.white,
  $hoverBackgroundColor = theme.colors.dark_grey,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={s.button}
      disabled={disabled}
      style={{
        width: $width,
        height: $height,
        backgroundColor: $backgroundColor,
        color,
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = $hoverBackgroundColor)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = $backgroundColor)
      }
    >
      {text}
    </button>
  );
};

export default Button;
