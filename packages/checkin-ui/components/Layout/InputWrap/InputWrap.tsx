import React from "react";
import { InputWrapContainer } from "./style";
import { InputWrapProps } from "./types";

export const InputWrap = ({ children }: InputWrapProps) => {
  return <InputWrapContainer>{children}</InputWrapContainer>;
};
