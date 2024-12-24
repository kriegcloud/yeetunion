import styled from "@emotion/styled";

import type { VerticalNavProps } from "../menu";

import { verticalNavClasses } from "@/layouts/menuClasses";

type StyledVerticalNavContainerProps = Pick<
  VerticalNavProps,
  "width" | "transitionDuration"
>;

export const StyledVerticalNavContainer = styled.div<StyledVerticalNavContainerProps>`
  position: relative;
  block-size: 100%;
  inline-size: 100%;
  border-inline-end: 1px solid #efefef;
  .${verticalNavClasses.hovered} &,
  .${verticalNavClasses.expanding} & {
    inline-size: ${({ width }) => `${width}px`};
  }

  /* Transition */
  transition-property: inline-size, inset-inline-start;
  transition-duration: ${({ transitionDuration }) => `${transitionDuration}ms`};
  transition-timing-function: ease-in-out;
`;
