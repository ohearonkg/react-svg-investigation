import * as React from "react";
import { SVGProps } from "react";

const SvgRecordCircleFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="record-circle-fill_svg__bi record-circle-fill_svg__bi-record-circle-fill"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
  </svg>
);

export default SvgRecordCircleFill;
