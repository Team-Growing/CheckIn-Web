import { PropsWithChildren } from "react";
import { ModalProps } from "./types";
import { ModalBackground } from "./style";

const Modal = ({
  isOpened,
  onClose,
  children,
}: PropsWithChildren<ModalProps>) => {
  return (
    <>
      {isOpened && (
        <ModalBackground onClick={onClose}>{children}</ModalBackground>
      )}
    </>
  );
};

export default Modal;
