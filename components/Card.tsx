import React from "react";

export default function Card({ image, name }: any) {
  return (
    <div>
      <div className=" ">
        <div className="shadow-xl  rounded-xl flex flex-col bg-white w-full">
          <div className=" w-fulloutline-dashed overflow-hidden rounded-t-xl ">
            <img className="" src={image} alt="" />
          </div>
          <div className=" flex flex-col gap-2 p-3">
            <div className=" text-lg font-semibold text-gray-500">
              November 28, 2024
            </div>
            <div className=" text-xl font-bold text-yellow-700">{name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
