import * as React from "react";
import { SVGProps } from "react";

const SvgMicrosoft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="microsoft_svg__bi microsoft_svg__bi-microsoft"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z" />
  </svg>
);

export default SvgMicrosoft;
