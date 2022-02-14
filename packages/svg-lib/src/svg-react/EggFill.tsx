import * as React from "react";
import { SVGProps } from "react";

const SvgEggFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="egg-fill_svg__bi egg-fill_svg__bi-egg-fill"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M14 10a6 6 0 0 1-12 0C2 5.686 5 0 8 0s6 5.686 6 10z" />
  </svg>
);

export default SvgEggFill;
