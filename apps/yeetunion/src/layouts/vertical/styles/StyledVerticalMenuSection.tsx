import styled from "@emotion/styled";
import type { CSSObject } from "@emotion/styled";
import type { ReactNode } from "react";
import type { MenuSectionProps } from "../menu";

import { menuClasses } from "@/layouts/menuClasses";

type StyledVerticalMenuSectionProps = Omit<
  MenuSectionProps,
  "rootStyles" | "children" | "label"
> & {
  menuSectionStyles?: CSSObject | undefined;
  children: ReactNode;
  rootStyles?: CSSObject | undefined;
  label?: ReactNode;
};

export const StyledVerticalMenuSection = styled.li<StyledVerticalMenuSectionProps>`
  display: flex;
  inline-size: 100%;
  position: relative;
  overflow: hidden;
  margin-block-start: 15px;

  & .${menuClasses.menuSectionContent} {
    font-size: 14px;
    color: #aaaaaa;
  }

  ${({ menuSectionStyles }) => menuSectionStyles};
  ${({ rootStyles }) => rootStyles};
`;
