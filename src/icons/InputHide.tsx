import * as React from "react";

function SvgComponent(props: any) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 9s3.5 4 10 4 10-4 10-4M4 10.645L2 13m20 0l-1.996-2.352M8.914 12.68L8 15.5m7.063-2.812L16 15.5"
        stroke={props.stroke || "#2F2F2F"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgComponent;
