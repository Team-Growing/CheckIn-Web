import { NextPage } from "next";
import { ErrorProps } from "next/error";
import NextErrorComponent from "next/error";
import { captureUnderscoreErrorException } from "@sentry/nextjs";

const CustomErrorComponent: NextPage<ErrorProps> = (props) => {
  return <NextErrorComponent statusCode={props.statusCode} />;
};

CustomErrorComponent.getInitialProps = async (contextData) => {
  await captureUnderscoreErrorException(contextData);

  return NextErrorComponent.getInitialProps(contextData);
};

export default CustomErrorComponent;
