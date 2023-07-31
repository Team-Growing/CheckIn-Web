import React from "react";
import { CardContainer } from "./style";
import { CardProps } from "./types";

export const Card = ({ children, type }: CardProps) => {
  return <CardContainer type={type}>{children}</CardContainer>;
};
