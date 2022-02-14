import * as React from "react";
import { SVGProps } from "react";

const SvgPentagonHalf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="pentagon-half_svg__bi pentagon-half_svg__bi-pentagon-half"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="m8 1.288 6.842 5.56L12.267 15H8V1.288zM16 6.5 8 0 0 6.5 3 16h10l3-9.5z" />
  </svg>
);

export default SvgPentagonHalf;
