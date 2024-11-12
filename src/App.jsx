import { useState } from "react";
import Home from "./Components/Home";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Student from "./Components/Student";
import Course from "./Components/Course";
import Payment from "./Components/Payment";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="flex">
        <div className="w-1/4 absolute">
          <Header />
        </div>
        <div className="w-3/4 h-full ml-[17rem] fixed">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/student" element={<Student/>} />
            <Route path="/course" element={<Course/>} />
            <Route path="/payment" element={<Payment/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
