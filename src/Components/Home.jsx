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
    <div className="flex lg:flex-row xl:gap-x-9 xl:ml-5 sm:flex-col sm:justify-center lg:w-[33rem] h-full sm:h-auto sm:space-y-3 mt-[6rem]">
      <Link to="/student">
        <div className="flex flex-col w-[15rem] sm:ml-[-18rem] lg:ml-[1rem] lg:mt-3 h-[9rem] bg-[#F0F9FF] rounded">
          <img src={gra} alt="courseImg" className="w-9 mt-7 ml-6" />
          <p className="ml-6 mt-2">Student {count}</p>
        </div>
      </Link>
      <Link to="/course">
        <div className="flex flex-col w-[15rem] sm:ml-[-18rem] lg:ml-5 ml-4 h-[9rem] bg-[#FEF6FB] rounded">
          <img src={pi} alt="courseImg" className="w-6 mt-7 ml-6" />
          <p className="ml-6 mt-2">Course {count}</p>
        </div>
      </Link>
      <Link to="/payment">
        <div className="flex flex-col lg:ml-5 lg:mr-2 w-[15rem] ml-4 sm:ml-[-18rem] h-[9rem] bg-[#FEFBEC] rounded">
          <img src={us} alt="courseImg" className="w-6 mt-7 ml-6" />
          <p className="ml-6 mt-2">Payment</p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
