import type { ReactNode } from "react";

import classnames from "classnames";

import { LayoutContent } from "@/layouts/vertical/LayoutContent";

import { verticalLayoutClasses } from "@/layouts/layoutClasses";

import { StyledContentWrapper } from "@/layouts/vertical/styles/StyledContentWrapper";

type VerticalLayoutProps = {
  navigation?: ReactNode;
  navbar?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
};

const VerticalLayout = (props: VerticalLayoutProps) => {
  const { navbar, footer, navigation, children } = props;

  return (
    <div className={classnames(verticalLayoutClasses.root, "flex flex-auto")}>
      {navigation || null}
      <StyledContentWrapper
        className={classnames(
          verticalLayoutClasses.contentWrapper,
          "flex flex-col min-is-0 is-full",
        )}
      >
        {navbar || null}
        {/* Content */}
        <LayoutContent>{children}</LayoutContent>
        {footer || null}
      </StyledContentWrapper>
    </div>
  );
};

export default VerticalLayout;
