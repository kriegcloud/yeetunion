
import { useHorizontalNav } from "@/layouts/horizontal/Provider";
import { useVerticalNav } from "@/layouts/vertical/Provider";

import Box from "@mui/material/Box";
const NavToggle = () => {
  const { toggleVerticalNav } = useVerticalNav();
  const { isBreakpointReached } = useHorizontalNav();

  // Toggle Vertical Nav
  const handleClick = () => {
    toggleVerticalNav();
  };

  return (
    <>
      {/* <i className='ri-menu-line' onClick={handleClick} /> */}
      {/* Comment following code and uncomment this code in order to toggle menu on desktop screens as well */}
      {isBreakpointReached && (
        <Box
          component={"i"}
          className="ri-menu-line cursor-pointer"
          onClick={handleClick}
        />
      )}
    </>
  );
};

export default NavToggle;
