import { ButtonProps, ButtonWrapperProps } from "./types";
import { ButtonContainer, ButtonWrapperBox } from "./style";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ImPencil } from "react-icons/im";

export const Button = ({ type, onClick, style, children }: ButtonProps) => {
  return (
    <ButtonContainer customStyle={style} onClick={onClick} buttonType={type}>
      {children}
    </ButtonContainer>
  );
};

export const PrevButton = ({ type, onClick, style, children }: ButtonProps) => {
  return (
    <ButtonContainer customStyle={style} onClick={onClick} buttonType={type}>
      <FiChevronLeft />
      {children}
    </ButtonContainer>
  );
};

export const NextButton = ({ type, onClick, style, children }: ButtonProps) => {
  return (
    <ButtonContainer customStyle={style} onClick={onClick} buttonType={type}>
      {children}
      <FiChevronRight />
    </ButtonContainer>
  );
};

export const WriteButton = ({
  type,
  onClick,
  style,
  children,
}: ButtonProps) => {
  return (
    <ButtonContainer customStyle={style} onClick={onClick} buttonType={type}>
      <ImPencil />
      {children}
    </ButtonContainer>
  );
};

export const ButtonWrapper = ({ children }: ButtonWrapperProps) => {
  return <ButtonWrapperBox>{children}</ButtonWrapperBox>;
};
