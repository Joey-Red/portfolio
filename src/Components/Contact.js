import React, { useState, useEffect } from "react";
import { Button, Breadcrumbs } from "@mui/material";
import { motion } from "framer-motion";
import Footer from "./Footer";
import NavIntro from "../Components/NavIntro";
import me from "../resources/liCrop.jpg";
function AboutMe(props) {
  let {
    setShowProjects,
    setShowSkills,
    setShowContact,
    setShowNavIntro,
    setIsOpen,
    ranNav,
    setRanNav,
  } = props;
  const [bio, setBio] = useState(0);
  let setShortBio = () => {
    setBio(0);
  };
  let setLongBio = () => {
    setBio(1);
  };

  useEffect(() => {
    let width = window.innerWidth;
    if (width > 800) {
      setBio(1);
    }
  }, []);

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
      {/* <motion.div */}
      <motion.div
        className="contactContainer"
        // initial={{ y: 1000, opacity: 0 }}
        // animate={{ transitionDuration: "0.5s", y: 0, opacity: 1 }}
        // exit={{ y: -1000, opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="contactInner" style={{ position: "relative" }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Button onClick={setShortBio}>Short Bio</Button>
            <Button onClick={setLongBio}>Long Bio</Button>
          </Breadcrumbs>

          {bio === 0 ? (
            <div className="bio" style={{ padding: 30 }}>
              I am a{" "}
              <img
                src={me}
                alt="me"
                style={{ float: "right", maxHeight: "120px" }}
              />{" "}
              Web Developer From Kansas. I enjoy progamming and have devoted a
              large amount of time to it. I am always working on my skills. I
              enjoy complex problem solving, making cool projects, and staying
              in shape.
            </div>
          ) : (
            <div className="bio">
              I am a Web developer located in Kansas,{" "}
              <img
                src={me}
                alt="me"
                style={{ float: "right", maxHeight: "150px" }}
              />
              I am a Web developer located in Kansas USA preferring the front
              end side of things, but I do back end as well. I enjoy complex
              problem solving, making cool things, staying fit, and playing with
              my dogs. I have a positive attitude and am good at handling stress
              and anxiety. I am looking forward to picking up new tools and
              languages. I am 26 years old, and I've been working retail for
              nearly 10 years, I had to make a change. I had to learn a skill,
              and even though I've used Python, C++ and a little Java before,
              when I found JavaScript I knew it was the right primary language
              for me. A few months into learning, I decided to focus all of my
              free time and effort on web development. I switched solely to a
              Linux boot, deleted all of my video games and have been working
              hard and I will continue to do so every day. Thank you for
              visiting my page.
            </div>
          )}
        </div>
        <Footer />
      </motion.div>
    </>
  );
}

export default AboutMe;
