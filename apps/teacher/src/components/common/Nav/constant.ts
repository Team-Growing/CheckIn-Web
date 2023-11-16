import { MypageIcon, SchoolIcon } from "@checkin/icon";

export const NAV_ITEM = [
  {
    title: "방과후 출석확인",
    path: (id: number) => `/attend/${id}`,
    icon: SchoolIcon,
  },
  {
    title: "마이페이지",
    path: (id: null | undefined) => "/myinfo",
    icon: MypageIcon,
  },
];
