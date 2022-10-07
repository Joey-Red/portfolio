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
      <motion.div
        className="contactContainer"
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
              Thank you for visiting my page. My name is Joey Dalrymple and I am
              an aspiring web developer based in Derby, Kansas. I enjoy complex
              problem solving, creating cool projects, and staying physically
              fit. Programming is something I am very passionate about, and I
              have dedicated all of my free time to pursuing a more complete
              skillset that will benefit me in a career that involves
              programming and development.
            </div>
          ) : (
            <div className="bio">
              <img
                src={me}
                alt="me"
                style={{ float: "right", maxHeight: "150px" }}
              />
              Thank you for visiting my page. My name is Joey Dalrymple and I am
              an aspiring web developer based in Derby, Kansas. I enjoy complex
              problem solving, constructing cool projects, staying physically
              fit, and spending time with my dogs. After working in a retail job
              for nearly 10 years, I decided to make a change. I wanted
              something better. I wanted to learn a skill, and concluded that
              [programming] was what I wanted to do. I have some experience with
              Python, C++, and Java; but when I discovered Javascript, I knew
              that it was the right programming language for me. After a few
              months of building a good foundation for my skillset, I switched
              gears and focused all of my free time and effort on web
              development. I switched solely to a Linux boot, deleted my games,
              and cut out any unnecessary distractions from my life so I could
              work hard and develop my skills as a developer. Web development is
              something I am very passionate about, I can not wait to create
              more amazing projects.
            </div>
          )}
        </div>
        <Footer />
      </motion.div>
    </>
  );
}

export default AboutMe;
