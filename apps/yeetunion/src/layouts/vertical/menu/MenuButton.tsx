import { cloneElement, createElement, forwardRef } from "react";
import type { ForwardRefRenderFunction } from "react";

import { css } from "@emotion/react";

import classnames from "classnames";

import type { ChildrenType, MenuButtonProps } from "../../types";

import { RouterLink } from "@ye/ui/RouterLink";

import { menuClasses } from "@/layouts/menuClasses";

type MenuButtonStylesProps = Partial<ChildrenType> & {
  level: number;
  active?: boolean | undefined;
  disabled: boolean | undefined;
  isCollapsed: boolean | undefined;
  isPopoutWhenCollapsed: boolean | undefined;
};

export const menuButtonStyles = (props: MenuButtonStylesProps) => {
  const { level, disabled, children, isCollapsed, isPopoutWhenCollapsed } =
    props;

  return css({
    display: "flex",
    alignItems: "center",
    minBlockSize: "30px",
    textDecoration: "none",
    color: "inherit",
    boxSizing: "border-box",
    cursor: "pointer",
    paddingInlineEnd: "20px",
    paddingInlineStart: `${level === 0 ? 20 : (isPopoutWhenCollapsed && isCollapsed ? level : level + 1) * 20}px`,

    '&:hover, &[aria-expanded="true"]': {
      backgroundColor: "#f3f3f3",
    },

    "&:focus-visible": {
      outline: "none",
      backgroundColor: "#f3f3f3",
    },

    ...(disabled && {
      pointerEvents: "none",
      cursor: "default",
      color: "#adadad",
    }),

    // All the active styles are applied to the button including menu items or submenu
    [`&.${menuClasses.active}`]: {
      ...(!children && { color: "white" }),
      backgroundColor: children ? "#f3f3f3" : "#765feb",
    },
  });
};

const MenuButton: ForwardRefRenderFunction<
  HTMLAnchorElement,
  MenuButtonProps
> = ({ className, component, children, ...rest }, ref) => {
  if (component) {
    // If component is a string, create a new element of that type
    if (typeof component === "string") {
      return createElement(
        component,
        {
          className: classnames(className),
          ...rest,
          ref,
        },
        children,
      );
    }
    // Otherwise, clone the element
    const { className: classNameProp, ...props } = component.props;

    return cloneElement(
      component,
      {
        className: classnames(className, classNameProp),
        ...rest,
        ...props,
        ref,
      },
      children,
    );
  }
  // If there is no component but href is defined, render RouterLink
  if (rest.href) {
    return (
      // @ts-ignore TODO fix me
      <RouterLink ref={ref} className={className} href={rest.href} {...rest}>
        {children}
      </RouterLink>
    );
  }
  return (
    <a ref={ref} className={className} {...rest}>
      {children}
    </a>
  );
};

export default forwardRef(MenuButton);
