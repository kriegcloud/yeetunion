"use client";

import { createContext, forwardRef, useMemo } from "react";
import type {
  ForwardRefRenderFunction,
  MenuHTMLAttributes,
  ReactElement,
} from "react";

import { FloatingTree } from "@floating-ui/react";

import classnames from "classnames";

import type {
  ChildrenType,
  MenuItemStyles,
  RenderExpandIconParams,
  RenderExpandedMenuItemIcon,
  RootStylesType,
} from "../../types";

import type { MenuProps as VerticalMenuProps } from "../../vertical/menu";

import { menuClasses } from "@/layouts/menuClasses";

import { StyledHorizontalMenu } from "../styles";

import styles from "../styles/horizontalUl.module.css";

import { horizontalSubMenuToggleDuration } from "../../defaultConfigs";

export type HorizontalMenuContextProps = {
  triggerPopout?: "hover" | "click";
  browserScroll?: boolean;
  menuItemStyles?: MenuItemStyles | undefined;
  renderExpandIcon?:
    | undefined
    | ((params: RenderExpandIconParams) => ReactElement);
  renderExpandedMenuItemIcon?: RenderExpandedMenuItemIcon | undefined;
  transitionDuration?: number;
  popoutMenuOffset?: {
    mainAxis?: number | ((params: { level?: number }) => number);
    alignmentAxis?: number | ((params: { level?: number }) => number);
  };
  textTruncate?: boolean;
  verticalMenuProps?:
    | Pick<
        VerticalMenuProps,
        | "transitionDuration"
        | "menuSectionStyles"
        | "menuItemStyles"
        | "subMenuOpenBehavior"
        | "renderExpandIcon"
        | "renderExpandedMenuItemIcon"
        | "textTruncate"
        | "rootStyles"
      >
    | undefined;
};

export type MenuProps = HorizontalMenuContextProps &
  RootStylesType &
  Partial<ChildrenType> &
  MenuHTMLAttributes<HTMLMenuElement>;

export const HorizontalMenuContext = createContext(
  {} as HorizontalMenuContextProps,
);

const Menu: ForwardRefRenderFunction<HTMLMenuElement, MenuProps> = (
  props,
  ref,
) => {
  const {
    children,
    className,
    rootStyles,
    menuItemStyles,
    triggerPopout = "hover",
    browserScroll = false,
    transitionDuration = horizontalSubMenuToggleDuration,
    renderExpandIcon,
    renderExpandedMenuItemIcon,
    popoutMenuOffset = { mainAxis: 0 },
    textTruncate = true,
    verticalMenuProps,
    ...rest
  } = props;

  const providerValue = useMemo(
    () => ({
      triggerPopout,
      browserScroll,
      menuItemStyles,
      renderExpandIcon,
      renderExpandedMenuItemIcon,
      transitionDuration,
      popoutMenuOffset,
      textTruncate,
      verticalMenuProps,
    }),
    [
      triggerPopout,
      browserScroll,
      menuItemStyles,
      renderExpandIcon,
      renderExpandedMenuItemIcon,
      transitionDuration,
      popoutMenuOffset,
      textTruncate,
      verticalMenuProps,
    ],
  );

  return (
    <HorizontalMenuContext.Provider value={providerValue}>
      <FloatingTree>
        <StyledHorizontalMenu
          ref={ref}
          className={classnames(menuClasses.root, className)}
          rootStyles={rootStyles}
          {...rest}
        >
          <ul className={styles.root}>{children}</ul>
        </StyledHorizontalMenu>
      </FloatingTree>
    </HorizontalMenuContext.Provider>
  );
};

export default forwardRef(Menu);
