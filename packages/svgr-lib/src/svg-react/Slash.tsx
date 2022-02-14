import * as React from "react";
import { SVGProps } from "react";

const SvgSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="slash_svg__bi slash_svg__bi-slash"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z" />
  </svg>
);

export default SvgSlash;
