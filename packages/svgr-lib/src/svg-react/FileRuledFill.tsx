import * as React from "react";
import { SVGProps } from "react";

const SvgFileRuledFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="file-ruled-fill_svg__bi file-ruled-fill_svg__bi-file-ruled-fill"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M12 0H4a2 2 0 0 0-2 2v4h12V2a2 2 0 0 0-2-2zm2 7H6v2h8V7zm0 3H6v2h8v-2zm0 3H6v3h6a2 2 0 0 0 2-2v-1zm-9 3v-3H2v1a2 2 0 0 0 2 2h1zm-3-4h3v-2H2v2zm0-3h3V7H2v2z" />
  </svg>
);

export default SvgFileRuledFill;
