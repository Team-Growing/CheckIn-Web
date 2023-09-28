import { TextareaStyle } from "./style";
import { TextareaProps } from "./types";

export const Textarea = ({ customStyle, ...attr }: TextareaProps) => {
  return <TextareaStyle customStyle={customStyle} {...attr} />;
};
