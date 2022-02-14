import * as React from "react";
import { SVGProps } from "react";

const SvgCaretDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="caret-down_svg__bi caret-down_svg__bi-caret-down"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
  </svg>
);

export default SvgCaretDown;
