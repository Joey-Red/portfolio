import React, { useState } from "react";
import "./Styles/style.css";
import Intro from "./Components/Intro";
import Projects from "./Components/Projects";
import MySkills from "./Components/MySkills";
import Contact from "./Components/Contact";
import Dial from "./Components/Dial";
import { v4 as uuidv4 } from "uuid";
import { AnimatePresence } from "framer-motion";
function App() {
  let [showProjects, setShowProjects] = useState(false);
  let [showSkills, setShowSkills] = useState(false);
  let [showContact, setShowContact] = useState(false);
  let [showNavIntro, setShowNavIntro] = useState(false);
  let [isOpen, setIsOpen] = useState(true);
  let [showIntro, setShowIntro] = useState(true);
  let [ranNav, setRanNav] = useState(false);
  return (
    <div className="App">
      <AnimatePresence mode="wait" initial={false}>
        {showIntro && (
          <Intro
            showProjects={showProjects}
            setShowProjects={setShowProjects}
            showSkills={showSkills}
            setShowSkills={setShowSkills}
            showContact={showContact}
            setShowContact={setShowContact}
            setShowNavIntro={setShowNavIntro}
            showNavIntro={showNavIntro}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setShowIntro={setShowIntro}
            key={uuidv4()}
          />
        )}

        {showProjects && (
          <Projects
            ranNav={ranNav}
            setRanNav={setRanNav}
            showProjects={showProjects}
            setShowProjects={setShowProjects}
            showSkills={showSkills}
            setShowSkills={setShowSkills}
            showContact={showContact}
            setShowContact={setShowContact}
            setShowNavIntro={setShowNavIntro}
            showNavIntro={showNavIntro}
            key={uuidv4()}
            setIsOpen={setIsOpen}
          />
        )}
        {showSkills && (
          <MySkills
            ranNav={ranNav}
            setRanNav={setRanNav}
            key={uuidv4()}
            showProjects={showProjects}
            setShowProjects={setShowProjects}
            showSkills={showSkills}
            setShowSkills={setShowSkills}
            showContact={showContact}
            setShowContact={setShowContact}
            setShowNavIntro={setShowNavIntro}
            showNavIntro={showNavIntro}
            setIsOpen={setIsOpen}
          />
        )}
        {showContact && (
          <Contact
            ranNav={ranNav}
            setRanNav={setRanNav}
            key={uuidv4()}
            showProjects={showProjects}
            setShowProjects={setShowProjects}
            showSkills={showSkills}
            setShowSkills={setShowSkills}
            showContact={showContact}
            setShowContact={setShowContact}
            setShowNavIntro={setShowNavIntro}
            showNavIntro={showNavIntro}
            setIsOpen={setIsOpen}
          />
        )}
      </AnimatePresence>
      <Dial key="dial" />
    </div>
  );
}

export default App;
