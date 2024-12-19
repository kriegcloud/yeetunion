// import clsx from "clsx";
import * as React from "react";
import styles from "./MuiButton.module.css";

export interface ButtonProps {
  className?: string;
  onClick?: () => void;
  HTMLAttributes?: React.HTMLAttributes<HTMLButtonElement>;
  children?: React.ReactNode;
  backgroundColor?: string;
}

export const Button = ({
  onClick,
  HTMLAttributes,
  backgroundColor,
  children,
}: ButtonProps) => {
  return (
    <button
      className={styles["button"]}
      onClick={onClick}
      style={{ backgroundColor }}
      {...HTMLAttributes}
    >
      {children}
    </button>
  );
};
