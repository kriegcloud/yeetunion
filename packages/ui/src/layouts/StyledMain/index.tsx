import styled from "@emotion/styled";

import { themeConfig } from "@ye/theme/themeConfig";

import { commonLayoutClasses } from "@/layouts/layoutClasses";

type StyledMainProps = {
  isContentCompact: boolean;
};

export const StyledMain = styled.main<StyledMainProps>`
  padding: ${themeConfig.layoutPadding}px;
  ${({ isContentCompact }) =>
  isContentCompact &&
  `
    margin-inline: auto;
    max-inline-size: ${themeConfig.compactContentWidth}px;
  `}

  &:has(.${commonLayoutClasses.contentHeightFixed}) {
    display: flex;
    overflow: hidden;
  }
`;

