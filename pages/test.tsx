import Card from "@/components/Card";
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
];

export default function home() {
  return (
    <div>
      <TopBar />

      <div className="p-4 grid grid-cols-3 gap-4 ">
        {products.map((item) => (
          <div key={item.id} onClick={undefined} className={``}>
            <Card image={item.image} name={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
