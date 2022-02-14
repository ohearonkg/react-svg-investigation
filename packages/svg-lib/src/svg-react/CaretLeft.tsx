import * as React from "react";
import { SVGProps } from "react";

const SvgCaretLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="caret-left_svg__bi caret-left_svg__bi-caret-left"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
  </svg>
);

export default SvgCaretLeft;
