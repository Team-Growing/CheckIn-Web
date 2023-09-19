import { MypageIcon, NoticeIcon, SchoolIcon } from "@checkin/icon";

export const NAV_ITEM = [
  {
    title: "방과후 출석확인",
    path: "/checkAttendance",
    icon: SchoolIcon,
  },
  {
    title: "수업, 공지 생성",
    path: "/createLecture",
    icon: NoticeIcon,
  },
  {
    title: "문의, 제안 확인",
    path: "/checkSuggestion",
    icon: MypageIcon,
  },
  {
    title: "방과후 학생 관리",
    path: "/manageStudent",
    icon: MypageIcon,
  },
];
