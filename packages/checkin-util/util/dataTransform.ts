import { LectureTagType, LecturePlaceType } from "@checkin/types";

class dataTransForm {
  public LectureTypeColor(type: LectureTagType | string) {
    switch (type) {
      case "SPORTS":
        return "#0073C9";
      case "INSTRUMENT":
        return "#F7D356";
      case "AUTONOMY":
        return "#DE4B41";
      case "NARSHA":
        return "#209915";
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

  public schoolInfoTransform<T, T2, T3>(
    gradeNum: T,
    classNum: T2,
    studentNum: T3
  ): string {
    return `${gradeNum}학년 ${classNum}반 ${studentNum}번`;
  }
}

export default new dataTransForm();
