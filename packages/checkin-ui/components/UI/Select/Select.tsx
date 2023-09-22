import { useState } from "react";
import {
  SelectContainer,
  SelectIcon,
  SelectItem,
  SelectItemWrap,
  SelectText,
} from "./style";
import { IoIosArrowDown } from "react-icons/io";
import { SelectProps } from "./types";
import { useBooleanState, useOutsideClick } from "@checkin/uitl";

export const Select = ({
  items,
  value,
  zIndex,
  onChange,
  customStyle,
  name,
}: SelectProps) => {
  const [close, setClose] = useState<boolean>(true);
  const {
    value: isOpen,
    setFalse: isClose,
    toggle: handleToggleButtonClick,
  } = useBooleanState();

  const dropdownRef = useOutsideClick(isClose);

  const handleDropdownItemButtonClick = (data: string) => {
    onChange(name, data);
    setClose(true);
  };

  return (
    <div ref={dropdownRef}>
      <SelectContainer
        customStyle={customStyle}
        close={isOpen}
        onClick={handleToggleButtonClick}
      >
        <SelectText>{value}</SelectText>
        <SelectIcon close={!isOpen}>
          <IoIosArrowDown />
        </SelectIcon>
        {isOpen && (
          <SelectItemWrap style={{ zIndex }}>
            {items.map((item, idx) => (
              <SelectItem
                key={idx}
                onClick={() => handleDropdownItemButtonClick(item)}
              >
                {item}
              </SelectItem>
            ))}
          </SelectItemWrap>
        )}
      </SelectContainer>
    </div>
  );
};
