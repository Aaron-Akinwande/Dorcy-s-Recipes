import React, { useState } from "react";

const brands = [
  { name: "Pasta", active: "true" },
  { name: "Noodles", active: "false" },
  { name: "Ball Foods", active: "false" },
  { name: "Oil and Spreads", active: "false" },
  { name: "Flour", active: "false" },
  { name: "Sugar", active: "false" },
  { name: "Cereal", active: "false" },
];

const products = [
  { id: 1, name: "Golden Penny Spaghetti", type: "Pasta", image: "./spag1.png" },
  { id: 2, name: "Golden Penny Macaroni", type: "Pasta", image: "./twist1.png" },
  { id: 11, name: "Golden Penny Spaghetti", type: "Pasta", image: "./spag1.png" },
  { id: 22, name: "Golden Penny Macaroni", type: "Pasta", image: "./twist1.png" },
  {
    id: 3,
    name: "Golden Penny Noodles",
    type: "Noodles",
    image: "./noodles1.png",
  },
  { id: 4, name: "Golden Penny Ramen", type: "Noodles", image: "./noodles1.png" },
  { id: 5, name: "Golden Penny Semolina", type: "Ball Foods", image: "./semo1.png" },
  { id: 6, name: "Golden Penny Amala", type: "Ball Foods", image: "./semo1.png" },
  {
    id: 7,
    name: "Golden Penny Vegetable Oil",
    type: "Oil and Spreads",
    image: "./oil1.png",
  },
  { id: 8, name: "Golden Penny Butter", type: "Oil and Spreads", image: "./oil1.png" },
  { id: 9, name: "Golden Penny Wheat Flour", type: "Flour", image: "./flour1.png" },
  { id: 10, name: "Golden Penny Corn Flour", type: "Flour", image: "./flour1.png" },
  { id: 11, name: "Golden Penny Brown Sugar", type: "Sugar", image: "./sugar.png" },
  { id: 12, name: "Golden Penny White Sugar", type: "Sugar", image: "./sugar.png" },
  { id: 13, name: "Golden Penny Oatmeal", type: "Cereal", image: "./cereal1.png" },
  { id: 14, name: "Golden Penny Cornflakes", type: "Cereal", image: "./cereal1.png" },
];

export default function Brands() {
  const [items, setItems] = useState(brands);
  const [foods, setFoods] = useState(
    products.filter((p) => p.type === "Pasta")
  );
  const handleClick = (name: any) => {
    const updatedBrands = items.map((item) =>
      item.name === name
        ? { ...item, active: "true" }
        : { ...item, active: "false" }
    );
    setItems(updatedBrands);
    console.log(updatedBrands);

    setFoods(products.filter((product) => product.type === name));
  };
  return (
    <div className=" flex flex-col">
      <div className=" p-7 text-center text-green-700 font-extrabold text-5xl">
        <div>OUR BRANDS</div>
      </div>

      <div className=" flex justify-between border-green-500 text-center text-2xl font-bold  px-14">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item.name)}
            className={` ${
              item.active === "true"
                ? "text-white bg-green-500"
                : "text-green-500"
            } outline-none w-full rounded-t-2xl flex items-center justify-center cursor-pointer`}
          >
            {item.name}
          </div>
        ))}
      </div>

      <div className=" p-4 bg-green-500 border-green-500 flex flex-col items-center justify-center gap-7">
        <div className="grid grid-cols-4 gap-5 p-4 w-full">
          {foods.map((fd) => (
            <div
              key={fd.id}
              className="w-full bg-white p-5 rounded-lg flex flex-col justify-center items-center gap-6"
            >
              <div>
                <img src={fd.image} alt="" />
              </div>
              <div className=" text-amber-900 font-semibold text-xl font-mono">{fd.name}</div>
              <div className="text-amber-900 cursor-pointer bg-yellow-400 font-semibold text-lg rounded-lg w-full flex justify-center p-3 hover:bg-black hover:text-white">
                {" "}
                View product
              </div>
            </div>
          ))}
        </div>
        <div className=" font-bold text-2xl text-white border-b-[3px] border-white cursor-pointer hover:text-black hover:border-black">
          {" "}
          VIEW ALL PRODUCTS{" "}
        </div>
      </div>
    </div>
  );
}
