import styled, {
  CSSObject,
  FlattenSimpleInterpolation,
  css,
} from "styled-components";
import { CardType } from "./types";

export const CardContainer = styled.div<{
  type: CardType;
  customStyle?: CSSObject;
}>`
  display: flex;
  flex-direction: column;

  ${({ type }) => cardSize[type]}
  ${({ customStyle }) => customStyle}
  border-radius: 5px;
  border: 1px solid #cdd0dc;
  background: #fff;
`;

const cardSize: Record<CardType, FlattenSimpleInterpolation> = {
  Lecture: css`
    width: 92.5%;
    height: 32.8vh;

    padding: 26px 0 0 25px;
  `,
  Notifiction: css`
    width: 92.5%;
    height: 6vh;

    display: flex;
    justify-content: center;

    padding-left: 29px;
  `,
  Applyout: css`
    width: 34.4%;
    height: 52.1vh;

    padding: 25px 36px 0px 36px;
    overflow: auto;
  `,
  Enrol: css`
    width: 56.5%;
    height: 52.1vh;

    padding: 21px 62px 55px 32px;
  `,
};

export const CardTitleBox = styled.div`
  width: 300px;
  height: 36px;

  display: flex;
  align-items: center;

  column-gap: 7px;

  font-size: 18px;
`;
