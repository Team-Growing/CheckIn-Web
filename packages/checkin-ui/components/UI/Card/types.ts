import { ReactNode } from "react";
import { CSSObject } from "styled-components";

export interface CardProps {
  children: ReactNode;
  type: CardType;
  customStyle?: CSSObject;
}

export type CardType = "Class" | "Notifiction" | "Calendar" | "Applyout";

export interface CardTitlProps {
  children: ReactNode;
}
