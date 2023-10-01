import { InputHTMLAttributes, ReactNode } from "react";
import { CSSObject } from "styled-components";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  customStyle?: CSSObject;
}

export interface InputInfoProps {
  children: string | ReactNode;
}

export interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  customStyle?: CSSObject;
}
