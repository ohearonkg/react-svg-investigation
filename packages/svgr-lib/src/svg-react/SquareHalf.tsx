import * as React from "react";
import { SVGProps } from "react";

const SvgSquareHalf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="square-half_svg__bi square-half_svg__bi-square-half"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M8 15V1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8zm6 1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12z" />
  </svg>
);

export default SvgSquareHalf;
