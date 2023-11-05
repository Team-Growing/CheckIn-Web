export const CheckInQueryKey = {
  notice: {
    getActive: "notice/activeNotice",
    getAll: "notice/allNotices",
  },
  absence: {
    getMy: "absence/myAbsence",
    getAll: "absence/getAbsences",
  },
  lecture: {
    getToday: "lectures/todayLectures",
    getMy: "lectures/myLectures",
    getEnrolmentLectures: (grade: number) => [
      "lectures/getEnrolmentLectures",
      grade,
    ],
    getById: (lectureId: number) => ["lecture/getLecture", lectureId],
    getAll: (grade: number) => ["lecture/getLectures", grade],
    getTodayMyLectures: "lectures/getMyTodayLectures",
  },
  question: {
    getQuestions: "questions/getQuestions",
    getQuestion: (questionId: number) => ["questions/getQuestions", questionId],
  },
  member: {
    getMy: "member/getMyMember",
    getTeacherList: "/member/getTeacherList",
    getMyLectures: "lectures/myLectures",
  },

  attendance: {
    getAttendanceCode: (lectureId: number) => [
      "attendance/getAttendanceCode",
      lectureId,
    ],
    getAttendacneList: (lectureId: number) => [
      "attendance/getAttendanceList",
      lectureId,
    ],
  },
  suggestion: {
    getSuggestions: "suggestion/getSuggestions",
    getSuggestion: (suggestionId: number) => [
      "suggestion/getSuggestion",
      suggestionId,
    ],
  },
};
