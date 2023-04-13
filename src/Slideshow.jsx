import React, { useRef, useState, useEffect } from "react";
import {
  faArrowUpRightDots,
  faArrowUpRightFromSquare,
  faLeftLong,
  faRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import FEP from "./assets/FEP1.png";
import JDT from "./assets/JDT1.png";
import TW from "./assets/TW1.png";
import DYK from "./assets/DYK1.png";
import {
  twDesc,
  jdDesc,
  epDesc,
  dykDesc,
  dykLink,
  jdLink,
  epLink,
  twLink,
  dykGH,
  jdGH,
  epGH,
  twGH,
} from "./descriptions";
function Slideshow() {
  const [showing, setShowing] = useState(1);
  const [pic, setPic] = useState(DYK);
  const [desc, setDesc] = useState(dykDesc);
  const [ghLink, setGhLink] = useState(dykGH);
  const [projLink, setProjLink] = useState(dykLink);
  const elementRef = useRef(null);

  const handleMouseMove = (e) => {
    const element = elementRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      element.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      element.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    }
  };
  useEffect(() => {
    if (showing === 1) {
      setDesc((desc) => dykDesc);
      // desc = DYKDesc;
      setPic((pic) => DYK);
      // DYKYF
      setGhLink((ghLink) => dykGH);
      setProjLink((projLink) => dykLink);
    } else if (showing === 2) {
      setDesc((desc) => jdDesc);
      // desc = JDTDesc;
      setPic((pic) => JDT);
      setGhLink((ghLink) => jdGH);
      setProjLink((projLink) => jdLink);
      // Joeddit
    } else if (showing === 3) {
      setDesc((desc) => epDesc);
      // desc = FEPDesc;
      setPic((pic) => FEP);
      setGhLink((ghLink) => epGH);
      setProjLink((projLink) => epLink);
      // Free Event Planner
    } else if (showing === 4) {
      setDesc((desc) => twDesc);
      // desc = TWDesc;
      setPic((pic) => TW);
      setGhLink((ghLink) => twGH);
      setProjLink((projLink) => twLink);
      // The Watchlist
    }
  }, [showing]);

  function forward() {
    if (showing <= 3) {
      setShowing((showing) => showing + 1);
    } else {
      setShowing((showing) => 1);
    }
  }
  function backward() {
    if (showing >= 2) {
      setShowing((showing) => showing - 1);
    } else {
      setShowing((showing) => 4);
    }
  }

  return (
    <div
      className="card min-h-maxImg lg:w-full svg-bg-light"
      ref={elementRef}
      onMouseMove={handleMouseMove}
    >
      <div className="border-b flex justify-center items-center w-full h-full">
        <img className="lg:min-h-maxImg" src={pic} alt="" />
        <div className="absolute top-2 right-2 text-white gap-2 flex">
          <a
            href={ghLink}
            target="_blank"
            className="p-2 bg-neutral-900 flex items-center justify-center rounded-full lg:w-[50px] lg:h-[50px] w-10 h-10"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href={projLink}
            target="_blank"
            className="p-2 bg-neutral-900 flex items-center justify-center rounded-full lg:w-[50px] lg:h-[50px] w-10 h-10"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
          </a>
        </div>
        <div className="absolute w-full flex justify-between px-4">
          <button
            onClick={backward}
            className="border-white border svg-bg-mini text-red-600 rounded-full p-2"
          >
            <FontAwesomeIcon icon={faLeftLong} size="2xl" />
          </button>
          <button
            onClick={forward}
            className="border-white border svg-bg-mini text-red-600 rounded-full p-2"
          >
            <FontAwesomeIcon icon={faRightLong} size="2xl" />
          </button>
        </div>
      </div>
      <p className="lg:text-xl p-4 lg:p-8 lg:min-h-[205px]">{desc}</p>
    </div>
  );
}

export default Slideshow;
