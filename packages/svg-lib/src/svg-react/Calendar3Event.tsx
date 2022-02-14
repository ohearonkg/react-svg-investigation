import * as React from "react";
import { SVGProps } from "react";

const SvgCalendar3Event = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="calendar3-event_svg__bi calendar3-event_svg__bi-calendar3-event"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
    <path d="M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </svg>
);

export default SvgCalendar3Event;
