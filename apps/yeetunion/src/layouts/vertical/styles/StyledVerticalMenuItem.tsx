import styled from "@emotion/styled";
import type { CSSObject } from "@emotion/styled";

import type { MenuItemProps } from "../menu";

import { menuClasses } from "@/layouts/menuClasses";

import { menuButtonStyles } from "../menu";

type StyledVerticalMenuItemProps = Pick<
  MenuItemProps,
  "rootStyles" | "disabled"
> & {
  level: number;
  menuItemStyles?: CSSObject;
  isCollapsed?: boolean;
  isPopoutWhenCollapsed?: boolean;
  buttonStyles?: CSSObject;
};

export const StyledVerticalMenuItem = styled.li<StyledVerticalMenuItemProps>`
  position: relative;
  margin-block-start: 4px;
  ${({ menuItemStyles }) => menuItemStyles};
  ${({ rootStyles }) => rootStyles};

  > .${menuClasses.button} {
    ${({ level, disabled, isCollapsed, isPopoutWhenCollapsed }) =>
      menuButtonStyles({
        level,
        disabled,
        isCollapsed,
        isPopoutWhenCollapsed,
      })};
    ${({ buttonStyles }) => buttonStyles};
  }
`;
