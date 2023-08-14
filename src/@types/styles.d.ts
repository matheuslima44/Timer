import "styled-components";
import { defaulTheme } from "../styles/themes/default";

type ThemeType = typeof defaulTheme;

declare module "styled-components" {
  export interface defaulTheme extends ThemeType {}
}
