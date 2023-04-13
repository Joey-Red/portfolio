import React, { useEffect, useRef } from "react";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Contact(props) {
  const { setShowContact, showContact } = props;
  const clickMonitor = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        clickMonitor.current &&
        !clickMonitor.current.contains(event.target)
      ) {
        setShowContact(false);
      }
    }

    window.addEventListener("mouseup", handleClickOutside);

    return () => {
      window.removeEventListener("mouseup", handleClickOutside);
    };
  }, [clickMonitor]);
  return (
    <>
      {showContact && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center flex-col">
          <div ref={clickMonitor} className="svg-bg border-white border p-12">
            <h2 className="text-xl">Contact me</h2>
            <h2 className="text-xl">Joey Dalrymple</h2>
            <h3 className="text-lg">
              {" "}
              <FontAwesomeIcon icon={faEnvelope} /> joeyedalrymple@gmail
            </h3>
            <h3 className="text-lg">
              <FontAwesomeIcon icon={faPhone} /> 316-609-9213
            </h3>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
