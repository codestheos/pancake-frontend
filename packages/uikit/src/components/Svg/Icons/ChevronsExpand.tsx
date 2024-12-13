import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <g id="expand_content">
        <mask id="mask0_1081_41724" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1081_41724)">
          <path
            id="expand_content_2"
            d="M7.12477 16.8748H10.9198C11.2688 16.8748 11.5636 16.9944 11.8042 17.2336C12.0446 17.473 12.1648 17.7663 12.1648 18.1135C12.1648 18.4607 12.0446 18.7561 11.8042 18.9997C11.5636 19.2431 11.2688 19.3648 10.9198 19.3648H5.87977C5.53077 19.3648 5.23597 19.2446 4.99537 19.0042C4.75497 18.7636 4.63477 18.4688 4.63477 18.1198V13.0798C4.63477 12.7308 4.75437 12.436 4.99357 12.1954C5.23297 11.955 5.52627 11.8348 5.87347 11.8348C6.22067 11.8348 6.51607 11.955 6.75967 12.1954C7.00307 12.436 7.12477 12.7308 7.12477 13.0798V16.8748ZM16.8748 7.12477H13.0798C12.7308 7.12477 12.436 7.00517 12.1954 6.76596C11.955 6.52657 11.8348 6.23327 11.8348 5.88607C11.8348 5.53887 11.955 5.24347 12.1954 4.99987C12.436 4.75647 12.7308 4.63477 13.0798 4.63477H18.1198C18.4688 4.63477 18.7636 4.75497 19.0042 4.99537C19.2446 5.23597 19.3648 5.53077 19.3648 5.87977V10.9198C19.3648 11.2688 19.2452 11.5636 19.006 11.8042C18.7666 12.0446 18.4733 12.1648 18.1261 12.1648C17.7789 12.1648 17.4835 12.0446 17.2399 11.8042C16.9965 11.5636 16.8748 11.2688 16.8748 10.9198V7.12477Z"
            fill={props.color || "#1C1B1F"}
          />
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
