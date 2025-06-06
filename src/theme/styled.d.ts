import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      turquoise: string;
      gold: string;
      black: string;
      white: string;
      gray: string;
    };
  }
}
