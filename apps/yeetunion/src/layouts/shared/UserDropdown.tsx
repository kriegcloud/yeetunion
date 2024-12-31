"use client";

// import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import type { MouseEvent } from "react";

import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";

import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";

import { useSettings } from "@ye/theme/ThemeSettingsProvider";

// Styled component for badge content
const BadgeContentSpan = styled("span")({
  width: 8,
  height: 8,
  borderRadius: "50%",
  cursor: "pointer",
  backgroundColor: "var(--mui-palette-success-main)",
  boxShadow: "0 0 0 2px var(--mui-palette-background-paper)",
});

const UserDropdown = () => {
  const [open, setOpen] = useState(false);
  // const { data: session } = useSession();
  const anchorRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const { settings } = useSettings();

  const handleDropdownOpen = () => {
    !open ? setOpen(true) : setOpen(false);
  };

  const handleDropdownClose = (
    event?: MouseEvent<HTMLLIElement> | (MouseEvent | TouchEvent),
    url?: string,
  ) => {
    if (url) {
      router.push(url);
    }

    if (anchorRef.current?.contains(event?.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  // const handleUserLogout = async () => {
  //   void signOut();
  // };

  return (
    <>
      <Badge
        ref={anchorRef}
        overlap="circular"
        badgeContent={<BadgeContentSpan onClick={handleDropdownOpen} />}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        className="mis-2"
      >
        <Avatar
          ref={anchorRef}
          data-testid="user-avatar"
          alt="User Image"
          onClick={handleDropdownOpen}
          className="cursor-pointer bs-[38px] is-[38px]"
        >
          <p> todo </p>
        </Avatar>
      </Badge>
      <Popper
        open={open}
        transition
        disablePortal
        placement="bottom-end"
        anchorEl={anchorRef.current}
        className="min-is-[240px] !mbs-4 z-[1]"
      >
        {({ TransitionProps, placement }) => (
          <Fade
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-end" ? "right top" : "left top",
            }}
          >
            <Paper
              className={
                settings.skin === "bordered"
                  ? "border shadow-none"
                  : "shadow-lg"
              }
            >
              <ClickAwayListener
                onClickAway={(e) =>
                  handleDropdownClose(e as MouseEvent | TouchEvent)
                }
              >
                <MenuList>
                  <div
                    className="flex items-center plb-2 pli-4 gap-2"
                    tabIndex={-1}
                  >
                    <Avatar
                      data-testid="user-avatar"
                      alt="User Image"
                      onClick={handleDropdownOpen}
                      sx={{ width: 40, height: 40 }}
                    >
                      <p>todo</p>
                      {/*{session?.user?.firstName?.charAt(0)}*/}
                      {/*{session?.user?.lastName?.charAt(0)}*/}
                    </Avatar>
                    <div className="flex items-start flex-col">
                      <Typography className="font-medium" color="text.primary">
                        {/*{session?.user.name}*/}
                        todo
                      </Typography>
                      <Typography variant="caption">todo</Typography>
                    </div>
                  </div>
                  <Divider className="mlb-1" />
                  <div className="flex items-center plb-2 pli-4">
                    <Button
                      fullWidth
                      variant="contained"
                      color="error"
                      size="small"
                      endIcon={<i className="ri-logout-box-r-line" />}
                      // onClick={handleUserLogout}
                      sx={{
                        "& .MuiButton-endIcon": { marginInlineStart: 1.5 },
                      }}
                    >
                      Logout
                    </Button>
                  </div>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default UserDropdown;
