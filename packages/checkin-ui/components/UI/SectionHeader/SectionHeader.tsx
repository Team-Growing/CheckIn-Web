import React from "react";
import {
  SectionHeaderContainer,
  SectionHeaderImage,
  SectionHeaderSubTitle,
  SectionHeaderTitle,
} from "./style";
import CheckLogo from "../../../assets/Logo/CheckLogo.svg";
import { SectionHeaderProps } from "./types";

export const SectionHeader = ({ subTitle, title }: SectionHeaderProps) => {
  return (
    <SectionHeaderContainer>
      <SectionHeaderImage src={CheckLogo.src} alt="" width={56} height={56} />
      <SectionHeaderTitle>{title}</SectionHeaderTitle>
      <SectionHeaderSubTitle>{subTitle}</SectionHeaderSubTitle>
    </SectionHeaderContainer>
  );
};
