import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Student from "./Components/Student";
import Course from "./Components/Course";
import Payment from "./Components/Payment";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
    <Router>
      <div className="flex sm:flex-col sm:h-screen ">
        <div className="lg:w-1/4 lg:absolute sm:relative z-10 ">
          <Header />
        </div>
        <div className="lg:w-3/4 lg:h-full lg:fixed lg:ml-[17rem] sm:flex sm:justify-center sm:w-full sm:mt-[2rem]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/student" element={<Student />} />
            <Route path="/course" element={<Course />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </div>
      </div>
    <ToastContainer/>
    </Router>
    </>
  );
}

export default App;
