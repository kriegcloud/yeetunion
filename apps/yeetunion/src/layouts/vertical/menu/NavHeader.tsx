import styled from "@emotion/styled";

import type { VerticalNavContextProps } from "../Provider";

import type { ChildrenType } from "../../types";

import {useVerticalNav} from "../Provider";

import { verticalNavClasses } from "@/layouts/menuClasses";

type StyledNavHeaderProps = {
  isHovered?: VerticalNavContextProps["isHovered"];
  isCollapsed?: VerticalNavContextProps["isCollapsed"];
  collapsedWidth?: VerticalNavContextProps["collapsedWidth"];
  transitionDuration?: VerticalNavContextProps["transitionDuration"];
};

const StyledNavHeader = styled.div<StyledNavHeaderProps>`
  padding: 15px;
  padding-inline-start: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: ${({ transitionDuration }) => `padding-inline ${transitionDuration}ms ease-in-out`};

  ${({ isHovered, isCollapsed, collapsedWidth }) =>
    isCollapsed &&
    !isHovered &&
    `padding-inline: calc((${collapsedWidth}px - 1px - 22px) / 2);`}
`;

const NavHeader = ({ children }: ChildrenType) => {
  const { isHovered, isCollapsed, collapsedWidth, transitionDuration } =
    useVerticalNav();

  return (
    <StyledNavHeader
      className={verticalNavClasses.header}
      isHovered={isHovered}
      isCollapsed={isCollapsed}
      collapsedWidth={collapsedWidth}
      transitionDuration={transitionDuration}
    >
      {children}
    </StyledNavHeader>
  );
};

export default NavHeader;
