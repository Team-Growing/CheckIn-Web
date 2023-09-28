import { InputHTMLAttributes } from "react";
import { CSSObject } from "styled-components";

export interface InputWrapProps extends InputHTMLAttributes<HTMLInputElement> {
  customStyle?: CSSObject;
  require: Boolean;
  info?: string;
  intro?: string;
}
