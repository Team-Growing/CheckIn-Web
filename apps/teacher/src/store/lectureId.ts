import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

export const lectureIdAtomState = atom<Number>({
  key: "lectureId",
  default: 0,
});

export const usePoseInfoAtomStateStore = () =>
  useRecoilState(lectureIdAtomState);
export const usePoseInfoAtomStateValueStore = () =>
  useRecoilValue(lectureIdAtomState);
export const useSetPoseInfoAtomStateStore = () =>
  useSetRecoilState(lectureIdAtomState);
