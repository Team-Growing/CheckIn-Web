import { Response } from "../util/response";

export interface MemberType extends Response {
  data: {
    id: string;
    email: string;
    name: string;
    memberRole: string;
    studentInfo: {
      grade: number;
      room: number;
      number: number;
    };
  };
}

export interface TeachersResponse extends Response {
  data: [
    {
      id: string;
      name: string;
    }
  ];
}
