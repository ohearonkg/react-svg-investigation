import * as React from "react";
import { SVGProps } from "react";

const SvgCalendar3WeekFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="calendar3-week-fill_svg__bi calendar3-week-fill_svg__bi-calendar3-week-fill"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M2 0a2 2 0 0 0-2 2h16a2 2 0 0 0-2-2H2zM0 14V3h16v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm12-8a1 1 0 1 0 2 0 1 1 0 0 0-2 0zM5 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm5-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM2 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"
    />
  </svg>
);

export default SvgCalendar3WeekFill;
