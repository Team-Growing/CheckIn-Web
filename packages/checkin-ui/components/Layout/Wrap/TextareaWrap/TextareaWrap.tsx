import { InputInfo, InputIntroText } from "../../../UI/Input/Input";
import { Textarea } from "../../../UI/Textarea/Textarea";
import { TextareaWrapWrapContainer } from "./style";
import { TextareaWrapProps } from "./types";

export const TextareaWrap = ({
  customStyle,
  require,
  info,
  intro,
  placeholder,
  ...attr
}: TextareaWrapProps) => {
  return (
    <TextareaWrapWrapContainer>
      {require
        ? info && (
            <InputInfo>
              {info} <span>*</span>
            </InputInfo>
          )
        : info && <InputInfo>{info}</InputInfo>}
      <Textarea placeholder={placeholder} customStyle={customStyle} {...attr} />
      {intro && <InputIntroText>{intro}</InputIntroText>}
    </TextareaWrapWrapContainer>
  );
};
