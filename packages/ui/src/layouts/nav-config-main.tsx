import { Iconify } from "../components";

import type { NavMainProps } from "./main/nav/types";

export const navData: NavMainProps["data"] = [
  {
    title: "Home",
    path: "/",
    icon: <Iconify width={22} icon="solar:home-2-bold-duotone" />,
  },
];
