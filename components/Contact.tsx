import React from "react";
import Style from "../styles/Home.module.css";

import { IoCall } from "react-icons/io5";
const Contact = () => {
  return (
    <div className="block max-w-screen-sm text-white" id="contact">
      <h6 className="lg:text-4xl text-3xl lg:leading-none text-center my-8 font-bold font-Rubik">
        Contact me
      </h6>
      <div className="flex justify-between">
        <div className="callme">
          <div
            className={[Style.bgDusk, "w-14 icons, p-8 rounded-full"].join(" ")}
          >
            <IoCall className="text-white text-2xl" />
          </div>
          <div className="flex flex-col">
            <h6 className="text-md text-bold">Call Me</h6>
            <p className="text-sm">+233546249862</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
