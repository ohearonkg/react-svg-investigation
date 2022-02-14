import * as React from "react";
import { SVGProps } from "react";

const SvgUsbC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="usb-c_svg__bi usb-c_svg__bi-usb-c"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M3.5 7.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Z" />
    <path d="M0 8a3 3 0 0 1 3-3h10a3 3 0 1 1 0 6H3a3 3 0 0 1-3-3Zm3-2a2 2 0 1 0 0 4h10a2 2 0 1 0 0-4H3Z" />
  </svg>
);

export default SvgUsbC;
