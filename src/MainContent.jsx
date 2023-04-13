import React, { useState, useRef } from "react";
import SVGArrow from "./assets/SVGArrow";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function MainContent() {
  const [showLong, setShowLong] = useState(false);
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
      className="card flex-col lg:mt-0 mt-auto lg:text-2xl lg:w-1/2 lg:border-r border-b lg:border-b-0 h-full justify-center flex lg:p-8 p-4 svg-bg-light"
    >
      {showLong ? (
        <p className=" lg:mx-auto text-start lg:text-center flex items-center lg:text-2xl lg:max-h-[850px] overflow-y-auto">
          Hey there, I'm Joey Dalrymple, a web developer based in Derby, Kansas.
          I've been honing my skills in web development for the past few years
          and have a particular interest in JavaScript. After spending nearly a
          decade in retail, I decided to pursue a new career in programming. I
          quickly realized that web development was the path for me, and I've
          been dedicated to it ever since. I have experience in several
          programming languages, including Python, C++, and Java, but my passion
          for JavaScript drove me to focus my efforts on web development. My
          attention to detail and strong problem-solving skills allow me to
          create user-friendly websites and web applications that meet my
          clients' needs. I'm always excited to take on new challenges and help
          businesses and individuals achieve their goals through web
          development. When I'm not coding, I enjoy staying active and spending
          time with my dogs. I am currently seeking employment opportunities in
          web development. Let's connect and discuss further if you have any
          openings or opportunities available.
        </p>
      ) : (
        <p className="lg:w-2/3 lg:mx-auto text-start lg:text-center flex items-center lg:h-[431px]">
          Creating beautiful, user-friendly, and impactful websites and web
          applications is my passion. I'm Joey, a self-taught web developer
          who's always pushing the boundaries to craft exceptional digital
          experiences. Let's collaborate and build something amazing that can
          make a positive difference in the world.
        </p>
      )}
      <div className="flex justify-evenly my-6 lg:my-12 items-center">
        <button
          onClick={() => setShowLong(!showLong)}
          className="lg:text-2xl h-[32px] lg:h-[44px] flex justify-center items-center min-w-max bg-red-600 p-2 rounded"
        >
          {!showLong ? <>Read more</> : <>Read less</>}
        </button>
        <div className="flex items-center">
          <p className="text-end">Or, check out my projects</p>
          {/* h-min w-min */}
          <p className="rotate-45 hidden lg:flex">
            <SVGArrow />
          </p>
          <p className="lg:hidden">
            <FontAwesomeIcon
              className=" ml-2 flex justify-center items-center h-full text-red-600"
              icon={faArrowDown}
              size="lg"
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
