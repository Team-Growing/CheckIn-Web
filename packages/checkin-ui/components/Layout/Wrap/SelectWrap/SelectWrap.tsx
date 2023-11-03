import { InputInfo, InputIntroText } from "../../../UI/Input/Input";
import { Select } from "../../../UI/Select/Select";
import * as S from "./style";
import { SelectWrapProps } from "./types";
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
  placeholder,
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
        placeholder={placeholder}
        customStyle={customStyle}
        zIndex={zIndex}
      />
      {intro && <InputIntroText>{intro}</InputIntroText>}
    </S.SelectWrapContainer>
  );
};
