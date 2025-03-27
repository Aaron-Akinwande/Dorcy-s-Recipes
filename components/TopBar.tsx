import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdMenu, MdClose } from "react-icons/md";
import Sidebar from "./Sidebar";

export default function TopBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="z-20 sticky top-0">
      <div className="flex justify-between px-5 bg-lime-600 h-20">
        <div className=" px-20">
          <img src="/gpLogo.png" alt="" className="  h-48 " />
        </div>

        <div className="flex flex-col justify-between items-center py-3">
          <div
            className="bg-white flex gap-3 shadow-lg rounded-3xl
                    w-fit h-fit p-3 cursor-pointer 
                    items-center"
            onClick={() => setOpen(!open)}
          >
            <div className=" text-black font-serif text-2xl font-semibold">
              Menu
            </div>
            <div className=" text-2xl text-red-600 ">
              {open ? <MdClose /> : <GiHamburgerMenu />}
            </div>
          </div>
        </div>
      </div>

      <Sidebar isOpen={open} onClose={() => setOpen(!open)} />
    </div>
  );
}
