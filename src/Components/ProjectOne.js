import React from "react";
import TW1 from "../resources/projImg/TW1.png";
import { motion } from "framer-motion";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectOne() {
    let routLive = () => {
        window.open("https://joey-red.github.io/tw-frontend/", "_blank");
    };
    let routRepo = () => {
        window.open("https://github.com/Joey-Red/tw-frontend", "_blank");
    };
    return (
        <div
            id="#projects"
            className="rounded-xl mt-2 sm:mt-4 bg-[#F5F5F4] relative group/p1"
        >
            <div className="p-8 flex justify-between">
                <div>
                    <h1 className="text-xl">The Watchlist</h1>
                    <p>Movie rating & sharing Web app.</p>
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
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="z-[20] hover:cursor-pointer bg-black h-10 w-10 text-white flex justify-center items-center rounded-full"
                        onClick={() => routRepo()}
                    >
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </motion.div>
                </div>
            </div>
            <img src={TW1} alt="The Watchlist" className="rounded-b-xl" />
            <div className="rounded-xl ease-in-out transition-opacity group-hover/p1:opacity-100  opacity-0 z-10 absolute top-0 bottom-0 right-0 left-0 bg-neutral-900/90 text-white flex justify-center text-center text-xl h-full items-center">
                <p className="max-w-[90%]">
                    This is my Movie rating website, you can search for movies,
                    view details about them and provide feedback. Such as a
                    rating and comment. Also featured is a news API where pop
                    culture news is displayed and linked. On your profile you
                    can have full CRUD functionality, and there is an option to
                    copy a link to your profile so you can share your list with
                    others. This project uses the MERN stack, along with
                    Typescript.
                </p>
            </div>
        </div>
    );
}

export default ProjectOne;
