import {
  MypageIcon,
  SchoolIcon,
  GenerateIcon,
  CheckSuggestionIcon,
  AbsenceIcon,
} from "@checkin/icon";

export const NAV_ITEM = [
  {
    title: "방과후 출석확인",
    path: "/sms",
    pathname: "/sms",
    icon: SchoolIcon,
  },
  {
    title: "수업, 공지 생성",
    path: "/createLecture",
    pathname: "/createLecture",
    icon: GenerateIcon,
  },
  {
    title: "문의, 제안 확인",
    path: "/ask/confirm",
    pathname: "/ask/confirm",
    icon: CheckSuggestionIcon,
  },
  {
    title: "방과후 관리",
    path: "/cms/1",
    pathname: "/cms/[grade]",
    icon: MypageIcon,
  },

  {
    title: "결강자 관리",
    path: "/absence/list",
    pathname: "/absence/list",
    icon: AbsenceIcon,
  },
];
