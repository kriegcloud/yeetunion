import type { LinkProps } from "@mui/material/Link";

import { Link as MuiLink } from "@mui/material";

import Link from "next/link";

import { Iconify, iconifyClasses } from "../iconify";

// ----------------------------------------------------------------------

export type BackLinkProps = LinkProps & {
  label?: string;
};

export function BackLink({ sx, label, ...other }: BackLinkProps) {
  return (
    <MuiLink
      component={Link}
      color="inherit"
      underline="none"
      sx={[
        (theme) => ({
          verticalAlign: "middle",
          [`& .${iconifyClasses.root}`]: {
            verticalAlign: "inherit",
            transform: "translateY(-2px)",
            ml: {
              xs: "-14px",
              md: "-18px",
            },
            transition: theme.transitions.create(["opacity"], {
              duration: theme.transitions.duration.shorter,
              easing: theme.transitions.easing.sharp,
            }),
          },
          "&:hover": {
            [`& .${iconifyClasses.root}`]: {
              opacity: 0.48,
            },
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Iconify width={18} icon="eva:arrow-ios-back-fill" />
      {label}
    </MuiLink>
  );
}
