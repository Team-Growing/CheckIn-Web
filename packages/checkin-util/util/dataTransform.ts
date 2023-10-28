import {
  LectureTagType,
  LecturePlaceType,
  DayOfWeekType,
} from "@checkin/types";

class dataTransForm {
  public LectureTypeColor(type: LectureTagType | string) {
    switch (type) {
      case "SPORTS":
        return { background: "#0073C9", color: "#FFF" };
      case "INSTRUMENT":
        return { background: "#F7D356", color: "#000" };
      case "AUTONOMY":
        return { background: "#DE4B41", color: "#fff" };
      case "NARSHA":
        return { background: "#209915", color: "#fff" };
    }
  }

  public LectureTagTransform(lectureTag: string) {
    switch (lectureTag) {
      case "SPORTS":
        return "스포츠";
      case "INSTRUMENT":
        return "악기";
      case "AUTONOMY":
        return "자율";
      case "NARSHA":
        return "나르샤";
    }
  }

  public LecturePlaceTypeName(placeType: LecturePlaceType | string) {
    switch (placeType) {
      case "PLAYGROUND":
        return "운동장";
      case "GYM":
        return "강당";
      case "BASKETBALL_COURT":
        return "농구장";
      case "TENNIS_COURT":
        return "테니스 장";
    }
  }

  public TransformDayOfWeek(dayOfWeek: DayOfWeekType | string) {
    switch (dayOfWeek) {
      case "MONDAY":
        return "월요일";
      case "TUESDAY":
        return "화요일";
      case "WEDNESDAY":
        return "수요일";
      case "THURSDAY":
        return "목요일";
    }
  }

  public schoolInfoTransform<T, T2, T3>(
    gradeNum: T,
    classNum: T2,
    studentNum: T3
  ): string {
    return `${gradeNum}학년 ${classNum}반 ${studentNum}번`;
  }
}

export default new dataTransForm();
