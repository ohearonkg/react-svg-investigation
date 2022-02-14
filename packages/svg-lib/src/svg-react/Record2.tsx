import * as React from "react";
import { SVGProps } from "react";

const SvgRecord2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="record2_svg__bi record2_svg__bi-record2"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
    <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
  </svg>
);

export default SvgRecord2;
