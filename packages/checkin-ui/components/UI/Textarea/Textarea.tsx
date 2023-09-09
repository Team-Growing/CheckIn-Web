import React from "react";
import { TextareaStyle } from "./style";
import { TextareaProps } from "./type";

export const Textarea = ({ customStyle, ...attr }: TextareaProps) => {
  return <TextareaStyle customStyle={customStyle} {...attr} />;
};
