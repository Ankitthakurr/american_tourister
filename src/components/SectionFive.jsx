import React from "react";
import Button from "./Button";
import Heading from "./Heading";
import image from "../assets/secFiveImage.webp"

const SectionFive = () => {
  return (
    <div className="flex justify-center items-center w-[95%] m-auto max-md:flex-col">
      <div className="w-3/5 clip-path max-md:w-11/12  ">
        <img className="w-full" src={image} alt="" />
      </div>
      <div className="w-2/5 flex flex-col justify-center gap-4 pr-10 max-lg:text-[10px] max-xl:text-sm max-[900px]:text-[7px] max-md:w-11/12 max-md:text-center">
        <Heading headingText={"New Arrivals"} />
        <p className="text-sm font-thin text-gray-700">
        Shop new carry-on luggage to backpacks. Freshen up your next trip with the latest in luggage and travel gear
        </p>
        <div>
          <Button btnText={"Shop Now"} />
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
