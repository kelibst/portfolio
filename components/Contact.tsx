import React from "react";
import Style from "../styles/Home.module.css";

import { IoCall } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
const Contact = () => {
  return (
    <div className="block max-w-screen-sm text-white" id="contact">
      <h6 className="lg:text-4xl text-3xl lg:leading-none text-center my-8 font-bold font-Rubik">
        Contact me
      </h6>
      <div className="flex justify-around">
        <div className="flex flex-row items-center mr-4">
          <div
            className={[Style.bgDusk, "w-16 icons, p-6 rounded-full"].join(" ")}
          >
            <IoCall className="text-white text-2xl" />
          </div>
          <div className="flex flex-col ml-4">
            <h6 className="text-lg font-bold">Call Me</h6>
            <p className="text-sm text-blue-400 underline hover:text-blue-200 font-bold">
              +233546249862
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center mr-4">
          <div
            className={[Style.bgDusk, "w-16 icons, p-6 rounded-full"].join(" ")}
          >
            <IoMailSharp className="text-white text-2xl" />
          </div>
          <div className="flex flex-col ml-4">
            <h6 className="text-lg font-bold">Mail Me</h6>
            <p className="text-sm text-blue-400 underline hover:text-blue-200 font-bold">
              <a href="mailto:kbooster17@gmail.com">Kbooster17@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
