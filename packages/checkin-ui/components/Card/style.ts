import styled, { FlattenSimpleInterpolation, css } from "styled-components";
import { CardType } from "./types";

export const CardContainer = styled.div<{ type: CardType }>`
  display: flex;
  flex-direction: column;

  ${({ type }) => cardSize[type]}

  border-radius: 5px;
  border: 1px solid #cdd0dc;
  background: #fff;
`;

const cardSize: Record<CardType, FlattenSimpleInterpolation> = {
  Club: css`
    width: 1400px;
    height: 328px;

    padding: 26px 0 0 25px;
  `,
  Notifiction: css`
    width: 1400px;
    height: 60px;

    padding: 16px 0 0 33px;
  `,
  Applyout: css`
    width: 530px;
    height: 521px;

    padding: 27px 0 0 36px;
  `,
  Calendar: css`
    width: 850px;
    height: 521px;

    padding: 24px 0 0 32px;
  `,
};
