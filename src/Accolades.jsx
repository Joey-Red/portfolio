import React, { useRef } from "react";

function Accolades() {
  const elementRef = useRef(null);

  const handleMouseMove = (e) => {
    const element = elementRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      element.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      element.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    }
  };
  return (
    <div
      ref={elementRef}
      onMouseMove={handleMouseMove}
      className="card p-4 lg:p-8 lg:text-xl lg:w-2/3 flex flex-col"
    >
      <p>Achievements</p>
      Third-place winner in the "Hacks for Humanity: Hacking for the Social
      Good" hackathon hosted by Project Humanities at Arizona State University
      (ASU), a global, 36-hour entrepreneurial marathon that challenges
      participants to create technical solutions for the social good.
    </div>
  );
}

export default Accolades;
