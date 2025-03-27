import About from "@/components/landing/About";
import Footer from "@/components/landing/Footer";
import Location from "@/components/landing/Location";
import TopBar from "@/components/TopBar";
import React from "react";

const about = `Golden Penny is one of the largest food brands in Nigeria,offering great tasting and nutritious products at affordable prices. Our products are made from some of the finest raw materials and remain the preferred choice amongst consumers and industrial users like bakeries and confectioners.`;

const heritage = `For generations, families across Nigeria have continued to enjoy the rich and fulfilling taste of our Golden Penny brands while creating fond and lasting memories. From our variety of prime wheat flour which remains a delight for baking to other family favourites like pasta, noodles, cooking oils, sugar, margarine and spreads to several options for ball foods, including Garri, Golden Penny products remain the ideal choice for great-tasting and nutritious food.`;
export default function about_us() {
  return (
    <div className=" bg-white">
      {/* <div className=" "> */}
        <TopBar />
      {/* </div> */}

      <div className=" pt-40 flex justify-center items-center bg-[url('/family.png')] bg-cover">
        <div className=" flex flex-col gap-9 w-10/12">
          <div className="  text-6xl font-extrabold text-amber-200 my-9 font-mono">
            About Us
          </div>
          <div className=" w-full ">
            <div className=" w-full p-6 font-mono text-white text-xl bg-lime-700">
              {about}
            </div>
            <div className=" w-full p-8 bg-white flex flex-col gap-6">
              <div className=" flex gap-4">
                <div className=" text-amber-900 text-xl w-1/12">Heritage</div>
                <div className=" w-11/12 text-lg font-sans">{heritage}</div>
              </div>
              <div className=" flex gap-4">
                <div className=" text-amber-900 text-xl w-1/12">
                  A rich history of quality and flavour
                </div>
                <div className="w-11/12 text-lg font-sans">{heritage} Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolores similique necessitatibus ducimus dignissimos dicta, deleniti, adipisci temporibus dolore officiis odio fuga debitis officia, repellat magnam nisi iure veniam nemo.</div>
              </div>
              <div className=" flex gap-4">
                <div className=" w-1/12"></div>
                <div className=" h-72 w-11/12 border-2"></div>
              </div>
              <div className=" flex gap-4">
                <div className=" text-amber-900 text-xl w-1/12">
                  History of Flour Mills of Nigeria Plc
                </div>
                <div className="w-11/12 text-lg font-sans">{heritage} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ipsum provident ipsa id rerum porro ab! Harum, itaque optio error ipsa facilis aspernatur eveniet expedita laboriosam neque deleniti nulla dolores.</div>
              </div>
              <div className=" flex gap-4 ">
                <div className=" w-1/12"></div>
                <div className="text-lime-600 font-bold text-2xl w-11/12 ">
                  <a href=""> Explore More Of Our History </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Location />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
