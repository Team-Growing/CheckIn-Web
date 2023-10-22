import "styled-components";

declare module "styled-components" {
  export interface CheckInThemeType {
    TextLighter: string;
    TextLight: string;
    TextBase: string;
    TextDark: string;
    TextDarker: string;
    TextDarkest: string;

    MainBase: string;
    MainDark: string;

    BackgroundLightest: string;
    BackgroundLightbase: string;
    BackgroundLightdark: string;
    BackgroundDarkLighter: string;
    BackgroundDarkLight: string;
    BackgroundDarkbase: string;

    CategoryBlue: string;
    CategoryYello: string;
    CategoryGreen: string;
    CategoryRed: string;
  }
}
