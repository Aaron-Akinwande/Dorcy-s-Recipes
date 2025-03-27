import Card from "@/components/Card";
import Footer from "@/components/landing/Footer";
import TopBar from "@/components/TopBar";
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
        <div className="bg-[url('/semo.png')] flex justify-center items-center w-full h-44 bg-gray-700 text-5xl font-extrabold text-amber-200  font-mono">
          Recipes
        </div>
        <div className="  flex justify-center items-center ">
          <div className="flex flex-col gap-9 w-10/12 ">
            <div className=" bg-amber-300 cursor-pointer text-white text-lg font-semibold w-fit py-2 px-4 rounded-xl ">
              Choose Brand Category
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
      <Footer/>
    </div>
  );
}
