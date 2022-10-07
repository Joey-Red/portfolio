import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/system";
import Project1 from "./projects/Project1";
import Project2 from "./projects/Project2";
import Project3 from "./projects/Project3";
import { Card, Tab, Tabs } from "@mui/material";
import { motion } from "framer-motion";
import NavIntro from "./NavIntro";

function Projects(props) {
  let {
    setShowProjects,
    setShowSkills,
    setShowContact,
    setShowNavIntro,
    setIsOpen,
    ranNav,
    setRanNav,
  } = props;
  let [project, setProject] = useState(0);
  let handleChange = (e, p) => {
    setProject(p);
  };
  let projectSwitch = () => {
    if (project === 0) {
      return <Project1 />;
    }
    if (project === 1) {
      return <Project2 />;
    }
    if (project === 2) {
      return <Project3 />;
    }
  };
  function a11yProps(project) {
    return {
      id: `simple-tab-${project}`,
      "aria-controls": `simple-tabpanel-${project}`,
    };
  }
  return (
    <>
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
        className="projectOuter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Container
          maxWidth="sm"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          id="projects"
        >
          <Stack
            spacing={2}
            style={{
              background: "white",
              padding: "10px 30px",
              marginBottom: "-4px",
              maxWidth: "100%",
              minWidth: "100%",
              alignItems: "center",
            }}
            className="pagStack"
          >
            <Tabs
              value={project}
              onChange={handleChange}
              aria-label="Projects 1-3"
            >
              <Tab label="Event Planner" {...a11yProps(0)} />
              <Tab label="BlogApi" {...a11yProps(1)} />
              <Tab label="Reddit" {...a11yProps(2)} />
            </Tabs>
          </Stack>
          <Card>{projectSwitch(project)}</Card>
        </Container>
      </motion.div>
    </>
  );
}

export default Projects;
