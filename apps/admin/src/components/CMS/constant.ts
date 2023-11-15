export const CmsStatusList = [
  {
    name: "신청 대기",
    status: "WAITING_PERIOD",
    color: "#F7D356",
    dataStatus: "waitingPeroid",
  },
  {
    name: "신청 중",
    status: "ENROLMENT",
    color: "#209915",
    dataStatus: "enrolment",
  },
  {
    name: "수강 중",
    status: "COURSE_PERIOD",
    color: "#0073C9",
    dataStatus: "COURSE_PERIOD",
  },
  {
    name: "종료",
    status: "TERMINATION",
    color: "#454749",
    dataStatus: "termination",
  },
];

export const CmsStatus = [
  "WAITING_PERIOD",
  "ENROLMENT",
  "COURSE_PERIOD",
  "TERMINATION",
];
