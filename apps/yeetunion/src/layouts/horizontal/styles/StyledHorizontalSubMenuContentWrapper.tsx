import styled from "@emotion/styled";

import type { RootStylesType } from "../../types";

export const StyledHorizontalSubMenuContentWrapper = styled.div<RootStylesType>`
  z-index: 10;

  ${({ rootStyles }) => rootStyles};
`;
