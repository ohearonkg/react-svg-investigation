import * as React from "react";
import { SVGProps } from "react";

const SvgRecord2Fill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="record2-fill_svg__bi record2-fill_svg__bi-record2-fill"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
    <path d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
  </svg>
);

export default SvgRecord2Fill;
