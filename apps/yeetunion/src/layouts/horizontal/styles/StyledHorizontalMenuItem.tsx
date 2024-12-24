import styled from "@emotion/styled";
import type { CSSObject } from "@emotion/styled";

import type { MenuItemProps } from "../menu";

import { menuClasses } from "@/layouts/menuClasses";

import { menuButtonStyles } from "../menu";

type StyledHorizontalMenuItemProps = Pick<
  MenuItemProps,
  "rootStyles" | "disabled"
> & {
  level: number;
  menuItemStyles?: CSSObject;
  buttonStyles?: CSSObject;
};

export const StyledHorizontalMenuItem = styled.li<StyledHorizontalMenuItemProps>`
  position: relative;
  ${({ level }) => level === 0 && { borderRadius: "6px", overflow: "hidden" }}
  ${({ menuItemStyles }) => menuItemStyles};
  ${({ rootStyles }) => rootStyles};

  > .${menuClasses.button} {
    ${({ level, disabled }) =>
      menuButtonStyles({
        level,
        disabled,
      })};
    ${({ buttonStyles }) => buttonStyles};
  }
`;
