import React from "react";
import WP1 from "../resources/projImg/WP1.png";
import { motion } from "framer-motion";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectFour() {
  let routLive = () => {
    window.open("https://joey-red.github.io/wheres-pikachu/", "_blank");
  };
  let routRepo = () => {
    window.open("https://github.com/Joey-Red/wheres-pikachu", "_blank");
  };
  return (
    <div className="rounded-xl bg-[#688181] relative group/p4 mt-2 sm:mt-0">
      <div className="p-8 flex justify-between">
        <div className="text-white">
          <h1 className="text-xl">Where's Pikachu!?</h1>
          <p>Pokémon iSpy.</p>
        </div>
        <div className="flex gap-2">
          <motion.div
            onClick={() => routLive()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="z-[20] hover:cursor-pointer bg-black h-10 w-10 text-white flex justify-center items-center rounded-full"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
          </motion.div>
          <motion.div
            onClick={() => routRepo()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="z-[20] hover:cursor-pointer bg-black h-10 w-10 text-white flex justify-center items-center rounded-full"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </motion.div>
        </div>
      </div>
      <img src={WP1} alt="Where's Pikachu?!" className="rounded-b-xl" />
      <div className="rounded-xl ease-in-out transition-opacity opacity-0 group-hover/p4:opacity-100 z-10 absolute top-0 bottom-0 right-0 left-0 bg-neutral-900/90 text-white flex justify-center text-center text-xl h-full items-center">
        <p className="max-w-[90%]">
          {" "}
          This project is an iSpy game, where you get a list of Pokemon to find,
          you search for them and catch them. There are three different levels,
          it uses a React front end and Firebase to check coordinates you
          submit, works on any screen size.
        </p>
      </div>
    </div>
  );
}

export default ProjectFour;
