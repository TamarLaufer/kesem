import styled, { keyframes } from "styled-components";
import { Loader2 } from "lucide-react";

type SpinnerPropsStyleType = {
  $color?: string;
  $size?: number;
};

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const SpinnerIcon = styled(Loader2).attrs<SpinnerPropsStyleType>(
  (props) => ({
    size: props.$size || 54,
  })
)<SpinnerPropsStyleType>`
  animation: ${spin} 1s linear infinite;
  color: ${({ $color }) => $color};
  size: ${({ $size }) => $size};
`;

export const SpinnerOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
`;
