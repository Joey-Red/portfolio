import React from "react";
import BAP1 from "../resources/projImg/JDT1.png";
import { motion } from "framer-motion";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectTwo() {
  let routLive = () => {
    window.open("https://joeddit.com/", "_blank");
  };
  let routRepo = () => {
    window.open("https://github.com/Joey-Red/frontend-joeddit/", "_blank");
  };
  return (
    //  bg-neutral-900/30
    <div className="rounded-xl mt-2 md:mt-4 bg-[#CBD2D7] relative group/p2">
      <div className="p-8 flex justify-between">
        <div>
          <h1 className="text-xl">Joeddit</h1>
          <p>My version of Reddit</p>
        </div>
        <div className="flex gap-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="z-[20] hover:cursor-pointer bg-black h-10 w-10 text-white flex justify-center items-center rounded-full"
            onClick={() => routLive()}
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => routRepo()}
            className="z-[20] hover:cursor-pointer bg-black h-10 w-10 text-white flex justify-center items-center rounded-full"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </motion.div>
        </div>
      </div>
      <img src={BAP1} alt="Joeddit" className="rounded-b-xl" />
      <div className="rounded-xl ease-in-out transition-opacity opacity-0 group-hover/p2:opacity-100 z-10 absolute top-0 bottom-0 right-0 left-0 bg-neutral-900/90 text-white flex justify-center text-center text-xl h-full items-center">
        <p className="max-w-[90%]">
          {" "}
          I recreated Reddit, using the MERN stack. The this project uses a
          Node/Express back end and a React front end. Hosted on Cyclic and GH
          Pages, using Ionos for the custom URL.
        </p>
      </div>
    </div>
  );
}

export default ProjectTwo;
