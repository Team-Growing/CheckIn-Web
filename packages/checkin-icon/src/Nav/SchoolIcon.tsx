import React from "react";

interface SVGAttributeProps {
  isMatch?: boolean;
}

export const SchoolIcon = ({ isMatch }: SVGAttributeProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_709_726)">
        <path
          d="M12 7.2L18.4 10.4V23.2H5.6V10.4L12 7.2ZM12 7.2V0M0 23.2H24M2.4 23.2V13.6H5.6M21.6 23.2V13.6H18.4M10.4 23.2V18.4H13.6V23.2M12 0.8H16.8V4H12M12 15.2C11.5757 15.2 11.1687 15.0314 10.8686 14.7314C10.5686 14.4313 10.4 14.0243 10.4 13.6C10.4 13.1757 10.5686 12.7687 10.8686 12.4686C11.1687 12.1686 11.5757 12 12 12C12.4243 12 12.8313 12.1686 13.1314 12.4686C13.4314 12.7687 13.6 13.1757 13.6 13.6C13.6 14.0243 13.4314 14.4313 13.1314 14.7314C12.8313 15.0314 12.4243 15.2 12 15.2Z"
          stroke={isMatch ? "#fff" : "#636363"}
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_709_726">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
