import * as React from "react";
import { SVGProps } from "react";

const SvgSlashSquareFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="slash-square-fill_svg__bi slash-square-fill_svg__bi-slash-square-fill"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.354 5.354-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708.708z" />
  </svg>
);

export default SvgSlashSquareFill;
