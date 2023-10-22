import "styled-components";

declare module "styled-components" {
  export interface CheckInThemeType {
    Text: {
      Lighter: string;
      Light: string;
      Base: string;
      Dark: string;
      Darker: string;
      Darkest: string;
    };
    Main: {
      Base: string;
      Dark: string;
    };
    Background: {
      Lightest: string;
      Lightbase: string;
      Lightdark: string;
      DarkLighter: string;
      DarkLight: string;
      Darkbase: string;
    };
    Category: {
      Blue: string;
      Yello: string;
      Green: string;
      Red: string;
    };
  }
}
