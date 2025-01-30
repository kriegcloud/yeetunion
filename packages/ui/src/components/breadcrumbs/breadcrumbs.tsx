import type { BreadcrumbsProps } from "@mui/material/Breadcrumbs";
import type { SxProps, Theme } from "@mui/material/styles";

import MuiBreadcrumbs from "@mui/material/Breadcrumbs";

import { BackLink } from "./back-link";
import { BreadcrumbsLink } from "./breadcrumb-link";
import { MoreLinks } from "./more-links";
import {
  BreadcrumbsContainer,
  BreadcrumbsContent,
  BreadcrumbsHeading,
  BreadcrumbsRoot,
  BreadcrumbsSeparator,
} from "./styles";

import type { ComponentProps, ReactNode } from "react";
import type { BreadcrumbsLinkProps } from "./breadcrumb-link";
import type { MoreLinksProps } from "./more-links";
// ----------------------------------------------------------------------

export type CustomBreadcrumbsSlotProps = {
  breadcrumbs: BreadcrumbsProps;
  moreLinks: Omit<MoreLinksProps, "links">;
  heading: ComponentProps<typeof BreadcrumbsHeading>;
  content: ComponentProps<typeof BreadcrumbsContent>;
  container: ComponentProps<typeof BreadcrumbsContainer>;
};

export type CustomBreadcrumbsSlots = {
  breadcrumbs?: ReactNode;
};

export type CustomBreadcrumbsProps = ComponentProps<"div"> & {
  sx?: SxProps<Theme>;
  heading?: string;
  activeLast?: boolean;
  backHref?: string;
  action?: ReactNode;
  links?: BreadcrumbsLinkProps[];
  moreLinks?: MoreLinksProps["links"];
  slots?: CustomBreadcrumbsSlots;
  slotProps?: Partial<CustomBreadcrumbsSlotProps>;
};

export function Breadcrumbs({
  sx,
  action,
  backHref,
  heading,
  slots = {},
  links = [],
  moreLinks = [],
  slotProps = {},
  activeLast = false,
  ...other
}: CustomBreadcrumbsProps) {
  const lastLink = links[links.length - 1]?.name;

  const renderHeading = () => (
    <BreadcrumbsHeading {...slotProps?.heading}>
      {backHref ? <BackLink href={backHref} label={heading} /> : heading}
    </BreadcrumbsHeading>
  );

  const renderLinks = () =>
    slots?.breadcrumbs ?? (
      <MuiBreadcrumbs
        separator={<BreadcrumbsSeparator />}
        {...slotProps?.breadcrumbs}
      >
        {links.map((link, index) => (
          <BreadcrumbsLink
            key={link.name ?? index}
            icon={link.icon}
            href={link.href}
            name={link.name}
            disabled={link.name === lastLink && !activeLast}
          />
        ))}
      </MuiBreadcrumbs>
    );

  const renderMoreLinks = () => (
    <MoreLinks links={moreLinks} {...slotProps?.moreLinks} />
  );

  return (
    <BreadcrumbsRoot sx={sx} {...other}>
      <BreadcrumbsContainer {...slotProps?.container}>
        <BreadcrumbsContent {...slotProps?.content}>
          {(heading || backHref) && renderHeading()}
          {(!!links.length || slots?.breadcrumbs) && renderLinks()}
        </BreadcrumbsContent>
        {action}
      </BreadcrumbsContainer>

      {!!moreLinks?.length && renderMoreLinks()}
    </BreadcrumbsRoot>
  );
}
