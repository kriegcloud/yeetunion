"use client";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Switch from "@mui/material/Switch";
import { useTheme } from "@mui/material/styles";
import type { Breakpoint } from "@mui/material/styles";
import type { Direction, Settings } from "@ye/theme";
import { useSettings } from "@ye/theme/ThemeSettingsProvider";
import { PrimaryColorConfig, primaryColorConfig } from "@ye/theme/colorConfig";
import ContentCompact from "@ye/ui/svg/ContentCompact";
import ContentWide from "@ye/ui/svg/ContentWide";
import DirectionLtr from "@ye/ui/svg/DirectionLtr";
import DirectionRtl from "@ye/ui/svg/DirectionRtl";
import LayoutCollapsed from "@ye/ui/svg/LayoutCollapsed";
import LayoutHorizontal from "@ye/ui/svg/LayoutHorizontal";
import LayoutVertical from "@ye/ui/svg/LayoutVertical";
import SkinBordered from "@ye/ui/svg/SkinBordered";
import SkinDefault from "@ye/ui/svg/SkinDefault";
import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useDebounce, useMedia } from "react-use";
import styles from "./Customizer.module.css";

type CustomizerProps = {
  breakpoint?:
    | Breakpoint
    | "xxl"
    | `${number}px`
    | `${number}rem`
    | `${number}em`;
  dir?: Direction;
  disableDirection?: boolean;
};

const getLocalePath = (pathName: string, locale: string) => {
  if (!pathName) return "/";
  const segments = pathName.split("/");

  segments[1] = locale;

  return segments.join("/");
};

type DebouncedColorPickerProps = {
  settings: Settings;
  isColorFromPrimaryConfig: PrimaryColorConfig | undefined;
  handleChange: (
    field: keyof Settings | "primaryColor",
    value: Settings[keyof Settings] | string,
  ) => void;
};

const DebouncedColorPicker = (props: DebouncedColorPickerProps) => {
  const { settings, isColorFromPrimaryConfig, handleChange } = props;

  const [debouncedColor, setDebouncedColor] = useState(
    settings.primaryColor ?? primaryColorConfig[0].main,
  );

  useDebounce(() => handleChange("primaryColor", debouncedColor), 200, [
    debouncedColor,
  ]);

  return (
    <>
      <HexColorPicker
        color={
          !isColorFromPrimaryConfig
            ? (settings.primaryColor ?? primaryColorConfig[0].main)
            : "#eee"
        }
        onChange={setDebouncedColor}
      />
      <HexColorInput
        className={styles["colorInput"]}
        color={
          !isColorFromPrimaryConfig
            ? (settings.primaryColor ?? primaryColorConfig[0].main)
            : "#eee"
        }
        onChange={setDebouncedColor}
        prefixed
        placeholder="Type a color"
      />
    </>
  );
};

