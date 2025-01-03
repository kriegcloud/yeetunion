import { StyledHorizontalNavExpandIcon } from "@/layouts/horizontal/styles/StyledHorizontalNavExpandIcon";
import menuItemStyles from "@/layouts/horizontal/styles/menuItemStyles";
import menuRootStyles from "@/layouts/horizontal/styles/menuRootStyles";
import { useVerticalNav } from "@/layouts/vertical/Provider";
import type { VerticalMenuContextProps } from "@/layouts/vertical/menu";
import { StyledVerticalNavExpandIcon } from "@/layouts/vertical/styles/StyledVerticalNavExpandIcon";
import verticalMenuItemStyles from "@/layouts/vertical/styles/menuItemStyles";
import verticalMenuSectionStyles from "@/layouts/vertical/styles/menuSectionStyles";
import verticalNavigationCustomStyles from "@/layouts/vertical/styles/navigationCustomStyles";
import type { getDictionary } from "@/utils/getDictionary";
import { useTheme } from "@mui/material/styles";
import { useSettings } from "@ye/theme/ThemeSettingsProvider";
import { useParams } from "next/navigation";
import VerticalNavContent from "./VerticalNavContent";
import { HorizontalNav, Menu, MenuItem, SubMenu } from "./menu";

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

const HorizontalMenu = ({
  dictionary,
}: { dictionary: Awaited<ReturnType<typeof getDictionary>> }) => {
  // Hooks
  const verticalNavOptions = useVerticalNav();
  const theme = useTheme();
  const { settings } = useSettings();
  const params = useParams();

  // Vars
  const { skin } = settings;
  const { transitionDuration } = verticalNavOptions;
  const { lang: locale } = params;

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
        <SubMenu
          label={dictionary["navigation"].dashboards}
          icon={<i className="ri-home-smile-line" />}
        >
          <MenuItem
            href={`/${locale}/dashboards/crm`}
            icon={<i className="ri-pie-chart-2-line" />}
          >
            {dictionary["navigation"].crm}
          </MenuItem>
          <MenuItem
            href={`/${locale}/dashboards/analytics`}
            icon={<i className="ri-bar-chart-line" />}
          >
            {dictionary["navigation"].analytics}
          </MenuItem>
          <MenuItem
            href={`/${locale}/dashboards/ecommerce`}
            icon={<i className="ri-shopping-bag-3-line" />}
          >
            {dictionary["navigation"].eCommerce}
          </MenuItem>
          <MenuItem
            href={`/${locale}/dashboards/academy`}
            icon={<i className="ri-graduation-cap-line" />}
          >
            {dictionary["navigation"].academy}
          </MenuItem>
          <MenuItem
            href={`/${locale}/dashboards/logistics`}
            icon={<i className="ri-car-line" />}
          >
            {dictionary["navigation"].logistics}
          </MenuItem>
        </SubMenu>
      </Menu>
    </HorizontalNav>
  );
};

export default HorizontalMenu;
