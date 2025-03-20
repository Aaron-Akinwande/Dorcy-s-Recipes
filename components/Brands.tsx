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
  { id: 1, name: "Spaghetti", type: "Pasta", image: "./spag1.png" },
  { id: 2, name: "Macaroni", type: "Pasta", image: "./spag1.png" },
  { id: 11, name: "Spaghetti", type: "Pasta", image: "./spag1.png" },
  { id: 22, name: "Macaroni", type: "Pasta", image: "./spag1.png" },
  {
    id: 3,
    name: "Instant Noodles",
    type: "Noodles",
    image: "./spag1.png",
  },
  { id: 4, name: "Ramen", type: "Noodles", image: "./spag1.png" },
  { id: 5, name: "Meatballs", type: "Ball Foods", image: "./spag1.png" },
  { id: 6, name: "Dumplings", type: "Ball Foods", image: "./spag1.png" },
  {
    id: 7,
    name: "Vegetable Oil",
    type: "Oil and Spreads",
    image: "./spag1.png",
  },
  { id: 8, name: "Butter", type: "Oil and Spreads", image: "./spag1.png" },
  { id: 9, name: "Wheat Flour", type: "Flour", image: "./spag1.png" },
  { id: 10, name: "Corn Flour", type: "Flour", image: "./spag1.png" },
  { id: 11, name: "Brown Sugar", type: "Sugar", image: "./spag1.png" },
  { id: 12, name: "White Sugar", type: "Sugar", image: "./spag1.png" },
  { id: 13, name: "Oatmeal", type: "Cereal", image: "./spag1.png" },
  { id: 14, name: "Cornflakes", type: "Cereal", image: "./spag1.png" },
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
            } outline-none w-full rounded-t-3xl flex items-center justify-center cursor-pointer`}
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
              <div className=" font-semibold text-xl font-mono">{fd.name}</div>
              <div className=" cursor-pointer bg-yellow-400 font-semibold text-lg rounded-lg w-full flex justify-center p-3 hover:bg-black hover:text-white">
                {" "}
                View product
              </div>
            </div>
          ))}
        </div>
        <div className=" font-bold text-2xl text-white border-b-[3px] border-white cursor-pointer">
          {" "}
          VIEW ALL PRODUCTS{" "}
        </div>
      </div>
    </div>
  );
}
