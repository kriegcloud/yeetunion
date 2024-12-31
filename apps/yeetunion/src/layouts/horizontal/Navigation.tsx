import styled from "@emotion/styled";
import classnames from "classnames";

import HorizontalMenu from "./HorizontalMenu";

import {themeConfig} from "@ye/theme/themeConfig";

import { useSettings } from "@ye/theme/ThemeSettingsProvider";
import { useHorizontalNav } from "@/layouts/horizontal/Provider";

import { horizontalLayoutClasses } from "@/layouts/layoutClasses";

type StyledDivProps = {
  isContentCompact: boolean;
  isBreakpointReached?: boolean;
};

const StyledDiv = styled.div<StyledDivProps>`
  ${({ isContentCompact, isBreakpointReached }) =>
    !isBreakpointReached &&
    `
    padding: ${themeConfig.layoutPadding}px;

    ${
      isContentCompact &&
      `
      margin-inline: auto;
      max-inline-size: ${themeConfig.compactContentWidth}px;
    `
    }
  `}
`;

const Navigation = () => {
  const { settings } = useSettings();
  const { isBreakpointReached } = useHorizontalNav();

  const headerContentCompact = settings.navbarContentWidth === "compact";

  return (
    <div
      {...(!isBreakpointReached && {
        className: classnames(
          horizontalLayoutClasses.navigation,
          "relative flex border-bs",
        ),
      })}
    >
      <StyledDiv
        isContentCompact={headerContentCompact}
        isBreakpointReached={isBreakpointReached}
        {...(!isBreakpointReached && {
          className: classnames(
            horizontalLayoutClasses.navigationContentWrapper,
            "flex items-center is-full plb-2.5",
          ),
        })}
      >
        <HorizontalMenu />
      </StyledDiv>
    </div>
  );
};

export default Navigation;
