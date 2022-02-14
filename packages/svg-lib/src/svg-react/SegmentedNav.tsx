import * as React from "react";
import { SVGProps } from "react";

const SvgSegmentedNav = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="segmented-nav_svg__bi segmented-nav_svg__bi-segmented-nav"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm6 3h4V5H6v4zm9-1V6a1 1 0 0 0-1-1h-3v4h3a1 1 0 0 0 1-1z" />
  </svg>
);

export default SvgSegmentedNav;
