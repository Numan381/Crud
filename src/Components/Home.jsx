import React,{useState, useEffect} from "react";
import { employeeData } from './EmployeeData';
import { Link } from "react-router-dom";
import pi from "../assets/bookmark 1.svg";
import gra from "../assets/graduation-cap 1.svg";
import us from "../assets/usd-square 1.svg";

const Home = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (employeeData && employeeData.length > 0) {
      setCount(employeeData.length);
    }
  }, []);


  return (
    <div className="flex w-[63rem] h-full space-x-[4rem] mt-[10rem]">
      <Link to="/student">
        <div
          class="flex flex-col w-[15rem] ml-[5rem] h-[9rem] bg-[#F0F9FF] rounded"
        >
          <img src={gra} alt="courseImg" className="w-9 mt-7 ml-6" />
          <p class="ml-6 mt-2">Student {count}</p>
        </div>
      </Link>
      <Link to="/course">
        <div
          class="flex flex-col w-[15rem] h-[9rem] bg-[#FEF6FB] rounded"
        >
          <img src={pi} alt="courseImg" className="w-6 mt-7 ml-6" />
          <p class="ml-6 mt-2">Course {count}</p>
        </div>
      </Link>
      <Link to="/payment">
        <div
          class="flex flex-col w-[15rem] h-[9rem] bg-[#FEFBEC] rounded"
        >
          <img src={us} alt="courseImg" className="w-6 mt-7 ml-6" />
          <p class="ml-6 mt-2">Payment</p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
