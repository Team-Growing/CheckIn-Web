import AttendanceRepositoryImpl from "@/repositories/AttendanceRepository/AttendanceRepositoryImpl";
import { useQuery, useMutation } from "react-query";
import { CheckInQueryKey } from "@checkin/querykey";
import { CheckinToast } from "@checkin/toast";

export const useGetCodeQuery = (lectureId: number) =>
  useQuery(
    CheckInQueryKey.attendance.getAttendanceCode(lectureId),
    () => AttendanceRepositoryImpl.getAttendanceCode(lectureId),
    {
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
      onError: (data: any) => {
        if (data.response.data.status === 403) {
          CheckinToast.showError("지금은 코드 발급 기간이 아닙니다");
        }
      },
    }
  );

export const useGetAttendantsQuery = (lectureId: number) =>
  useQuery(
    CheckInQueryKey.attendance.getAttendacneList(lectureId),
    () => AttendanceRepositoryImpl.getAttendants(lectureId),
    {
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
    }
  );
export const useChangeCodeMutation = () => {
  const mutation = useMutation(AttendanceRepositoryImpl.getChangeCode);

  return mutation;
};

// export const useGetAttendanceMutation = () => {
//   const mutation = useMutation(AttendanceRepositoryImpl.getAttendanceCode);

//   return mutation;
// };

export const usePostConfirmAttendanceMutation = () => {
  const mutation = useMutation(AttendanceRepositoryImpl.postConfirmAttendance);
  return mutation;
};

export const useDeleteCancelAttendanceMutation = () => {
  const mutation = useMutation(
    AttendanceRepositoryImpl.deleteCancelAttdendance
  );
  return mutation;
};

export const useAttendanceMutation = () => {
  const mutation = useMutation(AttendanceRepositoryImpl.getAttendance);

  return mutation;
};
