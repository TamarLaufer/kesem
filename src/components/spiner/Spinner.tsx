import React from "react";
import { Loader2 } from "lucide-react";
import s from "./Spinner.module.css";

type SpinnerPropsType = {
  color?: string;
  size?: number;
};

const Spinner = ({ color = "#00bcd4", size = 54 }: SpinnerPropsType) => {
  return (
    <div
      className={s.spinnerOverlay}
      style={{ display: color ? "flex" : "none" }}
    >
      <Loader2
        className={s.spinnerIcon}
        color={color}
        size={size}
        strokeWidth={2.5}
      />
    </div>
  );
};

export default Spinner;
