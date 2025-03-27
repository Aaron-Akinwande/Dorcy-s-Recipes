import Footer from "@/components/landing/Footer";
import TopBar from "@/components/TopBar";
import React from "react";

const nood = [
  {
    id: 1,
    name: "Golden Penny Noodles",
    type: "Noodles",
    image: "/noodles1.png",
  },
  {
    id: 2,
    name: "Golden Penny Ramen",
    type: "Noodles",
    image: "/noodle_goat_meat.jpg",
  },
  {
    id: 3,
    name: "Golden Penny Noodles",
    type: "Noodles",
    image: "/noodles1.png",
  },
  {
    id: 4,
    name: "Golden Penny Ramen",
    type: "Noodles",
    image: "/noodle_goat_meat.jpg",
  },
  {
    id: 5,
    name: "Golden Penny Noodles",
    type: "Noodles",
    image: "/noodles1.png",
  },
  {
    id: 6,
    name: "Golden Penny Ramen",
    type: "Noodles",
    image: "/noodle_goat_meat.jpg",
  },
  {
    id: 7,
    name: "Golden Penny Noodles",
    type: "Noodles",
    image: "/noodles1.png",
  },
  {
    id: 8,
    name: "Golden Penny Ramen",
    type: "Noodles",
    image: "/noodle_goat_meat.jpg",
  },
];

const about =
  "Golden Penny Noodles comes in four delicious flavours- Chicken, Goat Meat, Jollof Hot Hot & Jollof. Aromatic and rich in nutrients, Golden Penny Noodles are non-soggy and non-sticky, making for an enjoyable dining experience.";
export default function noodles() {
  return (
    <div>
      <TopBar />

      <div className="relative bg-[url('/noodlesBg.png')] bg-cover flex flex-col gap-5 ">
        <div className=" absolute inset-0 bg-black opacity-50"></div>
        <div className=" relative z-10 flex justify-center items-center mb-9 ">
          <div className="flex flex-col justify-center items-center gap-9 w-10/12">
            <div className="  text-6xl font-extrabold text-amber-200 mt-9 font-mono">
              Noodles
            </div>
            <div className=" w-full font-mono text-white text-xl">{about}</div>
            <div className="p-6 grid grid-cols-4 gap-10 bg-slate-50 rounded-lg ">
              {nood.map((prod) => (
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
  );
}
