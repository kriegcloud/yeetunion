import { useTheme } from "@mui/material/styles";


import type { VerticalMenuContextProps } from "@/layouts/vertical/menu";
import { Menu, MenuItem, HorizontalNav} from "./menu"

import VerticalNavContent from "./VerticalNavContent";

import { useSettings } from "@ye/theme/ThemeSettingsProvider";


import { useVerticalNav } from "@/layouts/vertical/Provider";

import {StyledHorizontalNavExpandIcon} from "@/layouts/horizontal/styles/StyledHorizontalNavExpandIcon";
import {StyledVerticalNavExpandIcon} from "@/layouts/vertical/styles/StyledVerticalNavExpandIcon";

import menuItemStyles from "@/layouts/horizontal/styles/menuItemStyles";

import horizontalMenuData from "@/data/navigation/horizontalMenuData";
import { GenerateHorizontalMenu } from "@/layouts/GenerateMenu";
import menuRootStyles from "@/layouts/horizontal/styles/menuRootStyles";
import verticalMenuItemStyles from "@/layouts/vertical/styles/menuItemStyles";
import verticalMenuSectionStyles from "@/layouts/vertical/styles/menuSectionStyles";
import verticalNavigationCustomStyles from "@/layouts/vertical/styles/navigationCustomStyles";

type RenderExpandIconProps = {
  level?: number;
};

type RenderVerticalExpandIconProps = {
  open?: boolean;
  transitionDuration?: VerticalMenuContextProps["transitionDuration"];
};

const RenderExpandIcon = ({ level }: RenderExpandIconProps) => (
  <StyledHorizontalNavExpandIcon level={level}>
    <i className="ri-arrow-right-s-line" />
  </StyledHorizontalNavExpandIcon>
);

const RenderVerticalExpandIcon = ({
  open,
  transitionDuration,
}: RenderVerticalExpandIconProps) => (
  <StyledVerticalNavExpandIcon
    open={open}
    transitionDuration={transitionDuration}
  >
    <i className="ri-arrow-right-s-line" />
  </StyledVerticalNavExpandIcon>
);

const HorizontalMenu = () => {
  const verticalNavOptions = useVerticalNav();
  const theme = useTheme();
  const { settings } = useSettings();

  const { skin } = settings;
  const { transitionDuration } = verticalNavOptions;

  return (
    <HorizontalNav
      switchToVertical
      verticalNavContent={VerticalNavContent}
      verticalNavProps={{
        customStyles: verticalNavigationCustomStyles(verticalNavOptions, theme),
        backgroundColor:
          skin === "bordered"
            ? "var(--mui-palette-background-paper)"
            : "var(--mui-palette-background-default)",
      }}
    >
      <Menu
        rootStyles={menuRootStyles(theme)}
        renderExpandIcon={({ level }) => <RenderExpandIcon level={level} />}
        renderExpandedMenuItemIcon={{ icon: <i className="ri-circle-line" /> }}
        menuItemStyles={menuItemStyles(theme, "ri-circle-line")}
        popoutMenuOffset={{
          mainAxis: ({ level }) => (level && level > 0 ? 4 : 16),
          alignmentAxis: 0,
        }}
        verticalMenuProps={{
          menuItemStyles: verticalMenuItemStyles(verticalNavOptions, theme),
          renderExpandIcon: ({ open }) => (
            <RenderVerticalExpandIcon
              open={open}
              transitionDuration={transitionDuration}
            />
          ),
          renderExpandedMenuItemIcon: {
            icon: <i className="ri-circle-line" />,
          },
          menuSectionStyles: verticalMenuSectionStyles(
            verticalNavOptions,
            theme,
          ),
        }}
      >
        <MenuItem href="/" icon={<i className="ri-home-smile-line" />}>
          Home
        </MenuItem>
        <MenuItem href="/about" icon={<i className="ri-information-line" />}>
          About
        </MenuItem>
      </Menu>
      <Menu
        rootStyles={menuRootStyles(theme)}
        renderExpandIcon={({ level }) => <RenderExpandIcon level={level} />}
        renderExpandedMenuItemIcon={{ icon: <i className="ri-circle-line" /> }}
        menuItemStyles={menuItemStyles(theme, "ri-circle-line")}
        popoutMenuOffset={{
          mainAxis: ({ level }) => (level && level > 0 ? 4 : 16),
          alignmentAxis: 0,
        }}
        verticalMenuProps={{
          menuItemStyles: verticalMenuItemStyles(verticalNavOptions, theme),
          renderExpandIcon: ({ open }) => (
            <RenderVerticalExpandIcon
              open={open}
              transitionDuration={transitionDuration}
            />
          ),
          renderExpandedMenuItemIcon: {
            icon: <i className="ri-circle-line" />,
          },
          menuSectionStyles: verticalMenuSectionStyles(
            verticalNavOptions,
            theme,
          ),
        }}
      >
        <GenerateHorizontalMenu menuData={horizontalMenuData()} />
      </Menu>
    </HorizontalNav>
  );
};

export default HorizontalMenu;
