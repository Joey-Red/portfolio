import React from "react";
import { Breadcrumbs, Button } from "@mui/material";
import { motion } from "framer-motion";
function Intro(props) {
  let {
    setShowProjects,
    setShowSkills,
    setShowContact,
    setIsOpen,
    setRanNav,
    ranNav,
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
      setRanNav(true);
    } else if (e.target.value === "projects") {
      setShowSkills(false);
      setShowContact(false);
      setShowProjects(true);
      setRanNav(true);
    } else if (e.target.value === "contact") {
      setShowSkills(false);
      setShowContact(true);
      setShowProjects(false);
      setRanNav(true);
    }
  };
  const variants = {
    // open: { y: 3000, opacity: 0 },
    // mounted: { transitionDuration: "0.5s", y: 0 },
    mounted: { transitionDuration: "0.5s", opacity: 1 },
    noAnim: {},
    d: { opacity: 0 },
  };
  return (
    <motion.div
      variants={variants}
      initial={ranNav ? false : "d"}
      animate={ranNav ? "noAnim" : "mounted"}
    >
      <div className="navIntroContent">
        <div className="navIntroContentInner">
          <div className="introText">Joey Dalrymple</div>
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
