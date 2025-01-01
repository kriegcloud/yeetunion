import Link from "next/link";

import { useRef } from "react";

import { styled } from "@mui/material/styles";

import PerfectScrollbar from "react-perfect-scrollbar";

// import Logo from "@components/layout/shared/Logo";
import type { ReactNode } from "react";

import NavCollapseIcons from "@/layouts/vertical/menu/NavCollapseIcons";

import NavHeader from "@/layouts/vertical/menu/NavHeader";

import { useHorizontalNav } from "@/layouts/horizontal/Provider";

import { mapHorizontalToVerticalMenu } from "@/layouts/menuUtils";

const StyledBoxForShadow = styled("div")(({ theme }) => ({
  top: 60,
  left: -8,
  zIndex: 2,
  opacity: 0,
  position: "absolute",
  pointerEvents: "none",
  width: "calc(100% + 15px)",
  height: theme.mixins.toolbar.minHeight,
  transition: "opacity .15s ease-in-out",
  background: `linear-gradient(var(--mui-palette-background-default) ${
    theme.direction === "rtl" ? "95%" : "5%"
  }, rgb(var(--mui-palette-background-defaultChannel) / 0.85) 30%, rgb(var(--mui-palette-background-defaultChannel) / 0.5) 65%, rgb(var(--mui-palette-background-defaultChannel) / 0.3) 75%, transparent)`,
  "&.scrolled": {
    opacity: 1,
  },
}));

const LinkStyled = styled(Link)({
  display: "flex",

  textDecoration: "none",
});

const VerticalNavContent = ({ children }: { children: ReactNode }) => {
  const { isBreakpointReached } = useHorizontalNav();

  const shadowRef = useRef(null);

  const ScrollWrapper = isBreakpointReached ? "div" : PerfectScrollbar;

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const scrollMenu = (container: any, isPerfectScrollbar: boolean) => {
    container =
      isBreakpointReached || !isPerfectScrollbar ? container.target : container;

    if (shadowRef && container.scrollTop > 0) {
      // @ts-ignore
      if (!shadowRef.current.classList.contains("scrolled")) {
        // @ts-ignore
        shadowRef.current.classList.add("scrolled");
      }
    } else {
      // @ts-ignore
      shadowRef.current.classList.remove("scrolled");
    }
  };

  return (
    <>
      <NavHeader>
        <LinkStyled href="/">{/*<Logo />*/}</LinkStyled>
        <NavCollapseIcons
          lockedIcon={<i className="ri-radio-button-line text-xl" />}
          unlockedIcon={<i className="ri-checkbox-blank-circle-line text-xl" />}
          closeIcon={<i className="ri-close-line text-xl" />}
          className="text-textSecondary"
        />
      </NavHeader>
      <StyledBoxForShadow ref={shadowRef} />
      <ScrollWrapper
        {...(isBreakpointReached
          ? {
              className: "bs-full overflow-y-auto overflow-x-hidden",
              onScroll: (container) => scrollMenu(container, false),
            }
          : {
              options: { wheelPropagation: false, suppressScrollX: true },
              onScrollY: (container) => scrollMenu(container, true),
            })}
      >
        {mapHorizontalToVerticalMenu(children)}
      </ScrollWrapper>
    </>
  );
};

export default VerticalNavContent;
