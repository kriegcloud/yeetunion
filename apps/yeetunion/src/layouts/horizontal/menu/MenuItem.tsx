"use client";

import { forwardRef, useContext, useEffect, useState } from "react";
import type {
  AnchorHTMLAttributes,
  ForwardRefRenderFunction,
  MouseEvent,
  ReactElement,
  ReactNode,
} from "react";

import { usePathname } from "next/navigation";

import type { CSSObject } from "@emotion/styled";
import { useFloatingTree } from "@floating-ui/react";

import classnames from "classnames";
import { useUpdateEffect } from "react-use";

import type {
  ChildrenType,
  MenuItemElement,
  MenuItemExactMatchUrlProps,
  RootStylesType,
} from "../../types";

import { HorizontalSubMenuContext } from "./SubMenu";

import MenuButton from "./MenuButton";

import { useVerticalNav } from "../../vertical/Provider";
import useHorizontalMenu from "../useHorizontalMenu";

import { menuClasses } from "@/layouts/menuClasses";

import { renderMenuIcon } from "@/layouts/menuUtils";

import {
  StyledMenuLabel,
  StyledMenuPrefix,
  StyledMenuSuffix,
} from "../../styles";

import { StyledHorizontalMenuItem } from "../styles";

import styles from "../styles/horizontalUl.module.css";

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

  const tree = useFloatingTree();
  const pathname = usePathname();
  const { toggleVerticalNav, isToggled } = useVerticalNav();
  const { getItemProps } = useContext(HorizontalSubMenuContext);
  const { menuItemStyles, renderExpandedMenuItemIcon, textTruncate } =
    useHorizontalMenu();

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
    <StyledHorizontalMenuItem
      ref={ref}
      className={classnames(
        { [menuClasses.menuItemRoot]: level === 0 },
        { [menuClasses.active]: active },
        { [menuClasses.disabled]: disabled },
        styles.li,
        className,
      )}
      level={level}
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
        onClick={handleClick}
        {...getItemProps({
          onClick(event: MouseEvent<HTMLAnchorElement>) {
            props.onClick?.(event);
            tree?.events.emit("click");
          },
        })}
        {...rest}
      >
        {/* Menu Item Icon */}
        {renderMenuIcon({
          icon,
          level,
          active,
          disabled,
          renderExpandedMenuItemIcon,
          styles: getMenuItemStyles("icon"),
        })}

        {/* Menu Item Prefix */}
        {prefix && (
          <StyledMenuPrefix
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
            firstLevel={level === 0}
            className={menuClasses.suffix}
            rootStyles={getMenuItemStyles("suffix")}
          >
            {suffix}
          </StyledMenuSuffix>
        )}
      </MenuButton>
    </StyledHorizontalMenuItem>
  );
};

export default forwardRef(MenuItem);
