import React, { Dispatch, SetStateAction } from "react";
import { CSSObject } from "styled-components";

export interface SelectProps {
  items: string[];
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  zIndex?: number;
  customStyle?: CSSObject;
}
