import React from "react";
import Button from "./Button";
import Heading from "./Heading";

const SecTwo = () => {
  return (
    <>
    <div className="w-[90%] mx-auto mb-12"><Heading headingText={"Shop products"}/></div>
      <div className="flex justify-evenly items-center w-[70%] btnWrap mx-auto mb-6">
        <Button btnText={"Most popular"} />
        <Button btnText={"What's new"} />
        <Button btnText={"Bestseller"} />
      </div>
    </>
  );
};
export default SecTwo;
