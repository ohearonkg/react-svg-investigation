import * as React from "react";
import { SVGProps } from "react";

const SvgRecordBtnFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="record-btn-fill_svg__bi record-btn-fill_svg__bi-record-btn-fill"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
  </svg>
);

export default SvgRecordBtnFill;
