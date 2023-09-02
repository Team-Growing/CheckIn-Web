import MypageIcon from "@/assets/Icon/MypageIcon";
import NoticeIcon from "@/assets/Icon/NoticeIcon";
import SchoolIcon from "@/assets/Icon/SchoolIcon";

export const NAV_ITEM = [
  {
    title: "방과후 수강신청",
    path: "/register",
    icon: SchoolIcon,
  },
  {
    title: "수업 제안,건의",
    path: "/suggestion",
    icon: NoticeIcon,
  },
  {
    title: "마이페이지",
    path: "/myinfo",
    icon: MypageIcon,
  },
];
