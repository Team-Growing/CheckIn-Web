import { TitleText } from "@checkin/ui";
import * as S from "./style";
import { DeleteIcon } from "@checkin/icon";

const NoticeList = () => {
  return (
    <S.NoticeListContainer>
      <TitleText>NoticeList</TitleText>
      {Array.from({ length: 10 }).map(() => (
        <S.NoticeWrap key={`gd`}>
          <S.NoticeText>오늘은 방과후 없다 쉬라</S.NoticeText>
          <DeleteIcon />
        </S.NoticeWrap>
      ))}
    </S.NoticeListContainer>
  );
};

export default NoticeList;
