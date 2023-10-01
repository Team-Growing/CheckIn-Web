import { InputHTMLAttributes } from "react";
import { CSSObject } from "styled-components";
import { CommonWrapProps } from "../types";

export interface InputWrapProps extends InputHTMLAttributes<HTMLInputElement> {
  customStyle?: CSSObject;
  require: Boolean;
  info?: string;
  intro?: string;
  placeholder?: string;
}

export interface AuthInputWrapProps
  extends CommonWrapProps,
    InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}
