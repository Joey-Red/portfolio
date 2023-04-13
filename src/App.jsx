import React, { useState } from "react";
import "./index.css";
import Nav from "./Nav";
import MainContent from "./MainContent";
import Skills from "./Skills";
import Slideshow from "./Slideshow";
import Footer from "./Footer";
import Contact from "./Contact";
function App() {
  const [showContact, setShowContact] = useState(false);
  return (
    <div className="border border-white svg-bg relative text-white">
      <Nav setShowContact={setShowContact} showContact={showContact} />
      <Contact setShowContact={setShowContact} showContact={showContact} />
      <div className="flex flex-col lg:flex-row">
        <MainContent />
        <div className="relative flex flex-col items-center lg:w-1/2">
          <Skills />
          <Slideshow />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
