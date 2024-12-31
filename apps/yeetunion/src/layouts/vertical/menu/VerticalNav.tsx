"use client";

import { useEffect, useRef } from "react";
import type { HTMLAttributes } from "react";

import type { CSSObject } from "@emotion/styled";

import classnames from "classnames";

import type { BreakpointType } from "../../types";

import type { VerticalNavState } from "../Provider";

import { useMediaQuery } from "@/layouts/hooks";
import { useVerticalNav } from "../Provider";

import { verticalNavClasses } from "@/layouts/menuClasses";

import { StyledBackdrop } from "../../styles";
import {
  StyledVerticalNav,
  StyledVerticalNavBgColorContainer,
  StyledVerticalNavContainer,
} from "../styles";

import styles from "../styles/verticalNavBgImage.module.css";

import {
  defaultBreakpoints,
  verticalNavToggleDuration,
} from "../../defaultConfigs";

export type VerticalNavProps = HTMLAttributes<HTMLHtmlElement> & {
  width?: VerticalNavState["width"];
  collapsedWidth?: VerticalNavState["collapsedWidth"];
  defaultCollapsed?: boolean;
  backgroundColor?: string;
  backgroundImage?: string;
  breakpoint?: BreakpointType | undefined;
  customBreakpoint?: string | undefined;
  breakpoints?: Partial<typeof defaultBreakpoints>;
  transitionDuration?: VerticalNavState["transitionDuration"];
  backdropColor?: string;
  scrollWithContent?: boolean;
  customStyles?: CSSObject;
};

