import React from "react";
import { SpinnerOverlay, SpinnerIcon } from "./Spinner.styles";

type SpinnerPropsType = {
  color?: string;
  size?: number;
};

const Spinner = ({ color, size }: SpinnerPropsType) => {
  return (
    <SpinnerOverlay>
      <SpinnerIcon $color={color} $size={size} />
    </SpinnerOverlay>
  );
};

export default Spinner;
