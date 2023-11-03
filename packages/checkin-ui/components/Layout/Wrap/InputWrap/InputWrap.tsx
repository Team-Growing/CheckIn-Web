import {
  AuthInput,
  DateInput,
  InputInfo,
  InputIntroText,
  TextInput,
} from "../../../UI/Input/Input";
import { InputWrapContainer } from "./style";
import { AuthInputWrapProps, InputWrapProps } from "./types";

export const TextInputWrap = ({
  customStyle,
  require,
  info,
  intro,
  placeholder,
  ...attr
}: InputWrapProps) => {
  return (
    <InputWrapContainer>
      {require
        ? info && (
            <InputInfo>
              {info} <span>*</span>
            </InputInfo>
          )
        : info && <InputInfo>{info}</InputInfo>}
      <TextInput
        placeholder={placeholder}
        customStyle={customStyle}
        {...attr}
      />
      {intro && <InputIntroText>{intro}</InputIntroText>}
    </InputWrapContainer>
  );
};

export const AuthInputWrap = ({
  require,
  introduction,
  inputTitle,
  customStyle,
  placeholder,
  ...attr
}: AuthInputWrapProps) => {
  return (
    <InputWrapContainer>
      {require ? (
        <InputInfo>
          {inputTitle} <span>*</span>
        </InputInfo>
      ) : (
        <InputInfo>{inputTitle}</InputInfo>
      )}
      <AuthInput
        placeholder={placeholder}
        customStyle={customStyle}
        {...attr}
      />
      {introduction && <InputIntroText>{introduction}</InputIntroText>}
    </InputWrapContainer>
  );
};

export const DateInputWrap = ({
  customStyle,
  require,
  info,
  intro,
  placeholder,
  ...attr
}: InputWrapProps) => {
  return (
    <InputWrapContainer>
      {require
        ? info && (
            <InputInfo>
              {info} <span>*</span>
            </InputInfo>
          )
        : info && <InputInfo>{info}</InputInfo>}
      <DateInput customStyle={customStyle} {...attr} />
      {intro && <InputIntroText>{intro}</InputIntroText>}
    </InputWrapContainer>
  );
};
