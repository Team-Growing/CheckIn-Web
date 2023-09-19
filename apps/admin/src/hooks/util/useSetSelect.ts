import React, { SetStateAction } from "react";

interface Props {
  name: string;
  value: string;
  setState: SetStateAction<string | string[]>;
}

const useSetSelect = ({ name, setState, value }: Props) => {
  return {};
};

export default useSetSelect;