const VerticalNav = (props: VerticalNavProps) => {
  const {
    width = 260,
    collapsedWidth = 80,
    defaultCollapsed = false,
    backgroundColor = "white",
    backgroundImage,
    breakpoint = "lg",
    customBreakpoint,
    breakpoints,
    transitionDuration = verticalNavToggleDuration,
    backdropColor,
    scrollWithContent = false,
    className,
    customStyles,
    children,
    ...rest
  } = props;

  const mergedBreakpoints = { ...defaultBreakpoints, ...breakpoints };

  const verticalNavCollapsedRef = useRef(false);

  const {
    updateVerticalNavState,
    isCollapsed: isCollapsedContext,
    width: widthContext,
    isBreakpointReached: isBreakpointReachedContext,
    isToggled: isToggledContext,
    isHovered: isHoveredContext,
    collapsing: collapsingContext,
    expanding: expandingContext,
    isScrollWithContent: isScrollWithContentContext,
    transitionDuration: transitionDurationContext,
    isPopoutWhenCollapsed: isPopoutWhenCollapsedContext,
  } = useVerticalNav();

  // Find the breakpoint from which screen size responsive behavior should enable and if its reached or not
  const breakpointReached = useMediaQuery(
    customBreakpoint ??
      (breakpoint ? mergedBreakpoints[breakpoint] : breakpoint),
  );

  // UseEffect, update verticalNav state to set initial values and update values on change
  useEffect(() => {
    updateVerticalNavState({
      width,
      collapsedWidth,
      transitionDuration,
      isScrollWithContent: scrollWithContent,
      isBreakpointReached: breakpointReached,
    });

    if (!breakpointReached) {
      updateVerticalNavState({ isToggled: false });
      verticalNavCollapsedRef.current &&
        updateVerticalNavState({ isCollapsed: true });
    } else {
      if (isCollapsedContext && !verticalNavCollapsedRef.current) {
        verticalNavCollapsedRef.current = true;
      }

      isCollapsedContext && updateVerticalNavState({ isCollapsed: false });
      isHoveredContext && updateVerticalNavState({ isHovered: false });
    }
  }, [
    width,
    collapsedWidth,
    scrollWithContent,
    breakpointReached,
    updateVerticalNavState,
  ]);

  useEffect(() => {
    if (defaultCollapsed) {
      updateVerticalNavState({
        isCollapsed: defaultCollapsed,
        isToggled: false,
      });
    }
  }, [defaultCollapsed]);

  useEffect(() => {
    setTimeout(() => {
      updateVerticalNavState({
        expanding: false,
        collapsing: false,
      });
    }, transitionDuration);

    if (
      !isCollapsedContext &&
      !breakpointReached &&
      verticalNavCollapsedRef.current
    ) {
      verticalNavCollapsedRef.current = false;
    }
  }, [isCollapsedContext]);

  // Handle Backdrop(Content Overlay) Click
  const handleBackdropClick = () => {
    // Close the verticalNav
    updateVerticalNavState({ isToggled: false });
  };

  // Handle VerticalNav Hover Event
  const handleVerticalNavHover = () => {
    /* If verticalNav is collapsed then only hover class should be added to verticalNav
      and hover functionality should work (expand verticalNav width) */
    if (isCollapsedContext && !isHoveredContext) {
      updateVerticalNavState({ isHovered: true });
    }
  };

  // Handle VerticalNav Hover Out Event
  const handleVerticalNavHoverOut = () => {
    // If verticalNav is collapsed then only remove hover class should contract verticalNav width
    if (isCollapsedContext && isHoveredContext) {
      updateVerticalNavState({ isHovered: false });
    }
  };

  return (
    <StyledVerticalNav
      width={defaultCollapsed && !widthContext ? collapsedWidth : width}
      isBreakpointReached={isBreakpointReachedContext}
      collapsedWidth={collapsedWidth}
      collapsing={collapsingContext}
      expanding={expandingContext}
      customStyles={customStyles}
      scrollWithContent={isScrollWithContentContext}
      transitionDuration={transitionDurationContext}
      className={classnames(
        verticalNavClasses.root,
        {
          [verticalNavClasses.collapsed]: isCollapsedContext,
          [verticalNavClasses.toggled]: isToggledContext,
          [verticalNavClasses.hovered]: isHoveredContext,
          [verticalNavClasses.breakpointReached]: isBreakpointReachedContext,
          [verticalNavClasses.scrollWithContent]: isScrollWithContentContext,
          [verticalNavClasses.collapsing]: collapsingContext,
          [verticalNavClasses.expanding]: expandingContext,
        },
        className,
      )}
      {...rest}
    >
      {/* VerticalNav Container for hover effect when verticalNav is collapsed */}
      <StyledVerticalNavContainer
        width={widthContext}
        className={verticalNavClasses.container}
        transitionDuration={transitionDurationContext}
        {
          /* Toggle verticalNav on hover only when isPopoutWhenCollapsedContext(default false) is false */
          ...(!isPopoutWhenCollapsedContext &&
            isCollapsedContext &&
            !breakpointReached && {
              onMouseEnter: handleVerticalNavHover,
              onMouseLeave: handleVerticalNavHoverOut,
            })
        }
      >
        {/* VerticalNav Container to apply styling like background */}
        <StyledVerticalNavBgColorContainer
          className={verticalNavClasses.bgColorContainer}
          backgroundColor={backgroundColor}
        >
          {children}
        </StyledVerticalNavBgColorContainer>

        {/* Display verticalNav background image if provided by user through props */}
        {backgroundImage && (
          /* VerticalNav Background Image */
          <img
            className={classnames(verticalNavClasses.image, styles.root)}
            src={backgroundImage}
            alt="verticalNav background"
          />
        )}
      </StyledVerticalNavContainer>

      {/* When verticalNav is toggled on smaller screen, show/hide verticalNav backdrop */}
      {isToggledContext && breakpointReached && (
        /* VerticalNav Backdrop */
        <StyledBackdrop
          role="button"
          tabIndex={0}
          aria-label="backdrop"
          onClick={handleBackdropClick}
          onKeyPress={handleBackdropClick}
          className={verticalNavClasses.backdrop}
          backdropColor={backdropColor}
        />
      )}
    </StyledVerticalNav>
  );
};

export default VerticalNav;
