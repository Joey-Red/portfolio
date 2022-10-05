import React from "react";
import { Breadcrumbs, Button } from "@mui/material";
import { motion } from "framer-motion";

function Intro(props) {
  let {
    setShowProjects,
    setShowSkills,
    setShowContact,
    setShowNavIntro,
    setIsOpen,
    setShowIntro,
  } = props;

  let styles = {
    fontSize: "1rem",
    fontWeight: "800",
  };
  let handleClick = (e) => {
    setIsOpen(false);
    if (e.target.value === "skills") {
      setShowSkills(true);
      setShowContact(false);
      setShowProjects(false);
      setShowNavIntro(true);
      setShowIntro(false);
    } else if (e.target.value === "projects") {
      setShowSkills(false);
      setShowContact(false);
      setShowProjects(true);
      setShowNavIntro(true);
      setShowIntro(false);
    } else if (e.target.value === "contact") {
      setShowSkills(false);
      setShowContact(true);
      setShowProjects(false);
      setShowNavIntro(true);
      setShowIntro(false);
    }
  };
  return (
    <motion.div
      // <motion.div
      className="introContainer"
      id="content"
      exit={{ opacity: 0 }}
    >
      <div className="introContent">
        <div className="introContentInner">
          <div className="introText">Joey Dalrymple</div>
          <div className="introText">Full Stack Engineer</div>
          <Breadcrumbs aria-label="breadcrumb">
            <Button
              onClick={(e) => handleClick(e)}
              style={styles}
              value="skills"
            >
              Skills
            </Button>
            <Button
              onClick={(e) => handleClick(e)}
              style={styles}
              value="projects"
            >
              Projects
            </Button>
            <Button
              onClick={(e) => handleClick(e)}
              style={styles}
              value="contact"
            >
              Contact/Bio
            </Button>
          </Breadcrumbs>
        </div>
      </div>
    </motion.div>
  );
}

export default Intro;
