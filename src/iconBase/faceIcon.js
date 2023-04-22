import * as React from "react";
const FaceIconComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <circle cx={16} cy={16} r={14} fill="url(#a)" />
    <path
      fill="#fff"
      d="m21.214 20.282.622-3.952h-3.89v-2.563c0-1.081.542-2.136 2.284-2.136H22V8.267S20.395 8 18.86 8c-3.205 0-5.298 1.893-5.298 5.318v3.012H10v3.952h3.562v9.552a14.468 14.468 0 0 0 4.383 0v-9.552h3.269Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={16}
        x2={16}
        y1={2}
        y2={29.917}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#18ACFE" />
        <stop offset={1} stopColor="#0163E0" />
      </linearGradient>
    </defs>
  </svg>
);
export default FaceIconComponent;
