import React, { useRef } from "react";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myResume from "./assets/JoeyDalrympleResume.pdf";
function Nav(props) {
  const { setShowContact, showContact } = props;
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
    <div
      ref={elementRef}
      onMouseMove={handleMouseMove}
      className="card border-b w-full min-h-12 flex items-center justify-between p-4 md:p-8 text-lg"
    >
      <h1 className="text-[1.2rem] lg:flex lg:items-center lg:gap-2">
        <div className="hidden lg:flex">
          <FontAwesomeIcon icon={faFish} />
        </div>
        Joey Dalrymple
      </h1>
      <ul className="flex gap-4">
        <li>
          <button
            onClick={() => setShowContact(!showContact)}
            className="bg-red-600 p-2 h-[32px] lg:h-[44px] flex justify-center items-center rounded"
          >
            Contact
          </button>
        </li>
        <li>
          <a
            className="bg-red-600 p-2 h-[32px] lg:h-[44px] flex justify-center items-center rounded"
            href={myResume}
            download="JoeyDalrympleResume"
          >
            Resume
            {/* <FontAwesomeIcon icon={faDownload} /> */}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
