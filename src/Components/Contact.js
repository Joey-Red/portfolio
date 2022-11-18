import {
    faArrowUp,
    faClipboard,
    faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import myResume from "./resume/JoeyDalrympleResume.pdf";
function Contact() {
    const copyEmail = () => {
        navigator.clipboard.writeText("joeyedalrymple@gmail.com");
    };
    const copyPhone = () => {
        navigator.clipboard.writeText("3166099213");
    };
    return (
        <div
            id="contact"
            className="flex-grow mt-2 sm:mt-4 bg-neutral-900/90 text-white rounded-xl  text-xl p-8 flex-col flex items-center"
        >
            <h1 className="underline">Contact me</h1>
            <h2>Joey Dalrymple</h2>
            <div className="mb-4 gap-2 max-h-[300px] flex-col flex justify-center items-center justify-evenly h-full">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => copyEmail()}
                    className="bg-black text-white p-3 rounded-full flex justify-center items-center"
                >
                    joeyedalrymple@gmail
                    <FontAwesomeIcon icon={faClipboard} className="ml-2" />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => copyPhone()}
                    className="bg-black text-white p-3 rounded-full flex justify-center items-center"
                >
                    316-609-9213
                    <FontAwesomeIcon icon={faClipboard} className="ml-2" />
                </motion.button>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={myResume}
                    download="JoeyDalrympleResume"
                    className="bg-black text-white p-3 rounded-full flex justify-center items-center"
                >
                    Download Resume{" "}
                    <FontAwesomeIcon icon={faDownload} className="ml-2" />
                </motion.a>
            </div>

            <a href="#nav" className="mt-auto">
                To top <FontAwesomeIcon icon={faArrowUp} className="ml-2" />
            </a>
        </div>
    );
}

export default Contact;
