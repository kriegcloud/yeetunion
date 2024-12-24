import styled from "@emotion/styled";

import type { MenuProps } from "../menu";

import { menuClasses } from "@/layouts/menuClasses";

export const StyledVerticalMenu = styled.nav<Pick<MenuProps, "rootStyles">>`
  & > ul > :first-of-type {
    margin-block-start: 0;
  }
  &.${menuClasses.root} {
    ${({ rootStyles }) => rootStyles}
  }
`;
