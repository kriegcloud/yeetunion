import type { Theme } from "@mui/material/styles";

import styled from "@emotion/styled";
import type { CSSObject } from "@emotion/styled";

import {themeConfig} from "@ye/theme/themeConfig";

import { verticalLayoutClasses } from "@/layouts/layoutClasses";

type StyledFooterProps = {
  theme: Theme;
  overrideStyles: CSSObject | undefined;
};

export const StyledFooter = styled.footer<StyledFooterProps>`
  &.${verticalLayoutClasses.footerContentCompact} {
    &.${verticalLayoutClasses.footerDetached} {
      margin-inline: auto;
      max-inline-size: ${themeConfig.compactContentWidth}px;
    }

    &.${verticalLayoutClasses.footerAttached} .${verticalLayoutClasses.footerContentWrapper} {
      margin-inline: auto;
      max-inline-size: ${themeConfig.compactContentWidth}px;
    }
  }

  &.${verticalLayoutClasses.footerFixed} {
    position: sticky;
    inset-block-end: 0;
    z-index: var(--footer-z-index);

    &.${verticalLayoutClasses.footerAttached},
      &.${verticalLayoutClasses.footerDetached}
      .${verticalLayoutClasses.footerContentWrapper} {
      background-color: var(--mui-palette-background-paper);
    }

    &.${verticalLayoutClasses.footerDetached} {
      pointer-events: none;
      padding-inline: ${themeConfig.layoutPadding}px;

      & .${verticalLayoutClasses.footerContentWrapper} {
        pointer-events: auto;
        box-shadow: 0 -4px 8px -4px rgb(var(--mui-mainColorChannels-shadow) / 0.42);
        border-start-start-radius: var(--border-radius);
        border-start-end-radius: var(--border-radius);

        [data-skin='bordered'] & {
          box-shadow: none;
          border-inline: 1px solid var(--border-color);
          border-block-start: 1px solid var(--border-color);
        }
      }
    }

    &.${verticalLayoutClasses.footerAttached} {
      box-shadow: 0 -4px 8px -4px rgb(var(--mui-mainColorChannels-shadow) / 0.42);

      [data-skin='bordered'] & {
        box-shadow: none;
        border-block-start: 1px solid var(--border-color);
      }
    }
  }

  & .${verticalLayoutClasses.footerContentWrapper} {
    padding-block: 15px;
    padding-inline: ${themeConfig.layoutPadding}px;
  }

  ${({ overrideStyles }) => overrideStyles}
`;
