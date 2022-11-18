import React from "react";
import FEP1 from "../resources/projImg/FEP1.png";
import { motion } from "framer-motion";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectThree() {
    let routLive = () => {
        window.open("https://joey-red.github.io/EventPlanner/", "_blank");
    };
    let routRepo = () => {
        window.open("https://github.com/Joey-Red/EventPlanner", "_blank");
    };
    return (
        <div className="rounded-xl bg-[rgb(33,37,41)] relative group/p3 mt-2 sm:mt-0">
            <div className="p-8 flex justify-between">
                <div className="text-white">
                    <h1 className="text-xl">Event Planner</h1>
                    <p>Event Planning & Scheduling Web app.</p>
                </div>
                <div className="flex gap-2">
                    <motion.div
                        onClick={() => routLive()}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="z-[20] hover:cursor-pointer bg-black h-10 w-10 text-white flex justify-center items-center rounded-full"
                    >
                        <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            size="lg"
                        />
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
            <img src={FEP1} alt="Free Event Planner" className="rounded-b-xl" />
            <div className="rounded-xl ease-in-out transition-opacity opacity-0 group-hover/p3:opacity-100 z-10 absolute top-0 bottom-0 right-0 left-0 bg-neutral-900/90 text-white flex justify-center text-center text-xl h-full items-center">
                <p className="max-w-[90%]">
                    {" "}
                    This project is an Event Planner using the MERN stack. Where
                    you can create events, where you will be provided a link to
                    send to other people. It also lists public events for anyone
                    to join! It uses a monorepo where the React front end is
                    hosted on Github Pages, the Node/Express backend are hosted
                    on heroku. This project uses MongoDB for the database.
                </p>
            </div>
        </div>
    );
}

export default ProjectThree;
