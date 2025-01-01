import type { ReactNode } from "react";

import classnames from "classnames";

import LayoutContent from "@/layouts/horizontal/LayoutContent";
import { HorizontalNavProvider } from "@/layouts/horizontal/Provider";

import { horizontalLayoutClasses } from "@/layouts/layoutClasses";

import { StyledContentWrapper } from "@/layouts/horizontal/styles/StyledContentWrapper";

type HorizontalLayoutProps = {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
};

const HorizontalLayout = (props: HorizontalLayoutProps) => {
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

export default HorizontalLayout;
