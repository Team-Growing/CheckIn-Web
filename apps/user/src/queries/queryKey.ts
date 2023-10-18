export const QueryKey = {
  member: {
    getMy: "member/getMyMember",
  },
  lecture: {
    getToday: "lectures/todayLectures",
    getMy: "lectures/myLectures",
    getEnrolmentLectures: (grade: number) => [
      "lectures/getEnrolmentLectures",
      grade,
    ],
  },
  attendance: {
    getAttendacneList: (lectureId: number) => [
      "lecture/lectureAttendance",
      lectureId,
    ],
  },
  notice: {
    getActive: "notice/activeNotice",
  },
};
