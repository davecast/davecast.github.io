import React from "react";
import { Icons } from "./icons.props";

function XIcon(props: React.SVGProps<SVGSVGElement> & Icons) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 16 16"
      aria-labelledby="X"
      color="#100316"
      {...props}
    >
      <title id="X">{props.title ? props.title : "X"}</title>

      <g clipPath="url(#clip0_340_27)">
        <path
          d="M12.6007 0.768677H15.054L9.694 6.89534L16 15.2307H11.0627L7.196 10.1747L2.77067 15.2307H0.316L6.04933 8.67734L0 0.769343H5.06267L8.558 5.39068L12.6007 0.768677ZM11.74 13.7627H13.0993L4.324 2.16001H2.86533L11.74 13.7627Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_340_27">
          <rect width="16" height="16" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default XIcon;
