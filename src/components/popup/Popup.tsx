"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { theme } from "@/theme";
import styles from "./Popup.module.css";

type PopupPropsType = {
  text?: string;
  buttonText?: string;
  $buttonTextColor?: string;
  icon?: React.ReactNode;
  title?: string;
  color?: string;
  onClick: () => void;
};

const Popup = ({
  text,
  buttonText,
  $buttonTextColor = theme.colors.black,
  icon,
  title,
  color = theme.colors.black,
  onClick,
}: PopupPropsType) => {
  const AnimatedPopup = motion.div;
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    buttonRef.current?.focus();
  }, []);

  const handleClick = useCallback(() => {
    onClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [onClick]);

  return (
    <div className={styles.popupOverlay}>
      <AnimatedPopup
        className={styles.popupContainer}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {icon && (
          <div style={{ fontSize: "48px", color, textAlign: "center" }}>
            {icon}
          </div>
        )}
        {title && (
          <h2 className={styles.header} style={{ color }}>
            {title}
          </h2>
        )}
        {text && <p className={styles.textContent}>{text}</p>}
        {buttonText && (
          <button
            ref={buttonRef}
            className={styles.buttonText}
            style={{ color: $buttonTextColor }}
            onClick={handleClick}
          >
            {buttonText}
          </button>
        )}
      </AnimatedPopup>
    </div>
  );
};

export default Popup;
