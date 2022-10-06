import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/system";
import Project1 from "./projects/Project1";
import Project2 from "./projects/Project2";
import Project3 from "./projects/Project3";
import { Card } from "@mui/material";
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
  let [project, setProject] = useState(1);
  let handleChange = (e, p) => {
    setProject(p);
  };
  let projectSwitch = () => {
    if (project === 1) {
      return <Project1 />;
    }
    if (project === 2) {
      return <Project2 />;
    }
    if (project === 3) {
      return <Project3 />;
    }
  };

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
          <Card>{projectSwitch(project)}</Card>
          <Stack spacing={2}>
            <Pagination
              count={3}
              variant="text"
              color="primary"
              onChange={handleChange}
              project={project}
              style={{
                marginTop: "4px",
                backgroundColor: "rgba(255,255,255,0.8)",
                padding: "4px",
                borderRadius: "12px",
              }}
            />
          </Stack>
        </Container>
      </motion.div>
    </>
  );
}

export default Projects;
