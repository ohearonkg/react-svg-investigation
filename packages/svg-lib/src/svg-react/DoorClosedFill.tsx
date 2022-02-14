import * as React from "react";
import { SVGProps } from "react";

const SvgDoorClosedFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="door-closed-fill_svg__bi door-closed-fill_svg__bi-door-closed-fill"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </svg>
);

export default SvgDoorClosedFill;
