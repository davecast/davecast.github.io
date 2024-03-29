import React from "react";
import { Icons } from "./icons.props";

function TiktokIcon(props: React.SVGProps<SVGSVGElement> & Icons) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 12 12"
      aria-labelledby="Tiktok"
      color="#100316"
      {...props}
    >
      <title id="Tiktok">{props.title ? props.title : "Tiktok"}</title>
      <path
        d="M9.06677 1.88C8.61105 1.35975 8.35991 0.691622 8.3601 0H6.3001V8.26667C6.28422 8.71402 6.09535 9.13775 5.77328 9.44863C5.45121 9.7595 5.02107 9.93327 4.57344 9.93333C3.62677 9.93333 2.8401 9.16 2.8401 8.2C2.8401 7.05333 3.94677 6.19333 5.08677 6.54667V4.44C2.78677 4.13333 0.773438 5.92 0.773438 8.2C0.773438 10.42 2.61344 12 4.56677 12C6.6601 12 8.3601 10.3 8.3601 8.2V4.00667C9.19544 4.60657 10.1983 4.92843 11.2268 4.92667V2.86667C11.2268 2.86667 9.97344 2.92667 9.06677 1.88Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default TiktokIcon;
