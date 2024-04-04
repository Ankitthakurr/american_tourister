import React from "react";
import navLogo from "../assets/navLogo.png";
import shopColor from "../assets/shopColor.jpg";
import {
  FaCartArrowDown,
  FaMapMarkerAlt,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Tostify from "./Tostify";

const Navbar = () => {
  return (
    <>
      <div
        className="text-center font-bold"
        style={{ background: "linear-gradient(90deg,#d11e47,#ef7922)" }}
      >
        <p className="text-white">Free delivery on all orders in India</p>
      </div>
      <nav className="flex justify-around items-center py-3 gap-x-10 sticky top-0 bg-white z-10">
        <Link to="/">
          <img className="max-w-[150px]" src={navLogo} alt="loading" />
        </Link>
        <ul className="flex justify-center items-center gap-x-8">
          <li>
            <img className="max-w-40" src={shopColor} alt="loading" />
          </li>
          <li>
            <Link
              className="font-medium"
              style={{ color: "rgb(51, 51, 51)" }}
            >
              Lugage
            </Link>
          </li>
          <li>
            <Link
              className="font-medium"
              style={{ color: "rgb(51, 51, 51)" }}
            >
              Backpacks
            </Link>
          </li>
          <li>
            <Link
              className="font-medium"
              style={{ color: "rgb(51, 51, 51)" }}
            >
              Duffles
            </Link>
          </li>
          <li>
            <Link
              className="font-medium"
              style={{ color: "rgb(51, 51, 51)" }}
              href=""
            >
              Browse More
            </Link>
          </li>
          <li>
            <Link
              className="font-medium"
              style={{ color: "rgb(51, 51, 51)" }}
            >
              Discover
            </Link>
          </li>
        </ul>
        <ul className="flex justify-center items-center gap-x-6">
          <li>
            <Link
              className="text-2xl"
              style={{ color: "rgb(51, 51, 51)" }}
            >
              <FaMapMarkerAlt />
            </Link>
          </li>
          <li className="relative">
            <Link
            to="/register"
              className="text-2xl"
              style={{ color: "rgb(51, 51, 51)" }}
            >
              <FaUser />
             {/* <span className="absolute right-2 top-7"> <Tostify/></span> */}
            </Link>
          </li>
          <li>
            <Link
              className="text-2xl"
              style={{ color: "rgb(51, 51, 51)" }}
              href=""
            >
              <FaSearch />
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="text-2xl relative"
              style={{ color: "rgb(51, 51, 51)" }}
            >
              <FaCartArrowDown />
              {/* <div className="h-[18px] top-0 end-0 w-[18px] absolute rounded-full bg-red-600 text-white text-sm text-center">1</div> */}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
