"use client";

import { Navbar } from "./Navbar";
import NavbarContent from "./NavbarContent";
import { StyledHorizontalHeader } from "./StyledHorizontalHeader";

import type { getDictionary } from "@/utils/getDictionary";
import Navigation from "./Navigation";

import { useHorizontalNav } from "@/layouts/horizontal/Provider";

const Header = ({
  dictionary,
}: { dictionary: Awaited<ReturnType<typeof getDictionary>> }) => {
  const { isBreakpointReached } = useHorizontalNav();

  return (
    <>
      <StyledHorizontalHeader>
        <Navbar>
          <NavbarContent />
        </Navbar>
        {!isBreakpointReached && <Navigation dictionary={dictionary} />}
      </StyledHorizontalHeader>
      {isBreakpointReached && <Navigation dictionary={dictionary} />}
    </>
  );
};

export default Header;
