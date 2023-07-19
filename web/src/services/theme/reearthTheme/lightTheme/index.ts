import commonTheme from "../common";
import commonColors from "../common/colors";
import type { Theme } from "../types";

import colors from "./colors";

const lightTheme: Theme = {
  ...commonTheme,
  general: {
    select: colors.functional.select,
    bg: {
      transparent: commonColors.general.transparentBlack,
      veryWeak: colors.bg[5],
      weak: colors.bg[4],
      main: colors.bg[3],
      strong: colors.bg[2],
      veryStrong: colors.bg[1],
    },
    border: colors.bg[5],
    button: {
      primary: {
        main: "",
        hover: "",
        disable: "",
        content: "",
        contentHover: "",
        contentDisable: "",
      },
      secondary: {
        main: "",
        hover: "",
        disable: "",
        content: "",
        contentHover: "",
        contentDisable: "",
      },
      danger: {
        main: "",
        hover: "",
        disable: "",
        content: "",
        contentHover: "",
        contentDisable: "",
      },
    },
    content: {
      weak: colors.text.weak,
      main: colors.text.main,
      strong: colors.text.strong,
    },
  },
  dashboard: {
    workspace: {},
    quickStart: {},
    projectList: {},
  },
  editor: {
    bg0: "",
    bg1: "",
    weakText: "",
    weakOutline: "",
    mainText: "",
    weakerText: "",
    mainSelect: "",
    secondaryNavbar: {},
    infobox: {},
    widgetAlignSystem: {
      vertical: {
        bg: commonColors.brand.blue.strongest50,
        border: commonColors.brand.blue.strongest,
      },
      horizontal: {
        bg: commonColors.brand.orange.main50,
        border: commonColors.brand.orange.main,
      },
    },
    slider: {
      bg: colors.bg[3],
      border: colors.outline.weak,
      main: colors.primary.main,
    },
  },
  settings: {},
  notifications: {
    bg: {
      success: "",
      info: "",
      warning: "",
      error: "",
    },
    content: "",
  },
  navbar: {
    bg: {
      main: "",
      hover: "",
    },
    avatarBg: "",
    tabButton: {
      selectedBg: "",
      selectedContent: "",
    },
  },
};

export default lightTheme;
