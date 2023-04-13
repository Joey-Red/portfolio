import React, { useRef } from "react";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Socials() {
  const elementRef = useRef(null);

  const handleMouseMove = (e) => {
    const element = elementRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      element.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      element.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    }
  };
  return (
    <ul
      ref={elementRef}
      onMouseMove={handleMouseMove}
      className="card flex border-r-0 lg:order-[-1] order-2 border-t lg:border-0 lg:border-r border-b lg:border-b-0 gap-4 p-4 lg:p-8 lg:text-xl lg:w-1/3 justify-evenly items-center"
    >
      <a href="https://github.com/Joey-Red">
        <li className="flex items-center gap-2">
          <FontAwesomeIcon icon={faGithub} /> Github
        </li>
      </a>
      <a href="https://www.linkedin.com/in/joey-dalrymple/">
        <li className="flex items-center gap-2">
          {" "}
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </li>
      </a>
      <a href="https://twitter.com/JoeyDalrymple_">
        <li className="flex items-center gap-2">
          <FontAwesomeIcon icon={faTwitter} /> Twitter
        </li>
      </a>
    </ul>
  );
}

export default Socials;
