import { ReactNode } from "react";
import { CSSObject } from "styled-components";

export interface CardProps {
  children: ReactNode;
  type: CardType;
  customStyle?: CSSObject;
}

export type CardType = "Lecture" | "Notifiction" | "Enrol" | "Applyout";

export interface CardTitlProps {
  customStyle?: CSSObject;
  children: ReactNode;
}

export interface LecturePrpos {}
