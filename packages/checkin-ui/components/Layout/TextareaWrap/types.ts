import { TextareaHTMLAttributes } from "react";
import { CSSObject } from "styled-components";

export interface TextareaWrapProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  customStyle?: CSSObject;
  require: Boolean;
  info?: string;
  intro?: string;
}
