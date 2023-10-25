/**
 * 버블링을 멈추는 함수
 * @param event
 */
export const stopBubbling = (event: React.ChangeEvent<any>) => {
  event.stopPropagation();
};
