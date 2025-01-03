// Type Imports
import type { VerticalMenuDataType } from "@/layouts/types";
import type { getDictionary } from "@/utils/getDictionary";

const verticalMenuData = (
  dictionary: Awaited<ReturnType<typeof getDictionary>>,
): VerticalMenuDataType[] => [
  // This is how you will normally render submenu
  {
    label: dictionary["navigation"].dashboards,
    icon: "ri-home-smile-line",
    suffix: {
      label: "5",
      color: "error",
    },
    children: [
      // This is how you will normally render menu item
      {
        label: dictionary["navigation"].crm,
        href: "/dashboard",
      },
    ],
  },
  {
    label: dictionary["navigation"].frontPages,
    icon: "ri-file-copy-line",
    children: [
      {
        label: dictionary["navigation"].landing,
        href: "/front-pages/landing-page",
        target: "_blank",
        excludeLang: true,
      },
      {
        label: dictionary["navigation"].pricing,
        href: "/front-pages/pricing",
        target: "_blank",
        excludeLang: true,
      },
      {
        label: dictionary["navigation"].payment,
        href: "/front-pages/payment",
        target: "_blank",
        excludeLang: true,
      },
      {
        label: dictionary["navigation"].checkout,
        href: "/front-pages/checkout",
        target: "_blank",
        excludeLang: true,
      },
      {
        label: dictionary["navigation"].helpCenter,
        href: "/front-pages/help-center",
        target: "_blank",
        excludeLang: true,
      },
    ],
  },
];

export default verticalMenuData;
