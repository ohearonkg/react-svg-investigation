import * as React from "react";
import { SVGProps } from "react";

const SvgMagnet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="magnet_svg__bi magnet_svg__bi-magnet"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M8 1a7 7 0 0 0-7 7v3h4V8a3 3 0 0 1 6 0v3h4V8a7 7 0 0 0-7-7Zm7 11h-4v3h4v-3ZM5 12H1v3h4v-3ZM0 8a8 8 0 1 1 16 0v8h-6V8a2 2 0 1 0-4 0v8H0V8Z" />
  </svg>
);

export default SvgMagnet;
