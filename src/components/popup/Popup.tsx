"use client";

import React, { useEffect, useRef } from "react";
import {
  TextContent,
  PopupContainer,
  PopupOverlay,
  ButtonText,
  Header,
} from "./Popup.styles";
import { motion } from "framer-motion";
import { theme } from "@/theme";

type PopupPropsType = {
  text?: string;
  buttonText?: string;
  buttonTextColor?: string;
  icon?: React.ReactNode;
  title?: string;
  color?: string;
  onClick: () => void;
};

const Popup = ({
  text,
  buttonText,
  buttonTextColor = theme.colors.black,
  icon,
  title,
  color = theme.colors.black,
  onClick,
}: PopupPropsType) => {
  const AnimatedPopup = motion(PopupContainer);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
      console.log("Popup focused!", buttonRef.current);
    }
  }, []);

  const $onClick = () => {
    onClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <PopupOverlay>
      <AnimatedPopup
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <PopupContainer>
          {icon && <div style={{ fontSize: "48px", color }}>{icon}</div>}
          {title && <Header $color={color}>{title}</Header>}
          {text && <TextContent>{text}</TextContent>}
          {buttonText && (
            <ButtonText
              buttonTextColor={buttonTextColor}
              ref={buttonRef}
              onClick={$onClick}
            >
              {buttonText}
            </ButtonText>
          )}
        </PopupContainer>
      </AnimatedPopup>
    </PopupOverlay>
  );
};

export default Popup;
