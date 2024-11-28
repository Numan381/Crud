import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import profilE from "../assets/IM.png";
import { TiHomeOutline } from "react-icons/ti";
import { PiTagChevron } from "react-icons/pi";
import { PiStudentLight } from "react-icons/pi";
import { LuBadgeDollarSign } from "react-icons/lu";

const Header = () => {
  return (
    <div className="h-[39.5rem] lg:h-full sm:flex sm:flex-col sm:justify-center sm:w-screen">
      <div className="lg:w-[17rem] sm:w-screen h-[39.5rem] lg:h-[49rem] bg-[#F2EAE1] flex flex-col items-center">
        <h2 className="text-2xl mt-6 animate-scroll whitespace-nowrap">CRUD OPERATIONS</h2>
        <img
          className="w-[7rem] h-[7rem] mt-9 object-cover  aspect-square rounded-full"
          src={profilE}
          alt="profileIMG"
        />
        <h5 className="text-xl mt-2">Muhammad Numan</h5>
        <p className="text-lg text-[#F2CB05] ">Admin</p>
        <HashLink to={"/#home"}>
          <button class="cursor-pointer flex justify-center items-center mt-9 w-[120px] h-[35px] hover:bg-[#FEAF00] transition-colors duration-300 rounded ">
            <TiHomeOutline className="mt-1 mr-1 ml-[-3px] " /> Home
          </button>
        </HashLink>

        <Link to={"/student"}>
          <button class="cursor-pointer flex justify-center items-center mt-9 ml-2 w-[120px] h-[35px] hover:bg-[#FEAF00] transition-colors duration-300 rounded">
            <PiStudentLight className="mt-1 mr-1 stroke-[6]" /> Student
          </button>
        </Link>
        <Link to={"/Course"}>
          <button class="cursor-pointer flex justify-center items-center mt-9 w-[120px] h-[35px] hover:bg-[#FEAF00] transition-colors duration-300 rounded">
            <PiTagChevron className="mt-1 mr-1 rotate-[270deg] stroke-[6]" />
            Course
          </button>
        </Link>
        <Link to={"/payment"}>
          <button class="cursor-pointer flex justify-center items-center mt-9 ml-3 w-[120px] h-[35px] hover:bg-[#FEAF00] transition-colors duration-300 rounded">
            <LuBadgeDollarSign className="mt-1 mr-1" />
            Payment
          </button>
        </Link>
        <button class="cursor-pointer flex justify-center items-center mt-[5rem] ml-3 w-[120px] h-[35px] hover:bg-[#FEAF00] transition-colors duration-300 rounded">
            Logout
          </button>
      </div>
    </div>
  );
};

export default Header;
