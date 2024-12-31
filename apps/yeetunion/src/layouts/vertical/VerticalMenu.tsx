import { useTheme } from "@mui/material/styles";

import PerfectScrollbar from "react-perfect-scrollbar";

import type { VerticalMenuContextProps } from "@/layouts/vertical/menu";

import {
  Menu,
  // MenuItem
} from "./menu";
import { useVerticalNav } from "@/layouts/vertical/Provider";
import { StyledVerticalNavExpandIcon } from "@/layouts/vertical/styles";

import { GenerateVerticalMenu } from "@/layouts/GenerateMenu";
import verticalMenuData from "@/data/navigation/verticalMenuData";
import menuItemStyles from "@/layouts/vertical/styles/menuItemStyles";
import menuSectionStyles from "@/layouts/vertical/styles/menuSectionStyles";

type RenderExpandIconProps = {
  open?: boolean;
  transitionDuration?: VerticalMenuContextProps["transitionDuration"];
};

type Props = {
  scrollMenu: (
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    container: any,
    isPerfectScrollbar: boolean,
  ) => void;
};

const RenderExpandIcon = ({
  open,
  transitionDuration,
}: RenderExpandIconProps) => (
  <StyledVerticalNavExpandIcon
    open={open}
    transitionDuration={transitionDuration}
  >
    <i className="ri-arrow-right-s-line" />
  </StyledVerticalNavExpandIcon>
);

const VerticalMenu = ({ scrollMenu }: Props) => {
  const theme = useTheme();
  const verticalNavOptions = useVerticalNav();

  const { isBreakpointReached, transitionDuration } = verticalNavOptions;

  const ScrollWrapper = isBreakpointReached ? "div" : PerfectScrollbar;

  return (
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
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
      <Menu
        popoutMenuOffset={{ mainAxis: 10 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => (
          <RenderExpandIcon
            open={open}
            transitionDuration={transitionDuration}
          />
        )}
        renderExpandedMenuItemIcon={{ icon: <i className="ri-circle-line" /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <GenerateVerticalMenu menuData={verticalMenuData()} />
      </Menu>
    </ScrollWrapper>
  );
};

export default VerticalMenu;
