import { ReactNode } from "react";
import { CSSObject } from "styled-components";

export interface CardProps {
  children: ReactNode;
  type: CardType;
  customStyle?: CSSObject;
}

export type CardType = "Lecture" | "Notifiction" | "Calendar" | "Applyout";

export interface CardTitlProps {
  children: ReactNode;
}

export interface LecturePrpos {}
