"use client";

import styled from "@emotion/styled";

import {
  commonLayoutClasses,
  horizontalLayoutClasses,
} from "@/layouts/layoutClasses";

export const StyledContentWrapper = styled.div`
  &:has(.${horizontalLayoutClasses.content}>.${commonLayoutClasses.contentHeightFixed}) {
    max-block-size: 100dvh;
  }
`;
