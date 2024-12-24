import type { BreakpointType, ChildrenType } from "../../types";

import {VerticalNav, type VerticalNavProps} from "../../vertical/menu";

type VerticalNavInHorizontalProps = ChildrenType & {
  className?: string;
  breakpoint?: BreakpointType;
  customBreakpoint?: string | undefined;
  verticalNavProps?: Pick<
    VerticalNavProps,
    "width" | "backgroundColor" | "backgroundImage" | "customStyles"
  > | undefined;
};

const VerticalNavInHorizontal = (props: VerticalNavInHorizontalProps) => {
  const {
    children,
    className,
    breakpoint,
    customBreakpoint,
    verticalNavProps,
  } = props;

  return (
    <VerticalNav
      {...verticalNavProps}
      className={className}
      breakpoint={breakpoint}
      customBreakpoint={customBreakpoint}
    >
      {children}
    </VerticalNav>
  );
};

export default VerticalNavInHorizontal;
