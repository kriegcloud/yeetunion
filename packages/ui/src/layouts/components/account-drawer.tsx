"use client";

import type { IconButtonProps } from "@mui/material/IconButton";

import { varAlpha } from "@ye/utils/colors";
import { useBoolean } from "@ye/utils/hooks";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import RouterLink from "next/link";
import { usePathname } from "next/navigation";

import { AnimateBorder, Iconify, Label, Scrollbar } from "../../components";

import { AccountButton } from "./account-button";
import { SignOutButton } from "./sign-out-button";

// ----------------------------------------------------------------------

export type AccountDrawerProps = IconButtonProps & {
  data?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
    info?: React.ReactNode;
  }[];
};

export function AccountDrawer({ data = [], sx, ...other }: AccountDrawerProps) {
  const pathname = usePathname();

  // const { user } = useMockedUser();

  const { value: open, onFalse: onClose, onTrue: onOpen } = useBoolean();

  const renderAvatar = () => (
    <AnimateBorder
      sx={{ mb: 2, p: "6px", width: 96, height: 96, borderRadius: "50%" }}
      slotProps={{
        primaryBorder: { size: 120, sx: { color: "primary.main" } },
      }}
    >
      <Avatar src={"TODO"} alt={"TODO"} sx={{ width: 1, height: 1 }}>
        {"TODO"?.charAt(0).toUpperCase()}
      </Avatar>
    </AnimateBorder>
  );

  const renderList = () => (
    <MenuList
      disablePadding
      sx={[
        (theme) => ({
          py: 3,
          px: 2.5,
          borderTop: `dashed 1px ${theme.vars.palette.divider}`,
          borderBottom: `dashed 1px ${theme.vars.palette.divider}`,
          "& li": { p: 0 },
        }),
      ]}
    >
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
                p: 1,
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
  );

  return (
    <>
      <AccountButton
        onClick={onOpen}
        photoURL={"TODO"}
        displayName={"TODO"}
        sx={sx}
        {...other}
      />

      <Drawer
        open={open}
        onClose={onClose}
        anchor="right"
        slotProps={{ backdrop: { invisible: true } }}
        PaperProps={{ sx: { width: 320 } }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            top: 12,
            left: 12,
            zIndex: 9,
            position: "absolute",
          }}
        >
          <Iconify icon="mingcute:close-line" />
        </IconButton>

        <Scrollbar>
          <Box
            sx={{
              pt: 8,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {renderAvatar()}

            <Typography variant="subtitle1" noWrap sx={{ mt: 2 }}>
              TODO
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "text.secondary", mt: 0.5 }}
              noWrap
            >
              TODO EMAIL
            </Typography>
          </Box>

          <Box
            sx={{
              p: 3,
              gap: 1,
              flexWrap: "wrap",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/*{Array.from({ length: 3 }, (_, index) => (*/}
            {/*  <Tooltip*/}
            {/*    key={_mock.fullName(index + 1)}*/}
            {/*    title={`Switch to: ${_mock.fullName(index + 1)}`}*/}
            {/*  >*/}
            {/*    <Avatar*/}
            {/*      alt={_mock.fullName(index + 1)}*/}
            {/*      src={_mock.image.avatar(index + 1)}*/}
            {/*      onClick={() => {}}*/}
            {/*    />*/}
            {/*  </Tooltip>*/}
            {/*))}*/}

            <Tooltip title="Add account">
              <IconButton
                sx={[
                  (theme) => ({
                    bgcolor: varAlpha(
                      theme.vars.palette.grey["500Channel"],
                      0.08,
                    ),
                    border: `dashed 1px ${varAlpha(theme.vars.palette.grey["500Channel"], 0.32)}`,
                  }),
                ]}
              >
                <Iconify icon="mingcute:add-line" />
              </IconButton>
            </Tooltip>
          </Box>

          {renderList()}

        </Scrollbar>

        <Box sx={{ p: 2.5 }}>
          <SignOutButton />
        </Box>
      </Drawer>
    </>
  );
}
