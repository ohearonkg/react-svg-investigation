import * as React from "react";
import { SVGProps } from "react";

const SvgPhoneFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="phone-fill_svg__bi phone-fill_svg__bi-phone-fill"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
  </svg>
);

export default SvgPhoneFill;
