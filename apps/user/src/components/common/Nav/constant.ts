import { MypageIcon, NoticeIcon, SchoolIcon } from "@checkin/icon";

export const NAV_ITEM = [
  {
    title: "방과후 수강신청",
    pathname: "/register/[grade]",
    path: "/register/1",
    icon: SchoolIcon,
  },
  {
    title: "수업 제안,건의",
    pathname: "/suggestion",
    path: "/suggestion",
    icon: NoticeIcon,
  },
  {
    title: "마이페이지",
    pathname: "/myinfo",
    path: "/myinfo",
    icon: MypageIcon,
  },
];
