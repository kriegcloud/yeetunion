// Type Imports
import type { HorizontalMenuDataType } from "@/layouts/types";
import type { getDictionary } from "@/utils/getDictionary";

const horizontalMenuData = (
  dictionary: Awaited<ReturnType<typeof getDictionary>>,
): HorizontalMenuDataType[] => [
  // This is how you will normally render submenu
  {
    label: dictionary["navigation"].dashboards,
    icon: "ri-home-smile-line",
    children: [
      // This is how you will normally render menu item
      {
        label: dictionary["navigation"].crm,
        icon: "ri-pie-chart-2-line",
        href: "/dashboards",
      }
    ],
  },
];

export default horizontalMenuData;
