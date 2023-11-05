import React from "react";

interface SVGAttributeProps {
  isMatch?: boolean;
}

export const AbsenceIcon = ({ isMatch }: SVGAttributeProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 20C3 21.103 3.897 22 5 22H19C20.103 22 21 21.103 21 20V5C21 3.897 20.103 3 19 3H17C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2H8C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3H5C3.897 3 3 3.897 3 5V20ZM5 5H7V7H17V5H19V20H5V5Z"
        fill={isMatch ? "#fff" : "#777777"}
      />
      <path
        d="M14.2919 10.2949L11.9999 12.5869L9.70795 10.2949L8.29395 11.7089L10.5859 14.0009L8.29395 16.2929L9.70795 17.7069L11.9999 15.4149L14.2919 17.7069L15.7059 16.2929L13.4139 14.0009L15.7059 11.7089L14.2919 10.2949Z"
        fill={isMatch ? "#fff" : "#777777"}
      />
    </svg>
  );
};
