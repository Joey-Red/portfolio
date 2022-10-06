import React from "react";
import serverIcon from "../resources/serverIcon.png";
import dbimg from "../resources/dbIco.png";
import window from "../resources/noun-window-117713.png";
import NavIntro from "../Components/NavIntro";
import { motion } from "framer-motion";

function MySkills(props) {
  let {
    setShowProjects,
    setShowSkills,
    setShowContact,
    setShowNavIntro,
    setIsOpen,
    ranNav,
    setRanNav,
  } = props;
  return (
    <div>
      <NavIntro
        setShowProjects={setShowProjects}
        setShowSkills={setShowSkills}
        setShowContact={setShowContact}
        setShowNavIntro={setShowNavIntro}
        setIsOpen={setIsOpen}
        ranNav={ranNav}
        setRanNav={setRanNav}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="skillsContainer"
        id="skills"
      >
        <div className="skillsCard">
          <div
            variant="h6"
            className="skillsParagraph"
            style={{
              textDecoration: "underline",
              color: "#1470BE",
            }}
          >
            My Skills & Tech
          </div>
          <div className="skills">
            <div className="frontend">
              <h5>Front End</h5>
              <ul>
                <li>HTML</li>
                <li>CSS | SASS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>
            <div className="skillsImg">
              <img src={window} alt="database" />
            </div>
            <div className="backend">
              <h5>Back End</h5>
              <ul>
                <li>NodeJS</li>
                <li>Express</li>
              </ul>
            </div>
            <div className="skillsImg dbImg">
              <img src={serverIcon} alt="database" />
            </div>
            <div className="database">
              <h5>Database</h5>
              <ul>
                <li>MongoDb</li>
                <li>Firebase</li>
                <li>NoSQL</li>
              </ul>
            </div>
            <div className="skillsImg">
              <img src={dbimg} alt="database" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default MySkills;