const Customizer = ({
  breakpoint = "lg",
  dir = "ltr",
  disableDirection = false,
}: CustomizerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [direction, setDirection] = useState(dir);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const anchorRef = useRef<HTMLDivElement | null>(null);

  const theme = useTheme();
  const pathName = usePathname();
  const isSystemDark = useMedia("(prefers-color-scheme: dark)", false);
  const { settings, updateSettings, resetSettings, isSettingsChanged } =
    useSettings();
  let breakpointValue: CustomizerProps["breakpoint"];

  switch (breakpoint) {
    case "xxl":
      breakpointValue = "1920px";
      break;
    case "xl":
      breakpointValue = `${theme.breakpoints.values.xl}px`;
      break;
    case "lg":
      breakpointValue = `${theme.breakpoints.values.lg}px`;
      break;
    case "md":
      breakpointValue = `${theme.breakpoints.values.md}px`;
      break;
    case "sm":
      breakpointValue = `${theme.breakpoints.values.sm}px`;
      break;
    case "xs":
      breakpointValue = `${theme.breakpoints.values.xs}px`;
      break;
    default:
      breakpointValue = breakpoint;
  }

  const breakpointReached = useMedia(`(max-width: ${breakpointValue})`, false);
  const isBelowLgScreen = useMedia("(max-width: 1200px)", false);
  const isMobileScreen = useMedia("(max-width: 600px)", false);
  const isColorFromPrimaryConfig = primaryColorConfig.find(
    (item) => item.main === settings.primaryColor,
  );

  const ScrollWrapper = isBelowLgScreen ? "div" : PerfectScrollbar;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Update Settings
  const handleChange = (
    field: keyof Settings | "direction",
    value: Settings[keyof Settings] | Direction,
  ) => {
    // Update direction state
    if (field === "direction") {
      setDirection(value as Direction);
    } else {
      // Update settings in cookie
      updateSettings({ [field]: value });
    }
  };

  const handleMenuClose = (event: MouseEvent | TouchEvent): void => {
    if (anchorRef.current?.contains(event.target as HTMLElement)) {
      return;
    }

    setIsMenuOpen(false);
  };

  return (
    !breakpointReached && (
      <Box
        className={classnames("customizer", styles["customizer"], {
          [styles["show"] as string]: isOpen,
          [styles["smallScreen"] as string]: isMobileScreen,
        })}
      >
        <Box className={styles["toggler"]} onClick={handleToggle}>
          <i className="ri-settings-5-line text-[22px]" />
        </Box>
        <div className={styles["header"]}>
          <div className="flex flex-col">
            <h6 className={styles["customizerTitle"]}>Theme Customizer</h6>
            <p className={styles["customizerSubtitle"]}>
              Customize & Preview in Real Time
            </p>
          </div>
          <div className="flex gap-4">
            <Box
              onClick={resetSettings}
              className="relative flex cursor-pointer"
            >
              <i className="ri-refresh-line text-actionActive" />
              <div
                className={classnames(styles["dotStyles"], {
                  show: isSettingsChanged,
                })}
              />
            </Box>
            <Box
              component={"i"}
              className="ri-close-line text-actionActive cursor-pointer"
              onClick={handleToggle}
            />
          </div>
        </div>
        <ScrollWrapper
          {...(isBelowLgScreen
            ? { className: "bs-full overflow-y-auto overflow-x-hidden" }
            : { options: { wheelPropagation: false, suppressScrollX: true } })}
        >
          <div className={styles["customizerBody"]}>
            <div className="flex flex-col gap-6">
              <Chip
                label="Theming"
                size="small"
                color="primary"
                variant="tonal"
                className="self-start rounded-sm"
              />
              <div className="flex flex-col gap-2.5">
                <p className="font-medium">Primary Color</p>
                <div className="flex items-center justify-between">
                  {primaryColorConfig.map((item) => (
                    <Box
                      key={item.main}
                      className={classnames(styles["primaryColorWrapper"], {
                        [styles["active"] as string]:
                          settings.primaryColor === item.main,
                      })}
                      onClick={() => handleChange("primaryColor", item.main)}
                    >
                      <div
                        className={styles["primaryColor"]}
                        style={{ backgroundColor: item.main }}
                      />
                    </Box>
                  ))}
                  <Box
                    ref={anchorRef}
                    className={classnames(styles["primaryColorWrapper"], {
                      [styles["active"] as string]: !isColorFromPrimaryConfig,
                    })}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                  >
                    <div
                      className={classnames(
                        styles["primaryColor"],
                        "flex items-center justify-center",
                      )}
                      style={{
                        backgroundColor: !isColorFromPrimaryConfig
                          ? settings.primaryColor
                          : "var(--mui-palette-action-selected)",
                        color: isColorFromPrimaryConfig
                          ? "var(--mui-palette-text-primary)"
                          : "var(--mui-palette-primary-contrastText)",
                      }}
                    >
                      <i className="ri-palette-line text-xl" />
                    </div>
                  </Box>
                  <Popper
                    transition
                    open={isMenuOpen}
                    disablePortal
                    anchorEl={anchorRef.current}
                    placement="bottom-end"
                    className="z-[1]"
                  >
                    {({ TransitionProps }) => (
                      <Fade
                        {...TransitionProps}
                        style={{ transformOrigin: "right top" }}
                      >
                        <Paper elevation={6} className={styles["colorPopup"]}>
                          <ClickAwayListener onClickAway={handleMenuClose}>
                            <div>
                              <DebouncedColorPicker
                                settings={settings}
                                isColorFromPrimaryConfig={
                                  isColorFromPrimaryConfig
                                }
                                handleChange={handleChange}
                              />
                            </div>
                          </ClickAwayListener>
                        </Paper>
                      </Fade>
                    )}
                  </Popper>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <p className="font-medium">Mode</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-start gap-0.5">
                    <Box
                      className={classnames(
                        styles["itemWrapper"],
                        styles["modeWrapper"],
                        {
                          [styles["active"] as string]:
                            settings.mode === "light",
                        },
                      )}
                      onClick={() => handleChange("mode", "light")}
                    >
                      <i className="ri-sun-line text-[30px]" />
                    </Box>
                    <Box
                      component={"p"}
                      className={styles["itemLabel"]}
                      onClick={() => handleChange("mode", "light")}
                    >
                      Light
                    </Box>
                  </div>
                  <div className="flex flex-col items-start gap-0.5">
                    <Box
                      className={classnames(
                        styles["itemWrapper"],
                        styles["modeWrapper"],
                        {
                          [styles["active"] as string]:
                            settings.mode === "dark",
                        },
                      )}
                      onClick={() => handleChange("mode", "dark")}
                    >
                      <i className="ri-moon-clear-line text-[30px]" />
                    </Box>
                    <Box
                      component={"p"}
                      className={styles["itemLabel"]}
                      onClick={() => handleChange("mode", "dark")}
                    >
                      Dark
                    </Box>
                  </div>
                  <div className="flex flex-col items-start gap-0.5">
                    <Box
                      className={classnames(
                        styles["itemWrapper"],
                        styles["modeWrapper"],
                        {
                          [styles["active"] as string]:
                            settings.mode === "system",
                        },
                      )}
                      onClick={() => handleChange("mode", "system")}
                    >
                      <i className="ri-computer-line text-[30px]" />
                    </Box>
                    <Box
                      component={"p"}
                      className={styles["itemLabel"]}
                      onClick={() => handleChange("mode", "system")}
                    >
                      System
                    </Box>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <p className="font-medium">Skin</p>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-start gap-0.5">
                    <Box
                      className={classnames(styles["itemWrapper"], {
                        [styles["active"] as string]:
                          settings.skin === "default",
                      })}
                      onClick={() => handleChange("skin", "default")}
                    >
                      <SkinDefault />
                    </Box>
                    <Box
                      component={"p"}
                      className={styles["itemLabel"]}
                      onClick={() => handleChange("skin", "default")}
                    >
                      Default
                    </Box>
                  </div>
                  <div className="flex flex-col items-start gap-0.5">
                    <Box
                      className={classnames(styles["itemWrapper"], {
                        [styles["active"] as string]:
                          settings.skin === "bordered",
                      })}
                      onClick={() => handleChange("skin", "bordered")}
                    >
                      <SkinBordered />
                    </Box>
                    <Box
                      component={"p"}
                      className={styles["itemLabel"]}
                      onClick={() => handleChange("skin", "bordered")}
                    >
                      Bordered
                    </Box>
                  </div>
                </div>
              </div>
              {settings.mode === "dark" ||
              (settings.mode === "system" && isSystemDark) ||
              settings.layout === "horizontal" ? null : (
                <div className="flex items-center justify-between">
                  <label
                    className="font-medium cursor-pointer"
                    htmlFor="customizer-semi-dark"
                  >
                    Semi Dark
                  </label>
                  <Switch
                    id="customizer-semi-dark"
                    checked={settings.semiDark === true}
                    onChange={() =>
                      handleChange("semiDark", !settings.semiDark)
                    }
                  />
                </div>
              )}
            </div>
            <hr className={styles["hr"]} />
            <div className="flex flex-col gap-6">
              <Chip
                label="Layout"
                size="small"
                color="primary"
                variant="tonal"
                className="self-start rounded-sm"
              />
              <div className="flex flex-col gap-2.5">
                <p className="font-medium">Layouts</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-start gap-0.5">
                    <Box
                      className={classnames(styles["itemWrapper"], {
                        [styles["active"] as string]:
                          settings.layout === "vertical",
                      })}
                      onClick={() => handleChange("layout", "vertical")}
                    >
                      <LayoutVertical />
                    </Box>
                    <Box
                      component={"p"}
                      className={styles["itemLabel"]}
                      onClick={() => handleChange("layout", "vertical")}
                    >
                      Vertical
                    </Box>
                  </div>
                  <div className="flex flex-col items-start gap-0.5">
                    <Box
                      className={classnames(styles["itemWrapper"], {
                        [styles["active"] as string]:
                          settings.layout === "collapsed",
                      })}
                      onClick={() => handleChange("layout", "collapsed")}
                    >
                      <LayoutCollapsed />
                    </Box>
                    <Box
                      component={"p"}
                      className={styles["itemLabel"]}
                      onClick={() => handleChange("layout", "collapsed")}
                    >
                      Collapsed
                    </Box>
                  </div>
                  <div className="flex flex-col items-start gap-0.5">
                    <Box
                      className={classnames(styles["itemWrapper"], {
                        [styles["active"] as string]:
                          settings.layout === "horizontal",
                      })}
                      onClick={() => handleChange("layout", "horizontal")}
                    >
                      <LayoutHorizontal />
                    </Box>
                    <Box
                      component={"p"}
                      className={styles["itemLabel"]}
                      onClick={() => handleChange("layout", "horizontal")}
                    >
                      Horizontal
                    </Box>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <p className="font-medium">Content</p>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-start gap-0.5">
                    <Box
                      className={classnames(styles["itemWrapper"], {
                        [styles["active"] as string]:
                          settings.contentWidth === "compact",
                      })}
                      onClick={() =>
                        updateSettings({
                          navbarContentWidth: "compact",
                          contentWidth: "compact",
                          footerContentWidth: "compact",
                        })
                      }
                    >
                      <ContentCompact />
                    </Box>
                    <Box
                      component={"p"}
                      className={styles["itemLabel"]}
                      onClick={() =>
                        updateSettings({
                          navbarContentWidth: "compact",
                          contentWidth: "compact",
                          footerContentWidth: "compact",
                        })
                      }
                    >
                      Compact
                    </Box>
                  </div>
                  <div className="flex flex-col items-start gap-0.5">
                    <Box
                      className={classnames(styles["itemWrapper"], {
                        [styles["active"] as string]:
                          settings.contentWidth === "wide",
                      })}
                      onClick={() =>
                        updateSettings({
                          navbarContentWidth: "wide",
                          contentWidth: "wide",
                          footerContentWidth: "wide",
                        })
                      }
                    >
                      <ContentWide />
                    </Box>
                    <Box
                      component={"p"}
                      className={styles["itemLabel"]}
                      onClick={() =>
                        updateSettings({
                          navbarContentWidth: "wide",
                          contentWidth: "wide",
                          footerContentWidth: "wide",
                        })
                      }
                    >
                      Wide
                    </Box>
                  </div>
                </div>
              </div>
              {!disableDirection && (
                <div className="flex flex-col gap-2.5">
                  <p className="font-medium">Direction</p>
                  <div className="flex items-center gap-4">
                    <Link href={getLocalePath(pathName, "en")}>
                      <div className="flex flex-col items-start gap-0.5">
                        <div
                          className={classnames(styles["itemWrapper"], {
                            [styles["active"] as string]: direction === "ltr",
                          })}
                        >
                          <DirectionLtr />
                        </div>
                        <p className={styles["itemLabel"]}>
                          Left to Right <br />
                          (English)
                        </p>
                      </div>
                    </Link>
                    <Link href={getLocalePath(pathName, "ar")}>
                      <div className="flex flex-col items-start gap-0.5">
                        <div
                          className={classnames(styles["itemWrapper"], {
                            [styles["active"] as string]: direction === "rtl",
                          })}
                        >
                          <DirectionRtl />
                        </div>
                        <p className={styles["itemLabel"]}>
                          Right to Left <br />
                          (Arabic)
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </ScrollWrapper>
      </Box>
    )
  );
};

export default Customizer;
