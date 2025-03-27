import Card from "@/components/Card";
import Footer from "@/components/landing/Footer";
import TopBar from "@/components/TopBar";
import { CiCircleChevDown } from "react-icons/ci";
import React from "react";

const products = [
  {
    id: 1,
    name: "Golden Penny Spaghetti",
    image: "./blacksoup.jpg",
  },
  {
    id: 2,
    name: "Golden Penny Macaroni",
    image: "./bitterleaf.jpg",
  },
  {
    id: 3,
    name: "Golden Penny Noodles",
    image: "./kuka.jpg",
  },
  {
    id: 1,
    name: "Golden Penny Spaghetti",
    image: "./ewedu.jpg",
  },
  {
    id: 2,
    name: "Golden Penny Macaroni",
    image: "./okra.jpg",
  },
  {
    id: 3,
    name: "Golden Penny Noodles",
    image: "./afang.jpg",
  },
  {
    id: 1,
    name: "Golden Penny Spaghetti",
    image: "./bitterleaf.jpg",
  },
  {
    id: 2,
    name: "Golden Penny Macaroni",
    image: "./kuka.jpg",
  },
  {
    id: 3,
    name: "Golden Penny Noodles",
    image: "./ewedu.jpg",
  },
];

export default function recipes() {
  return (
    <div>
      <TopBar />

      <div className=" flex flex-col gap-5">
        <div className="relative bg-[url('/foodtable.jpg')] bg-cover flex justify-center items-center w-full h-44 bg-gray-700 text-5xl font-extrabold text-amber-200  font-mono">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10">Recipes</div>
        </div>
        <div className="  flex justify-center items-center ">
          <div className="flex flex-col gap-9 w-10/12 ">
            <div className=" flex justify-between items-center gap-5 bg-amber-300 cursor-pointer text-white text-lg font-semibold w-fit py-2 px-4 rounded-xl ">
              <div>Choose Brand Category</div>
              <CiCircleChevDown />
            </div>
            <div className="py-6 grid grid-cols-3 gap-7 ">
              {products.map((item) => (
                <div key={item.id} onClick={undefined} className={``}>
                  <Card image={item.image} name={item.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
