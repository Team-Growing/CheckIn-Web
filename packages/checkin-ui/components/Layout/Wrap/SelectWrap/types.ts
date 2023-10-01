import { CSSObject } from "styled-components";
import { SelectProps } from "../../../UI/Select/types";

export interface SelectWrapProps extends SelectProps {
  customStyle?: CSSObject;
  require: Boolean;
  info?: string;
  intro?: string;
}
