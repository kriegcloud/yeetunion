import { useTheme } from "@mui/material/styles";

import PerfectScrollbar from "react-perfect-scrollbar";

import { useVerticalNav } from "@/layouts/vertical/Provider";
import type { VerticalMenuContextProps } from "@/layouts/vertical/menu";
import { StyledVerticalNavExpandIcon } from "@/layouts/vertical/styles";
import menuItemStyles from "@/layouts/vertical/styles/menuItemStyles";
import menuSectionStyles from "@/layouts/vertical/styles/menuSectionStyles";
import type { getDictionary } from "@/utils/getDictionary";
import Chip from "@mui/material/Chip";
import { useParams } from "next/navigation";
import {
  Menu,
  MenuItem,
  SubMenu,
} from "./menu";
type RenderExpandIconProps = {
  open?: boolean;
  transitionDuration?: VerticalMenuContextProps["transitionDuration"];
};

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
  scrollMenu: (container: any, isPerfectScrollbar: boolean) => void;
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

const VerticalMenu = ({ scrollMenu, dictionary }: Props) => {
  // Hooks
  const theme = useTheme();
  const verticalNavOptions = useVerticalNav();
  const params = useParams();

  // Vars
  const { isBreakpointReached, transitionDuration } = verticalNavOptions;
  const { lang: locale } = params;

  const ScrollWrapper = isBreakpointReached ? "div" : PerfectScrollbar;

  return (
    // eslint-disable-next-line lines-around-comment
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
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
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
        <SubMenu
          label={dictionary["navigation"].dashboards}
          icon={<i className="ri-home-smile-line" />}
          suffix={<Chip label="5" size="small" color="error" />}
        >
          <MenuItem href={`/${locale}/dashboards/crm`}>
            {dictionary["navigation"].crm}
          </MenuItem>
          <MenuItem href={`/${locale}/dashboards/analytics`}>
            {dictionary["navigation"].analytics}
          </MenuItem>
          <MenuItem href={`/${locale}/dashboards/ecommerce`}>
            {dictionary["navigation"].eCommerce}
          </MenuItem>
          <MenuItem href={`/${locale}/dashboards/academy`}>
            {dictionary["navigation"].academy}
          </MenuItem>
          <MenuItem href={`/${locale}/dashboards/logistics`}>
            {dictionary["navigation"].logistics}
          </MenuItem>
        </SubMenu>
      </Menu>
      {/* <Menu
        popoutMenuOffset={{ mainAxis: 10 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <GenerateVerticalMenu menuData={menuData(dictionary)} />
      </Menu> */}
    </ScrollWrapper>
  );
};

export default VerticalMenu;
