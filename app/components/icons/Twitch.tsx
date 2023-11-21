import React from "react";
import { Icons } from "./icons.props";

function TwitchIcon(props: React.SVGProps<SVGSVGElement> & Icons) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 13 16"
      aria-labelledby="Twitch"
      color="#100316"
      {...props}
    >
      <title id="Twitch">{props.title ? props.title : "Twitch"}</title>

      <path
        d="M2.90502 0.884766L0.339355 3.45043V12.6875H3.41869V15.2532L5.98435 12.6875H8.03544L12.6549 8.06898V0.884766H2.90502ZM11.6284 7.5562L9.57646 9.6082H7.52357L5.72751 11.4042V9.6082H3.41869V1.91121H11.6284V7.5562Z"
        fill="currentColor"
      />
      <path
        d="M10.0892 3.70728H9.06273V6.78481H10.0892V3.70728ZM7.26668 3.70728H6.24023V6.78481H7.26668V3.70728Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default TwitchIcon;
