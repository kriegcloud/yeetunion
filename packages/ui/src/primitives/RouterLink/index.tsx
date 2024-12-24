"use client";
import type { Ref, ReactNode } from "react";
import { forwardRef } from "react";

import Link from "next/link";
import type { LinkProps } from "next/link";

type RouterLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
};

export const RouterLink = forwardRef(
  (
    { href, className, children, ...other }: RouterLinkProps,
    ref: Ref<HTMLAnchorElement>,
  ) => (
    <Link ref={ref} href={href} className={className} {...other}>
      {children}
    </Link>
  ),
);
