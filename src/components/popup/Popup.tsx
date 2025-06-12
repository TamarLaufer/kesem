"use client";

import React from "react";
import {
  TextContent,
  PopupContainer,
  PopupOverlay,
  ButtonText,
} from "./Popup.styles";
import { motion } from "framer-motion";

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
  const AnimatedPopup = motion(PopupContainer);

  return (
    <PopupOverlay>
      <AnimatedPopup
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <PopupContainer>
          {icon && <div style={{ fontSize: "48px", color }}>{icon}</div>}
          {title && <h2 style={{ color }}>{title}</h2>}
          {text && <TextContent>{text}</TextContent>}
          {buttonText && (
            <ButtonText onClick={onClick}>{buttonText}</ButtonText>
          )}
        </PopupContainer>
      </AnimatedPopup>
    </PopupOverlay>
  );
};

export default Popup;
