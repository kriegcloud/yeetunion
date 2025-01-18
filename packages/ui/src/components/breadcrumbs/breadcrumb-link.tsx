import type { SxProps, Theme } from "@mui/material/styles";

import MuiLink from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

// ----------------------------------------------------------------------

export type BreadcrumbsLinkProps = ComponentProps<"div"> & {
  name?: string;
  href?: string;
  disabled?: boolean;
  icon?: ReactNode;
  sx?: SxProps<Theme>;
};

export function BreadcrumbsLink({
  href,
  icon,
  name,
  disabled,
  ...other
}: BreadcrumbsLinkProps) {
  const renderContent = () => (
    <ItemRoot disabled={disabled} {...other}>
      {icon && <ItemIcon>{icon}</ItemIcon>}
      {name}
    </ItemRoot>
  );

  if (href) {
    return (
      <MuiLink
        component={Link}
        href={href}
        color="inherit"
        sx={{
          display: "inline-flex",
          ...(disabled && { pointerEvents: "none" }),
        }}
      >
        {renderContent()}
      </MuiLink>
    );
  }

  return renderContent();
}

// ----------------------------------------------------------------------

const ItemRoot = styled("div", {
  shouldForwardProp: (prop: string) => !["disabled", "sx"].includes(prop),
})<Pick<BreadcrumbsLinkProps, "disabled">>(({ disabled, theme }) => ({
  ...theme.typography.body2,
  alignItems: "center",
  gap: theme.spacing(1),
  display: "inline-flex",
  color: theme.vars.palette.text.primary,
  ...(disabled && {
    cursor: "default",
    pointerEvents: "none",
    color: theme.vars.palette.text.disabled,
  }),
}));

const ItemIcon = styled("span")(() => ({
  display: "inherit",
  /**
   * As ':first-child' for ssr
   * https://github.com/emotion-js/emotion/issues/1105#issuecomment-1126025608
   */
  "& > :first-of-type:not(style):not(:first-of-type ~ *), & > style + *": {
    width: 20,
    height: 20,
  },
}));
