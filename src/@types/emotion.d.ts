import "@emotion/react";
import { theme } from "utils/theme";

type ImportedTheme = typeof theme;

declare module "@emotion/react" {
  export interface Theme extends ImportedTheme {}
}
