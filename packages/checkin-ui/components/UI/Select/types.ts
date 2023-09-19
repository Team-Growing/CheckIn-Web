import React, { Dispatch, SetStateAction } from "react";
import { CSSObject } from "styled-components";

export interface SelectProps {
  items: string[];
  value: string;
  onChange: (value: string, name: string) => void;
  zIndex?: number;
  customStyle?: CSSObject;
  name: string;
}
