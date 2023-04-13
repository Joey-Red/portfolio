import React from "react";
import Socials from "./Socials";
import Accolades from "./Accolades";

function Footer() {
  return (
    <div className="flex border-t min-h-12 flex-col lg:flex-row">
      {/* <div className="flex lg:w-1/3 "> */}
      {/* order-2 lg:order-1  */}
      <Socials />
      {/* </div> */}
      {/* <div className="border-b lg:border-b-0 lg:w-2/3 p-0 lg:p-8 flex justify-center items-center"> */}
      <Accolades />
      {/* </div> */}
    </div>
  );
}

export default Footer;
