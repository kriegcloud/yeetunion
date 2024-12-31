import type { ReactNode } from "react";

import classnames from "classnames";

import { HorizontalNavProvider } from "./Provider";

import LayoutContent from "./LayoutContent";

import { horizontalLayoutClasses } from "@/layouts/layoutClasses";

import { StyledContentWrapper } from "./styles";

type HorizontalLayoutProps = {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
};

export const HorizontalLayout = (props: HorizontalLayoutProps) => {
  const { header, footer, children } = props;

  return (
    <div className={classnames(horizontalLayoutClasses.root, "flex flex-auto")}>
      <HorizontalNavProvider>
        <StyledContentWrapper
          className={classnames(
            horizontalLayoutClasses.contentWrapper,
            "flex flex-col is-full",
          )}
        >
          {header || null}
          <LayoutContent>{children}</LayoutContent>
          {footer || null}
        </StyledContentWrapper>
      </HorizontalNavProvider>
    </div>
  );
};
