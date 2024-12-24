import styled from "@emotion/styled";

import type { HorizontalNavProps } from "../menu";

export const StyledHorizontalNav = styled.div<
  Pick<HorizontalNavProps, "customStyles">
>`
  inline-size: 100%;
  overflow: hidden;
  position: relative;
  ${({ customStyles }) => customStyles}
`;
