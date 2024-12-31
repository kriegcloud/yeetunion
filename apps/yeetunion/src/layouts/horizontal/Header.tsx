"use client";

import { StyledHorizontalHeader} from "./StyledHorizontalHeader";
import {Navbar} from "./Navbar";
import NavbarContent from "./NavbarContent";

import Navigation from "./Navigation";


import { useHorizontalNav} from "@/layouts/horizontal/Provider";

const Header = () => {
  const { isBreakpointReached } = useHorizontalNav();

  return (
    <>
      <StyledHorizontalHeader>
        <Navbar>
          <NavbarContent />
        </Navbar>
        {!isBreakpointReached && <Navigation />}
      </StyledHorizontalHeader>
      {isBreakpointReached && <Navigation />}
    </>
  );
};

export default Header;
