import React, { useRef } from "react";
import {
  faCss3,
  faHtml5,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import TailwindIcon from "./assets/TailwindIcon";
import MongodbIcon from "./assets/MongodbIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Skills() {
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
      className="card p-4 lg:p-8 border-b w-full svg-bg-light"
    >
      <h3 className="justify-center flex text-xl">Skills</h3>
      <div className="flex w-full text-lg lg:text-lg lg:gap-2">
        <div className="lg:hidden px-24 flex w-full flex-col">
          {/* <div className="w-1/2 flex flex-col"> */}
          <li className="justify-center flex w-full h-12 items-center gap-2">
            React
            <p className="h-[32px] w-[32px] text-end flex justify-center items-center">
              <FontAwesomeIcon icon={faReact} size="lg" />
            </p>
          </li>
          <li className="justify-center flex w-full h-12 items-center gap-2">
            NodeJS
            <p className="h-[32px] w-[32px] text-end flex justify-center items-center">
              <FontAwesomeIcon icon={faNodeJs} size="lg" />
            </p>
          </li>
          <li className="justify-center flex w-full h-12 items-center gap-2">
            Tailwind <TailwindIcon />{" "}
          </li>
          {/* </div> */}
          {/* <div> */}
          <li className="justify-center flex w-full h-12 items-center gap-2">
            MongoDb
            <MongodbIcon />
          </li>
          <li className="justify-center flex w-full h-12 items-center gap-2">
            HTML
            <p className="h-[32px] w-[32px] text-end flex justify-center items-center">
              <FontAwesomeIcon icon={faHtml5} />
            </p>
          </li>
          <li className="justify-center flex w-full h-12 items-center gap-2">
            CSS
            <p className="h-[32px] w-[32px] text-end flex justify-center items-center">
              <FontAwesomeIcon icon={faCss3} />
            </p>
          </li>
          {/* </div> */}
        </div>
        <div className="hidden lg:flex w-full justify-center">
          <div className="w-1/2 flex flex-col justify-center">
            <li className="justify-center flex w-full h-12 items-center gap-2">
              React
              <p className="h-[32px] w-[32px] text-end flex justify-center items-center">
                <FontAwesomeIcon icon={faReact} size="lg" />
              </p>
            </li>
            <li className="justify-center flex w-full h-12 items-center gap-2">
              Tailwind <TailwindIcon />{" "}
            </li>
            <li className="justify-center flex w-full h-12 items-center gap-2">
              NodeJS
              <p className="h-[32px] w-[32px] text-end flex justify-center items-center">
                <FontAwesomeIcon icon={faNodeJs} size="lg" />
              </p>
            </li>
          </div>
          <div className="w-1/2 flex justify-center flex-col">
            <li className="justify-center flex w-full h-12 items-center gap-2">
              MongoDb
              <MongodbIcon />
            </li>
            <li className="justify-center flex w-full h-12 items-center gap-2">
              HTML
              <p className="h-[32px] w-[32px] text-end flex justify-center items-center">
                <FontAwesomeIcon icon={faHtml5} />
              </p>
            </li>
            <li className="justify-center flex w-full h-12 items-center gap-2">
              CSS
              <p className="h-[32px] w-[32px] text-end flex justify-center items-center">
                <FontAwesomeIcon icon={faCss3} />
              </p>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
