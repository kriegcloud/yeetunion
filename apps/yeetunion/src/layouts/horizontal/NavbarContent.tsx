"use client";

import classnames from "classnames";

// import Logo from "@components/layout/shared/Logo";
import ModeDropdown from "@/layouts/shared/ModeDropdown";
import UserDropdown from "@/layouts/shared/UserDropdown";

import NavToggle from "./NavToggle";

// import { useHorizontalNav } from "@/layouts/horizontal/Provider";

import { horizontalLayoutClasses } from "@/layouts/layoutClasses";

const NavbarContent = () => {
  // const { isBreakpointReached } = useHorizontalNav();

  return (
    <div
      className={classnames(
        horizontalLayoutClasses.navbarContent,
        "flex items-center justify-between gap-4 is-full",
      )}
    >
      <div className="flex items-center gap-4">
        <NavToggle />
        {/* Hide Logo on Smaller screens */}
        {/*{!isBreakpointReached && <Logo />}*/}
      </div>
      <div className="flex items-center">
        <ModeDropdown />
        <UserDropdown />
      </div>
    </div>
  );
};

export default NavbarContent;
