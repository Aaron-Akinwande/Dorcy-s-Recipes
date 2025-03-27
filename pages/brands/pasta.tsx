import Footer from "@/components/landing/Footer";
import TopBar from "@/components/TopBar";
import React from "react";


const pastas = [
  {
    id: 1,
    name: "Golden Penny Spaghetti",
    type: "Pasta",
    image: "/spag1.png",
  },
  {
    id: 2,
    name: "Golden Penny Macaroni",
    type: "Pasta",
    image: "/twist1.png",
  },
  {
    id: 3,
    name: "Golden Penny Spaghetti",
    type: "Pasta",
    image: "/spag1.png",
  },
  {
    id: 4,
    name: "Golden Penny Macaroni",
    type: "Pasta",
    image: "/twist1.png",
  },
  {
    id: 5,
    name: "Golden Penny Spaghetti",
    type: "Pasta",
    image: "/spag1.png",
  },
  {
    id: 6,
    name: "Golden Penny Macaroni",
    type: "Pasta",
    image: "/twist1.png",
  },
  {
    id: 7,
    name: "Golden Penny Spaghetti",
    type: "Pasta",
    image: "/spag1.png",
  },
  {
    id: 8,
    name: "Golden Penny Macaroni",
    type: "Pasta",
    image: "/twist1.png",
  },
  {
    id: 9,
    name: "Golden Penny Spaghetti",
    type: "Pasta",
    image: "/spag1.png",
  },
  {
    id: 10,
    name: "Golden Penny Macaroni",
    type: "Pasta",
    image: "/twist1.png",
  },
  {
    id: 11,
    name: "Golden Penny Spaghetti",
    type: "Pasta",
    image: "/spag1.png",
  },
  {
    id: 12,
    name: "Golden Penny Macaroni",
    type: "Pasta",
    image: "/twist1.png",
  },
];

const about =
  "Every variant of Golden Penny Pasta is made from the highest quality wheat and enriched with essential vitamins. Our Pasta lineup includes Spaghetti, Spaghettini, Macaroni and Couscous.";

export default function pasta() {
  return (
    <div>
      <TopBar />

      <div className="relative bg-[url('/pastaBg.jpg')] bg-cover flex flex-col gap-5 ">
        <div className=" absolute inset-0 bg-black opacity-50"></div>
        <div className=" relative z-10 flex justify-center items-center mb-9 ">
          <div className="flex flex-col justify-center items-center gap-9 w-10/12">
            <div className="  text-6xl font-extrabold text-amber-200 mt-9 font-mono">
              Pasta
            </div>
            <div className=" w-full font-mono text-white text-xl">{about}</div>
            <div className="p-6 grid grid-cols-4 gap-10 bg-slate-50 rounded-lg ">
              {pastas.map((prod) => (
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
