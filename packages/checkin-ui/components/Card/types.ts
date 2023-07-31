import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  type: CardType;
}

export type CardType = "Club" | "Notifiction" | "Calendar" | "Applyout";
