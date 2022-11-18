import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function Intro() {
    return (
        <AnimatePresence>
            <div className="bg-neutral-900/90 rounded-xl md:w-[65%] p-3 text-white">
                <h1 className="text-2xl m-8">
                    Hey I'm Joey, a self-taught Web developer!
                </h1>
                <p className="md:text-base text-sm m-8 mb-32">
                    I enjoy making websites and web applications that are user
                    friendly, responsive, and beautiful. I hope to one day work
                    on some very exciting and impactful projects that will do
                    good in the world.
                </p>
                <div className="flex justify-evenly mb-4">
                    <motion.button
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-neutral-900 p-2 rounded-full text-white hover:scale-[1.1] flex justify-center items-center"
                    >
                        Contact me
                    </motion.button>
                    <motion.button
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        transition={{ delay: 0.25 }}
                        animate={{ opacity: 1 }}
                        className="text-black rounded-full bg-white h-10 w-10 hover:scale-[1.1]  flex justify-center items-center"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </motion.button>
                    <motion.button
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        transition={{ delay: 0.33 }}
                        animate={{ opacity: 1 }}
                        className="p-2 text-black rounded-full bg-white h-10 w-10 hover:scale-[1.1]  flex justify-center items-center"
                    >
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </motion.button>
                    <motion.button
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        transition={{ delay: 0.45 }}
                        animate={{ opacity: 1 }}
                        className="p-2 text-black rounded-full bg-white h-10 w-10 hover:scale-[1.1]  flex justify-center items-center"
                    >
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </motion.button>
                </div>
            </div>
        </AnimatePresence>
    );
}

export default Intro;
