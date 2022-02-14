import * as React from "react";
import { SVGProps } from "react";

const SvgPhoneLandscapeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="phone-landscape-fill_svg__bi phone-landscape-fill_svg__bi-phone-landscape-fill"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M2 12.5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2zm11-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
  </svg>
);

export default SvgPhoneLandscapeFill;
