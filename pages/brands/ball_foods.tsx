import Footer from "@/components/landing/Footer";
import TopBar from "@/components/TopBar";
import React from "react";

const food = [
  {
    id: 1,
    name: "Golden Penny Garri",
    type: "Ball Foods",
    image: "/garri.jpg",
  },
  {
    id: 2,
    name: "Golden Penny Semo",
    type: "Ball Foods",
    image: "/semo1.png",
  },
  {
    id: 3,
    name: "Golden Penny Garri",
    type: "Ball Foods",
    image: "/garri.jpg",
  },
  {
    id: 4,
    name: "Golden Penny Semo",
    type: "Ball Foods",
    image: "/semo1.png",
  },
  {
    id: 5,
    name: "Golden Penny Garri",
    type: "Ball Foods",
    image: "/garri.jpg",
  },
  {
    id: 6,
    name: "Golden Penny Semo",
    type: "Ball Foods",
    image: "/semo1.png",
  },
  {
    id: 7,
    name: "Golden Penny Garri",
    type: "Ball Foods",
    image: "/garri.jpg",
  },
  {
    id: 8,
    name: "Golden Penny Semo",
    type: "Ball Foods",
    image: "/semo1.png",
  },
];

const about =
  "Golden Penny Ball Foods are permanent fixtures on dining tables in homes and restaurants across Nigeria. Made from natural ingredients such as corn, wheat and cassava, our Ball Foods reflect the diversity of Nigeria’s food culture.";


export default function ball_foods() {
  return (
    <div>
    <TopBar />

    <div className="relative bg-[url('/semoBg.jpg')] bg-cover flex flex-col gap-5 ">
      <div className=" absolute inset-0 bg-black opacity-50"></div>
      <div className=" relative z-10 flex justify-center items-center mb-9 ">
        <div className="flex flex-col justify-center items-center gap-9 w-10/12">
          <div className="  text-6xl font-extrabold text-amber-200 mt-9 font-mono">
            Ball Foods
          </div>
          <div className=" w-full font-mono text-white text-xl">{about}</div>
          <div className="p-6 grid grid-cols-4 gap-10 bg-slate-50 rounded-lg ">
            {food.map((prod) => (
              <div
                key={prod.id}
                className="w-full shadow-xl bg-white p-5 rounded-lg flex flex-col justify-center items-center gap-6"
              >
                <div>
                  <img src={prod.image} alt="" />
                </div>
                <div className=" text-amber-900 font-semibold text-lg font-mono">
                  {prod.name}
                </div>
                <div className="text-white cursor-pointer bg-lime-700 font-semibold text-lg rounded-lg w-full flex justify-center p-3 hover:bg-black hover:text-white">
                  {" "}
                  View product
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}
