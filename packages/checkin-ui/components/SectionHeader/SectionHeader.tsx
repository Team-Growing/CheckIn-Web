import React from "react";
import {
  SectionHeaderContainer,
  SectionHeaderSubTitle,
  SectionHeaderTitle,
} from "./style";
import CheckLogo from "../../assets/Logo/CheckLogo.svg";
import { SectionHeaderProps } from "./types";

export const SectionHeader = ({ subTitle, title }: SectionHeaderProps) => {
  return (
    <SectionHeaderContainer>
      <img src={CheckLogo} alt="" width={56} height={56} />
      <SectionHeaderTitle>{title}</SectionHeaderTitle>
      <SectionHeaderSubTitle>{subTitle}</SectionHeaderSubTitle>
    </SectionHeaderContainer>
  );
};
