import type { IconButtonProps } from "@mui/material/IconButton";

import { usePopover } from "@ye/utils/hooks";
import {useSession} from "@ye/auth/client";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

import RouterLink from "next/link";
import { usePathname } from "next/navigation";

import { Label, Popover } from "#components";

import { AccountButton } from "./account-button";
import { SignOutButton } from "./sign-out-button";
import React from "react";
import Avatar from "@mui/material/Avatar";

// ----------------------------------------------------------------------

export type AccountPopoverProps = IconButtonProps & {
  data?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
    info?: React.ReactNode;
  }[];
  handleSignOut: () => Promise<void>;
};

export function AccountPopover({
  data = [],
  sx,
  handleSignOut,
  ...other
}: AccountPopoverProps) {
  const pathname = usePathname();
  const { data: currentUser } = useSession();
  const { open, anchorEl, onClose, onOpen } = usePopover();

  const renderMenuActions = () => (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      slotProps={{ paper: { sx: { p: 0, width: 200 } }, arrow: { offset: 20 } }}
    >
      <Box sx={{ p: 2, pb: 1.5 }}>
        <Avatar sx={{
          width: 48,
          height: 48,
          bgcolor: "primary.main",
          color: "primary.contrastText",
          fontSize: 24,
        }} src={currentUser?.user.image || ""} alt={currentUser?.user.name}/>
      </Box>

      <Divider sx={{ borderStyle: "dashed" }} />

      <MenuList sx={{ p: 1, my: 1, "& li": { p: 0 } }}>
        {data.map((option) => {
          const rootLabel = pathname.includes("/dashboard")
            ? "Home"
            : "Dashboard";
          const rootHref = pathname.includes("/dashboard") ? "/" : "/dashboard";

          return (
            <MenuItem key={option.label}>
              <Link
                component={RouterLink}
                href={option.label === "Home" ? rootHref : option.href}
                color="inherit"
                underline="none"
                onClick={onClose}
                sx={{
                  px: 1,
                  py: 0.75,
                  width: 1,
                  display: "flex",
                  typography: "body2",
                  alignItems: "center",
                  color: "text.secondary",
                  "& svg": { width: 24, height: 24 },
                  "&:hover": { color: "text.primary" },
                }}
              >
                {option.icon}

                <Box component="span" sx={{ ml: 2 }}>
                  {option.label === "Home" ? rootLabel : option.label}
                </Box>

                {option.info && (
                  <Label color="error" sx={{ ml: 1 }}>
                    {option.info}
                  </Label>
                )}
              </Link>
            </MenuItem>
          );
        })}
      </MenuList>

      <Divider sx={{ borderStyle: "dashed" }} />

      <Box sx={{ p: 1 }}>
        <SignOutButton onClick={handleSignOut} />
      </Box>
    </Popover>
  );

  return (
    <>
      <AccountButton
        onClick={onOpen}
        photoURL={"todo"}
        displayName={"TODO USERNAME"}
        sx={sx}
        {...other}
      />

      {renderMenuActions()}
    </>
  );
}
