import React from "react";

export default function () {
  return (
    <div className="  w-screen grid grid-cols-3 items-center gap-5 p-6 bg-orange-100 ">
      <div className="  rounded-md">
        <img src="/pasta.png" alt="" className=" col-span-1 h-full w-full" />
      </div>

      <div className=" col-span-2 flex flex-col gap-4 ">
        <div className=" text-3xl font-extrabold fo">ABOUT US</div>
        <div className=" text-2xl font-medium text-black ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime omnis
          reiciendis modi nulla consectetur magnam hic optio impedit explicabo
          recusandae quam eligendi, vel veritatis, labore et harum voluptatem,
          alias inventore.
        </div>
        <div
          className="w-fit text-3xl bg-green-600 text-white flex justify-center
           items-center cursor-pointer p-4 rounded-lg "
        >
          <a href="#" className=" ">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
