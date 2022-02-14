import * as React from "react";
import { SVGProps } from "react";

const SvgRecordFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="record-fill_svg__bi record-fill_svg__bi-record-fill"
    viewBox="0 0 16 16"
    {...props}
  >
    <path fillRule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
  </svg>
);

export default SvgRecordFill;
