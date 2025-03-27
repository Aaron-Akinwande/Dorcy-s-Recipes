import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Sidebar from "../Sidebar";

export default function () {
  const [open, setOpen] = useState(false);

  return (
    <div className=" bg-[url('/semo.png')] h-screen  bg-cover">
      <div className="flex justify-between p-5  h-full">
        <div className="h-48 w-[300px]">
          <img src="/goldenpenny.png" alt="" className=" w-full" />
        </div>

        <div className="flex flex-col justify-between items-center ">
          <div
            className="bg-white flex gap-3 shadow-lg rounded-3xl
            w-fit h-14 p-4 cursor-pointer 
            items-center"
          >
            <div className=" text-black font-serif text-xl font-semibold">
              Menu
            </div>
            <div
              className=" text-xl text-red-600 "
              onClick={() => setOpen(!open)}
            >
              <GiHamburgerMenu />
            </div>
          </div>

          <div className="flex flex-col gap-2 ">
            <div className=" bg-white text-black p-2 text-2xl rounded-lg h-fit w-fit cursor-pointer">
              <FaFacebook />
            </div>
            <div className=" bg-white text-black p-2 text-2xl rounded-lg h-fit w-fit cursor-pointer">
              <FaTwitter />
            </div>
            <div className=" bg-white text-black p-2 text-2xl rounded-lg h-fit w-fit cursor-pointer">
              <FaLinkedin />
            </div>
            <div className=" bg-white text-black p-2 text-2xl rounded-lg h-fit w-fit cursor-pointer">
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
      <Sidebar isOpen={open} onClose={() => setOpen(!open)} />
    </div>
  );
}
