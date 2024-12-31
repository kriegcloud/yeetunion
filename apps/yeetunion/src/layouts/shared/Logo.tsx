"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

import styled from "@emotion/styled";

import type { VerticalNavContextProps } from "@/layouts/vertical/Provider";

// import { Logo as RocketLogo } from "@e2/ui";

import {themeConfig} from "@ye/theme/themeConfig";

import { useSettings } from "@ye/theme/ThemeSettingsProvider";
import { useVerticalNav } from "@/layouts/vertical/Provider";

type LogoTextProps = {
  isHovered?: VerticalNavContextProps["isHovered"];
  isCollapsed?: VerticalNavContextProps["isCollapsed"];
  transitionDuration?: VerticalNavContextProps["transitionDuration"];
  isBreakpointReached?: VerticalNavContextProps["isBreakpointReached"];
  color?: CSSProperties["color"];
};

const LogoText = styled.span<LogoTextProps>`
  color: ${({ color }) => color ?? "var(--mui-palette-text-primary)"};
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: 0.15px;
  text-transform: uppercase;
  transition: ${({ transitionDuration }) =>
    `margin-inline-start ${transitionDuration}ms ease-in-out, opacity ${transitionDuration}ms ease-in-out`};

  ${({ isHovered, isCollapsed, isBreakpointReached }) =>
    !isBreakpointReached && isCollapsed && !isHovered
      ? "opacity: 0; margin-inline-start: 0;"
      : "opacity: 1; margin-inline-start: 10px;"}
`;

const Logo = ({ color }: { color?: CSSProperties["color"] }) => {
  const logoTextRef = useRef<HTMLSpanElement>(null);

  const { isHovered, transitionDuration, isBreakpointReached } =
    useVerticalNav();
  const { settings } = useSettings();

  const { layout } = settings;

  useEffect(() => {
    if (layout !== "collapsed") {
      return;
    }

    if (logoTextRef?.current) {
      if (!isBreakpointReached && layout === "collapsed" && !isHovered) {
        logoTextRef.current?.classList.add("hidden");
      } else {
        logoTextRef.current.classList.remove("hidden");
      }
    }
  }, [isHovered, layout, isBreakpointReached]);

  return (
    <div className="flex items-center min-bs-[24px]">
      {/*<RocketLogo />*/}
      <LogoText
        color={color}
        ref={logoTextRef}
        isHovered={isHovered}
        isCollapsed={layout === "collapsed"}
        transitionDuration={transitionDuration}
        isBreakpointReached={isBreakpointReached}
      >
        {themeConfig.templateName}
      </LogoText>
    </div>
  );
};

export default Logo;
