import React from "react";

export default function Footer() {
  return (
    <div className=" p-5 px-8 bg-black">
      <div className=" grid grid-cols-4 gap-2 text-xl font-bold text-gray-500">
        <div className=" flex justify-center">Disclaimer</div>
        <div className=" flex justify-center">Reach Us</div>
        <div className=" flex justify-center">Email</div>
        <div className=" flex justify-center">Links</div>
      </div>
      <div className=" grid grid-cols-4 text-lg cursor-pointer text-white ">
        <div className="text-gray-500 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy
          nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </div>
        <div className=" flex flex-col items-center">
          <div>+2341123456789</div>
          <div>+2340987654321</div>
        </div>
        <div className=" flex justify-center">goldenpennyfoods@fmnplc.com</div>
        <div className=" flex flex-col justify-start items-center">
          <div>Our Brands</div>
          <div>Recipes</div>
          <div>Contact Us</div>
          <div>Corporate</div>
          <div>Careers</div>
          <div>The Board</div>
        </div>
      </div>
    </div>
  );
}
