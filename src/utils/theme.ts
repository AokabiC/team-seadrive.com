import Color from "color";

const whiteColor = Color("#ffffff");
const blackColor = Color("#1a202c");
const accentColor = Color("#5e5ad4");
const cautionColor = Color("#e53e3e");

export const theme = {
  mediaQuery: {
    md: `@media (min-width: ${860}px)`,
    lg: `@media (min-width: ${1600}px)`,
  },
  color: {
    background: whiteColor.hex(),
    surfacePrimary: whiteColor.hex(),
    surfaceSecondary: blackColor.fade(1 - 0.05).string(),
    surfaceTertiary: blackColor.fade(1 - 0.1).string(),
    surfaceQuaternary: blackColor.fade(1 - 0.2).string(),
    surfaceAccent: accentColor.hex(),
    surfaceCaution: cautionColor.hex(),
    surfaceCautionLight: cautionColor.fade(1 - 0.05).string(),

    textHighEmphasis: blackColor.hex(),
    textMediumEmphasis: blackColor.fade(1 - 0.7).string(),
    textLowEmphasis: blackColor.fade(1 - 0.6).string(),
    textDisabled: blackColor.fade(1 - 0.3).string(),
    textHighEmphasisInverse: whiteColor.hex(),
    textAccent: accentColor.mix(blackColor, 0.1).hex(),
    textCaution: cautionColor.mix(blackColor, 0.1).hex(),

    borderHighEmphasis: blackColor.fade(1 - 0.6).string(),
    borderMediumEmphasis: blackColor.fade(1 - 0.3).string(),
    borderLowEmphasis: blackColor.fade(1 - 0.1).string(),
    borderHighEmphasisInverse: whiteColor.hex(),
    borderAccent: accentColor.hex(),
    borderCaution: cautionColor.hex(),

    thirdPartyTwitter: "#1da1f2",
  },
  boxShadow: {
    md: `0px 6px 10px 0px ${blackColor.alpha(0.1).string()}`,
  },
  space: {
    xs: "0.5em",
    sm: "1em",
    md: "2em",
  },
  layout: {
    md: "120px",
    lg: "160px",
    contentMaxWidth: "900px",
    contentMinWidth: "600px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    full: "100000px",
  },
  borderWidth: {
    md: 1,
  },
  fontFamily: {
    body: ["Noto Sans JP", "sans-serif"]
      .map((e) => `'${e.replace("'", "\\'")}'`)
      .join(","),
  },
  fontSize: {
    body: "1rem",
    nav: "1.2rem",
  },
  lineHeight: {
    body: 1.5,
  },
};
