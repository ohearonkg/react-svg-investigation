import * as React from "react";
import { SVGProps } from "react";

const SvgCaretUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="caret-up_svg__bi caret-up_svg__bi-caret-up"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
  </svg>
);

export default SvgCaretUp;
