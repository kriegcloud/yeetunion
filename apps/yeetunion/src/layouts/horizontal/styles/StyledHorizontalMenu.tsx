import styled from "@emotion/styled";

import type { MenuProps } from "../menu";

import { menuClasses } from "@/layouts/menuClasses";

export const StyledHorizontalMenu = styled.nav<Pick<MenuProps, "rootStyles">>`
  &.${menuClasses.root} {
    ${({ rootStyles }) => rootStyles}
  }
`;
