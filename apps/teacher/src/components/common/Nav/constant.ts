import { MypageIcon, NoticeIcon, SchoolIcon } from "@checkin/icon";

export const NAV_ITEM = [
  {
    title: "방과후 출석확인",
    path: "/register",
    icon: SchoolIcon,
  },
  {
    title: "출석코드 생성",
    path: "/suggestion",
    icon: NoticeIcon,
  },
  {
    title: "수업시수 관리",
    path: "/myinfo",
    icon: MypageIcon,
  },
];
