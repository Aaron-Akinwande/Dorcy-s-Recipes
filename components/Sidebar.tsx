import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { CiCircleChevDown } from "react-icons/ci";

export default function Sidebar({ isOpen, onClose }: any) {

  const [expand, setExpand] = useState(false)

  return (
    <div
      className={` fixed top-0 w-[300px] h-full cursor-pointer bg-lime-600 text-white transition-right duration-300 ease-in-out ${
        isOpen ? "right-0" : "-right-[300px]"
      }`}
    >
      <div
        className="flex p-4 w-full justify-end text-3xl hover:text-black "
        onClick={onClose}
      >
        <MdClose />
      </div>

      <div className=" font-mono flex flex-col justify-start text-white  text-2xl font-bold p-7 gap-7">
        <div className="hover:text-black">
          <a href="/">HOME</a>
        </div>
        <div className="hover:text-black">
          <a href="/about_us">ABOUT US</a>
        </div>
        <div className=" flex flex-col gap-2">
         <div className="hover:text-black flex justify-between" onClick={() => (setExpand(!expand))}>OUR BRANDS <CiCircleChevDown /></div> 
          <div className={` ${ expand ? "flex" : " hidden"} text-base font-medium px-5  flex-col gap-3`}>
            <div className="hover:text-black"><a href="/brands">Pasta</a></div>
            <div className="hover:text-black"><a href="/brands">Noodles</a></div>
            <div className="hover:text-black"><a href="/brands">Ball Foods</a></div>
            <div className="hover:text-black"><a href="/brands">Oils and Spreads</a></div>
            <div className="hover:text-black"><a href="/brands">Flour</a></div>
            <div className="hover:text-black"><a href="/brands">Sugar</a></div>
            <div className="hover:text-black"><a href="/brands">Cereal</a></div>
          </div>
        </div>
        <div className="hover:text-black">
          <a href="/recipes">RECIPES</a>
        </div>
        <div className="hover:text-black">
          <a href="">MEDIA</a>
        </div>
        <div className="hover:text-black">
          <a href="">STORE LOCATOR</a>
        </div>
        <div className="hover:text-black">
          <a href="">CONTACT US</a>
        </div>
        <div className="hover:text-black">
          <a href="">BLOG</a>
        </div>
      </div>
    </div>
  );
}
