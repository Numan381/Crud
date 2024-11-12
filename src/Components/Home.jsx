import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import { PiTagChevron } from "react-icons/pi";
import { PiStudentLight } from "react-icons/pi";
import { LuBadgeDollarSign } from "react-icons/lu";

const Home = () => {
  const navigate = useNavigate();
  const goToStudentPage=()=>{
    navigate('/student')
  }
  const goToCoursePage=()=>{
    navigate('/course')
  }
  const goToPaymentPage=()=>{
    navigate('/payment')
  }


  return (

      <div   style={{
        background: "linear-gradient(to right, #9EF8EE 40%, #00635A 100%)",
      }} className="grid grid-cols-2 w-[63rem] h-full">
        <Link to="/student">
        <div onClick={goToStudentPage} class="bg-sky-700 rounded-2xl w-[20.1rem] mt-9 ml-[7rem] shadow-sm shadow-sky-500 outline outline-slate-400 h-[14.1rem] -outline-offset-8">
          <div class="group overflow-hidden  relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12 flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
            <div class="z-10 flex items-center gap-2">
              <span class="text-slate-400 text-6xl font-bold">
                {" "}
                <PiStudentLight />
              </span>
              <p class="text-gray-50">Student</p>
            </div>
          </div>
        </div>
        </Link>
        <Link to="/course">
        <div onClick={goToCoursePage} class="bg-sky-700 rounded-2xl shadow-sm mt-9 ml-[7rem] w-[20.1rem] h-[14.1rem] shadow-sky-500 outline outline-slate-400 -outline-offset-8">
          <div class="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12 flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
            <div class="z-10 flex items-center gap-2">
              <span class="text-slate-400 text-6xl font-bold">
                {" "}
                <PiTagChevron className="rotate-[270deg]" />
              </span>
              <p class="text-gray-50">Course</p>
            </div>
          </div>
        </div>
        </Link>
        <Link to="/payment">
        <div onClick={goToPaymentPage} class="bg-sky-700 col-span-2 flex justify-center ml-[20.5rem] w-[20.1rem] rounded-2xl shadow-sm h-[14.1rem] shadow-sky-500 outline outline-slate-400 -outline-offset-8">
          <div class="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12 flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
            <div class="z-10 flex items-center gap-2">
              <span class="text-slate-400 text-6xl font-bold">
                {" "}
                <LuBadgeDollarSign />
              </span>
              <p class="text-gray-50">Payment</p>
            </div>
          </div>
        </div>
        </Link>
      </div>
   
  );
};

export default Home;
