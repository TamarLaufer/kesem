"use client";

import React from "react";
import {
  TextContent,
  PopupContainer,
  PopupOverlay,
  ButtonText,
} from "./Popup.styles";

type PopupPropsType = {
  text?: string;
  buttonText?: string;
  icon?: React.ReactNode;
  title?: string;
  color?: string;
  onClick?: () => void;
};

const Popup = ({
  text,
  buttonText,
  icon,
  title,
  color,
  onClick,
}: PopupPropsType) => {
  return (
    <PopupOverlay>
      <PopupContainer>
        {icon && <div style={{ fontSize: "48px", color }}>{icon}</div>}
        {title && <h2 style={{ color }}>{title}</h2>}
        {text && <TextContent>{text}</TextContent>}
        {buttonText && <ButtonText onClick={onClick}>{buttonText}</ButtonText>}
      </PopupContainer>
    </PopupOverlay>
  );
};

export default Popup;
