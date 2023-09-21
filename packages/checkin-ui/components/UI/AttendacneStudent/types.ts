import { ReactNode } from "react";

export interface AttendStudentProps {
  name: string;
  grade: string;
  room: string;
  number: string;
  children: ReactNode;
}
