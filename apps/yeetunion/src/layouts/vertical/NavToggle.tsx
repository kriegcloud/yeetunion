"use client";

import { useVerticalNav } from "@/layouts/vertical/Provider";

const NavToggle = () => {
  const { toggleVerticalNav, isBreakpointReached } = useVerticalNav();

  const handleClick = () => {
    toggleVerticalNav();
  };

  return (
    <>
      {/* <i className='ri-menu-line cursor-pointer' onClick={handleClick} /> */}
      {/* Comment following code and uncomment above code in order to toggle menu on desktop screens as well */}
      {isBreakpointReached && (
        <i className="ri-menu-line cursor-pointer" onKeyDown={handleClick} />
      )}
    </>
  );
};

export default NavToggle;
