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
        d="M21.63 10.828a1.577 1.577 0 010 2.029c-1.553 1.905-5.28 5.827-9.63 5.827-4.35 0-8.077-3.922-9.63-5.827-.24-.29-.37-.647-.37-1.015 0-.367.13-.724.37-1.014C3.923 8.921 7.65 5 12 5c4.35 0 8.077 3.922 9.63 5.828z"
        stroke={props.stroke || "#2F2F2F"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14.774c1.724 0 3.121-1.312 3.121-2.932 0-1.62-1.397-2.932-3.12-2.932-1.724 0-3.122 1.313-3.122 2.932 0 1.62 1.398 2.932 3.121 2.932z"
        stroke={props.stroke || "#2F2F2F"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgComponent;
