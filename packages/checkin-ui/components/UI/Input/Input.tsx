import { InputContainer, InputInfoText, InputIntroTextStyle } from "./style";
import { InputInfoProps, InputProps } from "./types";

export const Input = ({ customStyle, ...attr }: InputProps) => {
  return <InputContainer customStyle={customStyle} {...attr} />;
};

export const InputInfo = ({ children }: InputInfoProps) => {
  return <InputInfoText>{children}</InputInfoText>;
};

export const InputIntroText = ({ children }: InputInfoProps) => {
  return <InputIntroTextStyle>{children}</InputIntroTextStyle>;
};

export const DateInput = () => {
  return <Input type="date" />;
};
