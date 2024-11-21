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
    <div className="h-full">
      <div className="w-[17rem] h-[39.5rem] bg-[#F2EAE1] flex flex-col items-center">
        <h2 className="text-2xl mt-6">CRUD OPERATIONS</h2>
        <img
          className="w-[7rem] h-[7rem] mt-9 object-cover overflow-hidden rounded-full"
          src={profilE}
          alt="profileIMG"
        />
        <h5 className="text-xl mt-2">Muhammad Numan</h5>
        <p className="text-lg text-[#F2CB05] ">Admin</p>
        <HashLink to={"/#home"}>
          <button class="cursor-pointer flex justify-center items-center mt-9 w-[120px] h-[35px] hover:bg-[#FEAF00] transition-colors duration-300 rounded ">
            <TiHomeOutline className="mt-1 mr-2" /> Home
          </button>
        </HashLink>

        <Link to={"/student"}>
          <button class="cursor-pointer flex justify-center items-center mt-9 w-[120px] h-[35px] hover:bg-[#FEAF00] transition-colors duration-300 rounded">
            <PiStudentLight className="mt-1 mr-2" /> Student
          </button>
        </Link>
        <Link to={"/Course"}>
          <button class="cursor-pointer flex justify-center items-center mt-9 w-[120px] h-[35px] hover:bg-[#FEAF00] transition-colors duration-300 rounded">
            <PiTagChevron className="mt-1 mr-2 rotate-[270deg]" />
            Course
          </button>
        </Link>
        <Link to={"/payment"}>
          <button class="cursor-pointer flex justify-center items-center mt-9 w-[120px] h-[35px] hover:bg-[#FEAF00] transition-colors duration-300 rounded">
            <LuBadgeDollarSign className="mt-1 mr-2" />
            Payment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
