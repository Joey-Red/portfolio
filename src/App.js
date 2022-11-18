import React, { useState } from "react";
import "./Styles/style.css";
import Navbar from "./Components/Navbar";
import me from "./resources/liCrop.jpg";
import { AnimatePresence } from "framer-motion";
import Intro from "./Components/Intro";
import ProjectOne from "./Components/ProjectOne";
import ProjectTwo from "./Components/ProjectTwo";
import ProjectThree from "./Components/ProjectThree";
import ProjectFour from "./Components/ProjectFour";
import Contact from "./Components/Contact";
import About from "./Components/About";
function App() {
    return (
        <div
            id="anchor"
            className="App sm:w-[80%] md:max-w-[1300px] flex mx-auto flex-col bg-white rounded-xl"
        >
            <div className="rounded-xl bg-white m-2 p-2">
                <AnimatePresence mode="wait" initial={false}>
                    <Navbar />
                    <div className="flex sm:gap-4 flex-col md:flex-row">
                        <Intro />
                        <div className="rounded-xl mt-2 sm:mt-0 flex flex-grow justify-center bg-neutral-900/90">
                            <img
                                src={me}
                                alt="Me"
                                className="rounded-xl my-2 object-contain"
                            />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 sm:gap-4">
                        <ProjectOne />
                        <ProjectTwo />
                        <ProjectThree />
                        <ProjectFour />
                    </div>
                    <div className="w-full flex sm:gap-4 flex-col md:flex-row">
                        <Contact />
                        <About />
                    </div>
                </AnimatePresence>
            </div>
        </div>
    );
}
export default App;
