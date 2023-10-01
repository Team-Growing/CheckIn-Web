import { TextareaWrapWrapContainer } from "./style";
import { TextareaWrapProps } from "./types";
import { InputInfo, InputIntroText, Textarea } from "@checkin/ui";

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
