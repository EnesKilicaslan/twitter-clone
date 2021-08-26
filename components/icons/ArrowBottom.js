import * as React from "react";

function SvgArrowBottom(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.207 8.147a1 1 0 00-1.414 0L12 14.94 5.207 8.147a1 1 0 00-1.414 1.414l7.5 7.5a.996.996 0 001.414.001l7.5-7.5a1 1 0 000-1.413v-.002z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrowBottom;
