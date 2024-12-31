import type { ReactNode } from "react";

import classnames from "classnames";

import { LayoutContent } from "./LayoutContent";

import { verticalLayoutClasses } from "@/layouts/layoutClasses";

import { StyledContentWrapper } from "./styles";

type VerticalLayoutProps = {
  children: ReactNode;
  navigation?: ReactNode;
  navbar?: ReactNode;
  footer?: ReactNode;
};

export const VerticalLayout = (props: VerticalLayoutProps) => {
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
