import { mergeClasses } from "@ye/utils/classes";

import { useTheme } from "@mui/material/styles";

import { Scrollbar } from "../../scrollbar";
import { Nav, NavLi, NavUl } from "../components";
import { navSectionClasses, navSectionCssVars } from "../styles";
import { NavList } from "./nav-list";

import type { NavGroupProps, NavSectionProps } from "../types";

// ----------------------------------------------------------------------

export function NavSectionHorizontal({
  sx,
  data,
  render,
  className,
  slotProps,
  currentRole,
  enabledRootRedirect,
  cssVars: overridesVars,
  ...other
}: NavSectionProps) {
  const theme = useTheme();

  const cssVars = { ...navSectionCssVars.horizontal(theme), ...overridesVars };

  return (
    <Scrollbar
      sx={{ height: 1 }}
      slotProps={{
        contentSx: { height: 1, display: "flex", alignItems: "center" },
      }}
    >
      <Nav
        className={mergeClasses([navSectionClasses.horizontal, className])}
        sx={[
          () => ({
            ...cssVars,
            height: 1,
            mx: "auto",
            display: "flex",
            alignItems: "center",
            minHeight: "var(--nav-height)",
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        <NavUl sx={{ flexDirection: "row", gap: "var(--nav-item-gap)" }}>
          {data?.map((group) => (
            <Group
              // biome-ignore lint/style/noNonNullAssertion: <explanation>
              key={group.subheader ?? group.items[0]!.title}
              render={render}
              cssVars={cssVars}
              items={group.items}
              slotProps={slotProps}
              currentRole={currentRole}
              enabledRootRedirect={enabledRootRedirect}
            />
          ))}
        </NavUl>
      </Nav>
    </Scrollbar>
  );
}

// ----------------------------------------------------------------------

function Group({
  items,
  render,
  cssVars,
  slotProps,
  currentRole,
  enabledRootRedirect,
}: NavGroupProps) {
  return (
    <NavLi>
      <NavUl sx={{ flexDirection: "row", gap: "var(--nav-item-gap)" }}>
        {items.map((list) => (
          <NavList
            key={list.title}
            depth={1}
            data={list}
            render={render}
            cssVars={cssVars}
            slotProps={slotProps}
            currentRole={currentRole}
            enabledRootRedirect={enabledRootRedirect}
          />
        ))}
      </NavUl>
    </NavLi>
  );
}
