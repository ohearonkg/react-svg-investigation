import * as React from "react";
import { SVGProps } from "react";

const SvgMagnetFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="magnet-fill_svg__bi magnet-fill_svg__bi-magnet-fill"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M15 12h-4v3h4v-3ZM5 12H1v3h4v-3ZM0 8a8 8 0 1 1 16 0v8h-6V8a2 2 0 1 0-4 0v8H0V8Z" />
  </svg>
);

export default SvgMagnetFill;
