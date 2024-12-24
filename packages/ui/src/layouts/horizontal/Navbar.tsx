import type { ReactNode } from "react";
import { horizontalLayoutClasses } from "@/layouts/layoutClasses";
import classnames from "classnames";
type Props = {
  children: ReactNode;
};
export const Navbar = ({ children }: Props) => {
  return (
    <div
      className={classnames(
        horizontalLayoutClasses.navbar,
        "flex items-center justify-between is-full",
      )}
    >
      {children}
    </div>
  );
};
