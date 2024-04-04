import React, { useEffect, useState } from "react";
import secOneFirst from "../assets/secOneFirst.webp";
import secOneSecond from "../assets/secOneSecond.webp";
import secOneThird from "../assets/secOneThird.webp";
import secOneFourth from "../assets/secOneFourth.webp";
import secOneFifth from "../assets/secOneFifth.webp";
import secOneSixth from "../assets/secOneSixth.webp";

const SecOne = () => {
  const [arr] = useState([
    secOneFirst,
    secOneSecond,
    secOneThird,
    secOneFourth,
    secOneFifth,
    secOneSixth,
  ]);
  const [img, setImg] = useState(secOneFirst);
  const [i, setI] = useState(0);

  useEffect(() => {
    let a =  setInterval(() => {
       checkInterval();
     }, 3000);
     return ()=> clearInterval(a)
   }, [i]);


  const slide = (e) => {
    setImg(e.target.alt);
    setI(arr.indexOf(e.target.alt));
  };

  const checkInterval = () => {
    setImg(arr[i]);
    setI(i >= 5 ? 0 : i + 1);
  };


  return (
    <>
      <div>
        <img src={img} alt="loading..." />
        <div className="slider">
          {arr.map((image, index) => (
            <img
              className="hoverImg"
              onClick={slide}
              src={image}
              alt={image}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SecOne;
