import * as S from "./style";
import { SelectWrapProps } from "./types";
import { InputInfo, InputIntroText, Select } from "@checkin/ui";
export const SelectWrap = ({
  items,
  name,
  onChange,
  require,
  value,
  customStyle,
  info,
  intro,
  zIndex,
}: SelectWrapProps) => {
  return (
    <S.SelectWrapContainer>
      {require
        ? info && (
            <InputInfo>
              {info} <span>*</span>
            </InputInfo>
          )
        : info && <InputInfo>{info}</InputInfo>}
      <Select
        items={items}
        name={name}
        onChange={onChange}
        value={value}
        customStyle={customStyle}
        zIndex={zIndex}
      />
      {intro && <InputIntroText>{intro}</InputIntroText>}
    </S.SelectWrapContainer>
  );
};
