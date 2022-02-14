import * as React from "react";
import { SVGProps } from "react";

const SvgDashLg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="dash-lg_svg__bi dash-lg_svg__bi-dash-lg"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
    />
  </svg>
);

export default SvgDashLg;
