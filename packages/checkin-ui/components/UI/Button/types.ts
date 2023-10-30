import { ReactNode } from "react";
import { CSSObject } from "styled-components";

export interface ButtonProps {
  type: ButtonType;
  customStyle?: CSSObject;
  onClick?: () => void;
  children: string;
  isSelect?: boolean;
  value?: string;
}

export type ButtonType =
  | "primary"
  | "secondary"
  | "outline"
  | "text"
  | "unSelect";

export interface ButtonWrapperProps {
  children: ReactNode;
}
