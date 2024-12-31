import styled from "@emotion/styled";
import type { RootStylesType } from "./types";
import type { SubMenuContentProps } from "./vertical/menu";
import type { VerticalNavProps } from "./vertical/menu";

type StyledBackdropProps = Pick<VerticalNavProps, "backdropColor">;

export const StyledBackdrop = styled.div<StyledBackdropProps>`
  position: fixed;
  inset-inline-start: 0;
  inset-block-start: 0;
  inset-inline-end: 0;
  inset-block-end: 0;
  z-index: 1;
  background-color: ${({ backdropColor }) => backdropColor || "rgba(0, 0, 0, 0.3)"};
  touch-action: none;
`;

export const StyledMenuIcon = styled.span<RootStylesType>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline-end: 10px;
  ${({ rootStyles }) => rootStyles};
`;

type StyledMenuLabelProps = RootStylesType & {
  textTruncate?: boolean;
};

export const StyledMenuLabel = styled.span<StyledMenuLabelProps>`
  flex-grow: 1;
  ${({ textTruncate }) =>
    textTruncate &&
    `
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    `};
  ${({ rootStyles }) => rootStyles};
`;

type StyledMenuPrefixProps = RootStylesType & {
  firstLevel?: boolean;
  isCollapsed?: boolean;
  isHovered?: boolean;
};

export const StyledMenuPrefix = styled.span<StyledMenuPrefixProps>`
  margin-inline-end: 5px;
  display: ${({ firstLevel, isCollapsed, isHovered }) => (firstLevel && isCollapsed && !isHovered ? "none" : "flex")};
  ${({ rootStyles }) => rootStyles};
`;

type StyledMenuSectionLabelProps = RootStylesType & {
  isCollapsed?: boolean;
  isHovered?: boolean;
  textTruncate?: boolean;
};

export const StyledMenuSectionLabel = styled.span<StyledMenuSectionLabelProps>`
  ${({ textTruncate }) =>
    textTruncate &&
    `
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `};
  ${({ isCollapsed, isHovered }) =>
    !isCollapsed || (isCollapsed && isHovered)
      ? `
flex-grow: 1;
`
      : ""}
  ${({ rootStyles }) => rootStyles};
`;

type StyledMenuSuffixProps = RootStylesType & {
  firstLevel?: boolean;
  isCollapsed?: boolean;
  isHovered?: boolean;
};

export const StyledMenuSuffix = styled.span<StyledMenuSuffixProps>`
  margin-inline-start: 5px;
  display: ${({ firstLevel, isCollapsed, isHovered }) => (firstLevel && isCollapsed && !isHovered ? "none" : "flex")};
  ${({ rootStyles }) => rootStyles};
`;

export const StyledSubMenuContent = styled.div<SubMenuContentProps>`
  display: none;
  overflow: hidden;
  z-index: 999;
  transition: ${({ transitionDuration }) => `block-size ${transitionDuration}ms ease-in-out`};
  box-sizing: border-box;

  ${({ isCollapsed, level, isPopoutWhenCollapsed, isHovered }) =>
    isCollapsed &&
    level === 0 &&
    !isPopoutWhenCollapsed &&
    !isHovered &&
    `
      block-size: 0 !important;
    `}

  ${({ isCollapsed, level, isPopoutWhenCollapsed }) =>
    isCollapsed && level === 0 && isPopoutWhenCollapsed
      ? `
      display: block;
      padding-inline-start: 0px;
      inline-size: 260px;
      border-radius: 4px;
      block-size: auto !important;
      transition: none !important;
      background-color: white;
      box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
     `
      : `
      position: static !important;
      transform: none !important;
      `}

  ${({ browserScroll }) => browserScroll && `overflow-y: auto; max-block-size: calc((var(--vh, 1vh) * 100));`}


  ${({ rootStyles }) => rootStyles};
`;
