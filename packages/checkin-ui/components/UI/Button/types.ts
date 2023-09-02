import { CSSObject } from "styled-components";

export interface ButtonProps {
  type: ButtonType;
  style?: CSSObject;
  onClick?: () => void;
  children: string;
}

export type ButtonType = "primary" | "secondary" | "outline" | "text";
