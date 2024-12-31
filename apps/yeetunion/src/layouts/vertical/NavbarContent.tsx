"use client";
import ModeDropdown from "@/layouts/shared/ModeDropdown";
import UserDropdown from "@/layouts/shared/UserDropdown";
import { verticalLayoutClasses } from "@/layouts/layoutClasses";
import classnames from "classnames";
import NavToggle from "./NavToggle";

const NavbarContent = () => {
  return (
    <div
      className={classnames(
        verticalLayoutClasses.navbarContent,
        "flex items-center justify-between gap-4 is-full",
      )}
    >
      <div className="flex items-center gap-4">
        <NavToggle />
        <ModeDropdown />
      </div>
      <div className="flex items-center">
        <UserDropdown />
      </div>
    </div>
  );
};

export default NavbarContent;
