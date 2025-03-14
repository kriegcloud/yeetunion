import type { ButtonProps } from "@mui/material/Button";

import Button from "@mui/material/Button";

import RouterLink from "next/link";

// ----------------------------------------------------------------------

export function SignInButton({ sx, ...other }: ButtonProps) {
  return (
    <Button
      component={RouterLink}
      href={"/"}
      variant="outlined"
      sx={sx}
      {...other}
    >
      Sign in
    </Button>
  );
}
