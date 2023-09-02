import React from "react";
import { ItemBox, ItemContainer } from "./style";

const Item = () => {
  return (
    <ItemContainer>
      {Array.from({ length: 8 }).map(() => {
        return (
          <>
            <ItemBox>하이</ItemBox>
          </>
        );
      })}
    </ItemContainer>
  );
};

export default Item;
