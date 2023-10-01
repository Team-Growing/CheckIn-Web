import {
  MypageIcon,
  NoticeIcon,
  SchoolIcon,
  GenerateIcon,
  CheckSuggestionIcon,
} from "@checkin/icon";

export const NAV_ITEM = [
  {
    title: "방과후 출석확인",
    path: "/checkAttendance",
    icon: SchoolIcon,
  },
  {
    title: "수업, 공지 생성",
    path: "/createLecture",
    icon: GenerateIcon,
  },
  {
    title: "문의, 제안 확인",
    path: "/checkSuggestion",
    icon: CheckSuggestionIcon,
  },
  {
    title: "방과후 학생 관리",
    path: "/sms",
    icon: MypageIcon,
  },
];
