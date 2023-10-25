import { MouseEventHandler } from "react";

/**
 * isOpened: 모달을 열 것 인지 확인하는 변수
 * onClose: 클릭시 모달 화면을 닫는 함수
 */
export interface ModalProps {
  isOpened: boolean;
  onClose: MouseEventHandler<any>;
}
