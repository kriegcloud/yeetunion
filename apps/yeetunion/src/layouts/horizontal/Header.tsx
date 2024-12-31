"use client";

import { StyledHorizontalHeader} from "./StyledHorizontalHeader";
import {Navbar} from "./Navbar";
import NavbarContent from "./NavbarContent";

import Navigation from "./Navigation";
import type { getDictionary } from '@/utils/getDictionary'

import { useHorizontalNav} from "@/layouts/horizontal/Provider";

const Header = ({ dictionary }: { dictionary: Awaited<ReturnType<typeof getDictionary>> }) => {
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
