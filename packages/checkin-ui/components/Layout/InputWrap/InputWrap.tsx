import { Input, InputInfo, InputIntroText } from "../../UI/Input/Input";
import { InputWrapContainer } from "./style";
import { InputWrapProps } from "./types";

export const InputWrap = ({
  customStyle,
  require,
  info,
  intro,
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
      <Input customStyle={customStyle} {...attr} />
      {intro && <InputIntroText>{intro}</InputIntroText>}
    </InputWrapContainer>
  );
};
