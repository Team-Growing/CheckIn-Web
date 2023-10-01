import {
  AuthInputStyle,
  InputContainer,
  InputInfoText,
  InputIntroTextStyle,
} from "./style";
import { AuthInputProps, InputInfoProps, InputProps } from "./types";

export const TextInput = ({ customStyle, ...attr }: InputProps) => {
  return <InputContainer customStyle={customStyle} {...attr} />;
};

export const InputInfo = ({ children }: InputInfoProps) => {
  return <InputInfoText>{children}</InputInfoText>;
};

export const InputIntroText = ({ children }: InputInfoProps) => {
  return <InputIntroTextStyle>{children}</InputIntroTextStyle>;
};

export const DateInput = () => {
  return <TextInput type="date" />;
};

export const AuthInput = ({ customStyle, ...attr }: AuthInputProps) => {
  return <AuthInputStyle customStyle={customStyle} {...attr} />;
};
