import React from "react";
import { ToastContainer } from "react-toastify";
import { CheckinToastContainerProps } from "./checkinToastContainer.type";

export const CheckinToastContainer = ({
  ...toastContainerProps
}: CheckinToastContainerProps) => {
  return <ToastContainer {...toastContainerProps} />;
};
