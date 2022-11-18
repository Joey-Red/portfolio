import React from "react";
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
import h4h from "./resources/H4H.pdf";
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
                    <div className="mt-2 sm:mt-4 md:text-xl lg:text-2xl  text-white bg-neutral-900/90 rounded-xl w-full ">
                        <div className="p-8 flex flex-col sm:flex-row justify-evenly">
                            <div className="text-center">
                                <h1 className="text-xl underline">Accolades</h1>
                                <p>
                                    Hacks for Humanity 2022 <br /> my team and I
                                    placed 3rd!
                                </p>
                            </div>
                            <object
                                data={h4h}
                                aria-label="hacks for humanity award cert"
                                type="application/pdf"
                                className="rounded-xl"
                            ></object>
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
