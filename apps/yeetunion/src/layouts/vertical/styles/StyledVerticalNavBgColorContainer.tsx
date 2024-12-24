import styled from "@emotion/styled";

import type { VerticalNavProps } from "../menu";

type StyledVerticalNavBgColorContainerProps = Pick<
  VerticalNavProps,
  "backgroundColor"
>;

export const StyledVerticalNavBgColorContainer = styled.div<StyledVerticalNavBgColorContainerProps>`
  position: relative;
  block-size: 100%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  ${({ backgroundColor }) => backgroundColor && `background-color:${backgroundColor};`}
`;
