"use client";

import { forwardRef, useEffect, useState } from "react";
import type {
  AnchorHTMLAttributes,
  ForwardRefRenderFunction,
  ReactElement,
  ReactNode,
} from "react";

import { usePathname } from "next/navigation";

import type { CSSObject } from "@emotion/styled";

import classnames from "classnames";
import { useUpdateEffect } from "react-use";

import type {
  ChildrenType,
  MenuItemElement,
  MenuItemExactMatchUrlProps,
  RootStylesType,
} from "../../types";

import MenuButton from "./MenuButton";

import useVerticalMenu from "../useVerticalMenu";

import { useVerticalNav } from "../Provider";

import { menuClasses } from "@/layouts/menuClasses";

import { renderMenuIcon } from "@/layouts/menuUtils";

import {
  StyledMenuLabel,
  StyledMenuPrefix,
  StyledMenuSuffix,
} from "../../styles";
import { StyledVerticalMenuItem } from "../styles";

export type MenuItemProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "prefix"
> &
  RootStylesType &
  Partial<ChildrenType> &
  MenuItemExactMatchUrlProps & {
    icon?: ReactElement;
    prefix?: ReactNode;
    suffix?: ReactNode;
    disabled?: boolean;
    target?: string;
    rel?: string;
    component?: string | ReactElement;
    onActiveChange?: (active: boolean) => void;

    /**
     * @ignore
     */
    level?: number;
  };

const MenuItem: ForwardRefRenderFunction<HTMLLIElement, MenuItemProps> = (
  props,
  ref,
) => {
  const {
    children,
    icon,
    className,
    prefix,
    suffix,
    level = 0,
    disabled = false,
    exactMatch = true,
    activeUrl,
    component,
    onActiveChange,
    rootStyles,
    ...rest
  } = props;

  const [active, setActive] = useState(false);

  const pathname = usePathname();
  const { menuItemStyles, renderExpandedMenuItemIcon, textTruncate } =
    useVerticalMenu();

  const {
    isCollapsed,
    isHovered,
    isPopoutWhenCollapsed,
    toggleVerticalNav,
    isToggled,
    isBreakpointReached,
  } = useVerticalNav();

  // Get the styles for the specified element.
  const getMenuItemStyles = (
    element: MenuItemElement,
  ): CSSObject | undefined => {
    // If the menuItemStyles prop is provided, get the styles for the specified element.
    if (menuItemStyles) {
      // Define the parameters that are passed to the style functions.
      const params = { level, disabled, active, isSubmenu: false };

      // Get the style function for the specified element.
      const styleFunction = menuItemStyles[element];

      if (styleFunction) {
        // If the style function is a function, call it and return the result.
        // Otherwise, return the style function itself.
        return typeof styleFunction === "function"
          ? styleFunction(params)
          : styleFunction;
      }
      return undefined;
    }
    return undefined;
  };

  // Handle the click event.
  const handleClick = () => {
    if (isToggled) {
      toggleVerticalNav();
    }
  };

  // Change active state when the url changes
  useEffect(() => {
    const href =
      rest.href ||
      (component && typeof component !== "string" && component.props.href);

    if (href) {
      // Check if the current url matches any of the children urls
      if (
        exactMatch
          ? pathname === href
          : activeUrl && pathname.includes(activeUrl)
      ) {
        setActive(true);
      } else {
        setActive(false);
      }
    }
  }, [pathname]);

  // Call the onActiveChange callback when the active state changes.
  useUpdateEffect(() => {
    onActiveChange?.(active);
  }, [active]);

  return (
    <StyledVerticalMenuItem
      ref={ref}
      className={classnames(
        menuClasses.menuItemRoot,
        { [menuClasses.disabled]: disabled },
        { [menuClasses.active]: active },
        className,
      )}
      level={level}
      isCollapsed={isCollapsed}
      isPopoutWhenCollapsed={isPopoutWhenCollapsed}
      disabled={disabled}
      buttonStyles={getMenuItemStyles("button")}
      menuItemStyles={getMenuItemStyles("root")}
      rootStyles={rootStyles}
    >
      <MenuButton
        className={classnames(menuClasses.button, {
          [menuClasses.active]: active,
        })}
        component={component}
        tabIndex={disabled ? -1 : 0}
        {...rest}
        onClick={(e) => {
          handleClick();
          rest.onClick?.(e);
        }}
      >
        {/* Menu Item Icon */}
        {renderMenuIcon({
          icon,
          level,
          active,
          disabled,
          renderExpandedMenuItemIcon,
          styles: getMenuItemStyles("icon"),
          isBreakpointReached,
        })}

        {/* Menu Item Prefix */}
        {prefix && (
          <StyledMenuPrefix
            isHovered={isHovered}
            isCollapsed={isCollapsed}
            firstLevel={level === 0}
            className={menuClasses.prefix}
            rootStyles={getMenuItemStyles("prefix")}
          >
            {prefix}
          </StyledMenuPrefix>
        )}

        {/* Menu Item Label */}
        <StyledMenuLabel
          className={menuClasses.label}
          rootStyles={getMenuItemStyles("label")}
          textTruncate={textTruncate}
        >
          {children}
        </StyledMenuLabel>

        {/* Menu Item Suffix */}
        {suffix && (
          <StyledMenuSuffix
            isHovered={isHovered}
            isCollapsed={isCollapsed}
            firstLevel={level === 0}
            className={menuClasses.suffix}
            rootStyles={getMenuItemStyles("suffix")}
          >
            {suffix}
          </StyledMenuSuffix>
        )}
      </MenuButton>
    </StyledVerticalMenuItem>
  );
};

export default forwardRef(MenuItem);
