"use client";

import { useCallback, useState } from "react";

export const useBooleanState = (initialValue?: boolean) => {
  const [value, setValue] = useState(!!initialValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((prev) => !prev), []);

  return { value, setValue, setTrue, setFalse, toggle };
};
