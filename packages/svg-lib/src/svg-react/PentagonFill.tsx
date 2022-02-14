import * as React from "react";
import { SVGProps } from "react";

const SvgPentagonFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="pentagon-fill_svg__bi pentagon-fill_svg__bi-pentagon-fill"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="m8 0 8 6.5-3 9.5H3L0 6.5 8 0z" />
  </svg>
);

export default SvgPentagonFill;
