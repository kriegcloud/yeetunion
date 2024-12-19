import MuiButton from "@mui/material/Button";
import * as React from "react";
export interface ButtonProps {
  className?: string;
  onClick?: () => void;
  HTMLAttributes?: React.HTMLAttributes<HTMLButtonElement>;
  children?: React.ReactNode;
  backgroundColor?: string;
}

export const Button = ({ children }: ButtonProps) => {
  return <MuiButton>{children}</MuiButton>;
};
