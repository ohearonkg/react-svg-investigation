import * as React from "react";
import { SVGProps } from "react";

const SvgArrowLeftShort = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="arrow-left-short_svg__bi arrow-left-short_svg__bi-arrow-left-short"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
    />
  </svg>
);

export default SvgArrowLeftShort;
