import React from "react";
import Navbar from "./components/Navbar";
import SecOne from "./components/SecOne";
import SecTwo from "./components/SecTwo";
import SecThree from "./components/SecThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSeven from "./components/SectionSeven";
import GradientBox from "./components/GradientBox";
import RankSlider from "./components/RankSlider";
import SliderThird from "./components/SliderThird";
import GradientBoxTwo from "./components/GradientBoxTwo";
import ImageContainer from "./components/ImageContainer";
import GradientThird from "./components/GradientThird";
import ScrollButton from "./components/ScrollButton";
import FooterOne from "./components/FooterOne";
import FooterTwo from "./components/FooterTwo";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSign from "./components/LoginSign";
import PageNotFound from "./components/PageNotFound";



const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SecOne />
                <SecTwo />
                <SecThree />
                <SectionFour />
                <SectionFive />
                <GradientBox />
                <SectionSeven />
                <RankSlider />
                <SliderThird />
                <GradientBoxTwo />
                <ImageContainer />
                <GradientThird />
                <FooterOne />
              </>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<LoginSign/>}/>
          <Route path="/*" element={<PageNotFound/>}/>
        </Routes>
        <FooterTwo />
        <ScrollButton />
      </Router>
    </>
  );
};

export default App;

