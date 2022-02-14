import * as React from "react";
import { SVGProps } from "react";

const SvgCalendar3Fill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="calendar3-fill_svg__bi calendar3-fill_svg__bi-calendar3-fill"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2H0zm0 1v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3H0z" />
  </svg>
);

export default SvgCalendar3Fill;
