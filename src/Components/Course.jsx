import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import {
  handleEditCourse,
  handleClearCourse,
  handleSaveCourse,
  handleUpdateCourse,
  handleDeleteCourse,
  updateName,
  updateInstructor,
  updateLevel,
} from "../mySlice";

const Course = () => {
  const dispatch = useDispatch();
  const { courseData, isUpdate, name, instructor, level, selectedId } =
    useSelector((state) => state.myData);

  const saveData = () => {
    if (name.length > 20) {
      toast.error("You can't exceed than 20 character in name!");
      return;
    };
    if (instructor.length > 20) {
      toast.error("You can't exceed than 20 character in instructor!");
      return;
    };
    if (level.length > 20) {
      toast.error("You can't exceed than 20 character in level!");
      return;
    };
    if (name && instructor && level) {
      if (isUpdate) {
        dispatch(
          handleUpdateCourse({ id: selectedId, name, instructor, level })
        );
        toast.success("Updated Successfully!");
      } else {
        dispatch(handleSaveCourse({ name, instructor, level }));
        toast.success("Saved Successfully!");
      }
    } else {
      toast.error("All fields are required!");
    }
  };

  const handleDeleteItem = (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (isConfirmed) {
      dispatch(handleDeleteCourse({ id }));
      toast.success("Deleted successfully!");
    }
  };

  return (
    <div className="h-[39.5rem] overflow-y-auto overflow-x-hidden sm:w-[83rem] flex flex-col items-center">
      <div className="flex lg:flex-row sm:flex-col sm:mr-[8rem] sm:gap-y-2 mt-5 lg:ml-[5rem] lg:gap-x-[1rem] xl:gap-x-[4rem] h-[9vh]">
        <div className="lg:flex xl:ml-12">
          <label className="">Name:</label>
          <input
            className="border sm:ml-6 lg:ml-2"
            type="text"
            placeholder="Enter ur name"
            onChange={(e) => dispatch(updateName(e.target.value))}
            value={name}
          />
        </div>
        <div className="lg:flex">
          <label>Instructor:</label>
          <input
            className="border lg:ml-2"
            type="text"
            placeholder="Enter ur Instructor"
            onChange={(e) => dispatch(updateInstructor(e.target.value))}
            value={instructor}
          />
        </div>
        <div className="lg:flex">
          <label>level:</label>
          <input
            className="border sm:ml-9 lg:ml-2"
            type="text"
            placeholder="Enter ur Level"
            onChange={(e) => dispatch(updateLevel(e.target.value))}
            value={level}
          />
        </div>
      </div>
      <div className="flex lg:flex-row sm:flex-col sm:mr-[11rem] sm:mt-[-55px] lg:mt-7 lg:mr-14 xl:mr-12 sm:gap-y-6 ml-auto mt-3 gap-x-4 mb-4 mr-11">
        <button
          onClick={saveData}
          className="flex items-center lg:px-6 py-1 xl:w-[6rem] sm:w-[4rem] sm:px-4 border hover:bg-[#FEAF00] hover:text-white  rounded-lg"
        >
          {isUpdate ? "Update" : "Save"}
        </button>
        <button
          onClick={() => dispatch(handleClearCourse())}
          className="flex items-center xl:px-7 py-1 xl:w-[6rem] sm:w-[4rem] sm:px-4 border hover:bg-[#FEAF00] hover:text-white  rounded-lg"
        >
          Clear
        </button>
      </div>
      <div className="bg-[#E5E5E5] sm:w-[40rem] md:w-[48rem] lg:h-[140vh] lg:flex lg:flex-col lg:w-full xl:w-full">
            <div className="flex mt-6 list-none px-4 py-4 bg-gray-400 font-bold text-center h-[3.5rem] lg:w-full xl:w-full">
              <li className="sm:w-[5%] md:w-[7%]">Sr.No</li>
              <li className="sm:w-[7%]">ID</li>
              <li className="sm:w-[20%] md:w-[20%]">Name</li>
              <li className="sm:w-[25%] md:w-[30%]">Instructor</li>
              <li className="sm:w-[12%] md:w-[15%]">level</li>
              <li className="sm:w-[20%] lg:w-[30%]">Action</li>
            </div>
          <div className="mt-3">
            {courseData.map((item, index) => {
              return (
                <div key={index} className="flex list-none bg-white border rounded-3xl mb-1 px-4 py-5 h-[4rem] text-center items-center" >
                  <li className="sm:w-[5%] md:w-[7%]">{index + 1}</li>
                  <li className="w-[7%]">{item.id}</li>
                  <li className="sm:w-[20%] md:w-[20%]">{item.name}</li>
                  <li className="sm:w-[25%] md:w-[30%]">{item.instructor}</li>
                  <li className="sm:w-[12%] md:w-[15%]">{item.level}</li>
                  <li className="sm:w-[20%] lg:w-[30%]">
                    <div className="flex justify-center items-center space-x-3">
                      <button
                        onClick={() =>
                          dispatch(handleEditCourse({ id: item.id }))
                        }
                        class="flex items-center px-6 py-1 sm:w-[3rem] xl:w-[6rem] xl:px-9 md:w-[5rem] md:px-5 border border-gray hover:bg-[#FEAF00] hover:text-white  rounded-lg"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteItem(item.id)}
                        class="flex items-center px-2 py-1 sm:w-[4rem] md:w-[6rem] md:px-3 xl:w-[6rem] xl:px-6 border border-gray hover:bg-[#FEAF00] hover:text-white  rounded-lg"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                </div>
              );
            })}
          </div>
      </div>
    </div>
  );
};

export default Course;
