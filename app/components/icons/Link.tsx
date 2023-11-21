import React from "react";
import { Icons } from "./icons.props";

function LinkIcon(props: React.SVGProps<SVGSVGElement> & Icons) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 24 24"
      aria-labelledby="Link"
      color="#100316"
      {...props}
    >
      <title id="Link">{props.title ? props.title : "Sun"}</title>

      <path
        d="M11 17H7C5.61667 17 4.43733 16.5123 3.462 15.537C2.48667 14.5617 1.99933 13.3827 2 12C2 10.6167 2.48767 9.43733 3.463 8.462C4.43833 7.48667 5.61733 6.99933 7 7H11V9H7C6.16667 9 5.45833 9.29167 4.875 9.875C4.29167 10.4583 4 11.1667 4 12C4 12.8333 4.29167 13.5417 4.875 14.125C5.45833 14.7083 6.16667 15 7 15H11V17ZM8 13V11H16V13H8ZM13 17V15H17C17.8333 15 18.5417 14.7083 19.125 14.125C19.7083 13.5417 20 12.8333 20 12C20 11.1667 19.7083 10.4583 19.125 9.875C18.5417 9.29167 17.8333 9 17 9H13V7H17C18.3833 7 19.5627 7.48767 20.538 8.463C21.5133 9.43833 22.0007 10.6173 22 12C22 13.3833 21.5123 14.5627 20.537 15.538C19.5617 16.5133 18.3827 17.0007 17 17H13Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default LinkIcon;
