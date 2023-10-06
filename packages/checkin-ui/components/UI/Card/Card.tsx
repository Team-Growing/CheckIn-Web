import { CardContainer, CardTitleBox } from "./style";
import { CardProps, CardTitlProps } from "./types";

export const Card = ({ children, type, customStyle }: CardProps) => {
  return (
    <CardContainer customStyle={customStyle} type={type}>
      {children}
    </CardContainer>
  );
};

export const CardTitle = ({ children, customStyle }: CardTitlProps) => {
  return <CardTitleBox customStyle={customStyle}>{children}</CardTitleBox>;
};
