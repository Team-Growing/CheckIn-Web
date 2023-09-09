import { TextareaHTMLAttributes } from "react";
import { CSSObject } from "styled-components";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  customStyle?: CSSObject;
}
