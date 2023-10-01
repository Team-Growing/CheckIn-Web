import { CSSObject } from "styled-components";

export interface CommonWrapProps {
  inputTitle: string;
  introduction?: string;
  require: boolean;
  customStyle?: CSSObject;
}
