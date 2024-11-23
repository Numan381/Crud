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
    <div className="h-[39.5rem] overflow-y-auto overflow-x-hidden w-[63rem] flex flex-col items-center">
      <div className="flex mt-5 gap-x-[7rem] h-[9vh]">
        <div>
          <label className="">Name:</label>
          <input
            className="border"
            type="text"
            placeholder="Enter ur name"
            onChange={(e) => dispatch(updateName(e.target.value))}
            value={name}
          />
        </div>
        <div>
          <label>Instructor:</label>
          <input
            className="border"
            type="text"
            placeholder="Enter ur Instructor"
            onChange={(e) => dispatch(updateInstructor(e.target.value))}
            value={instructor}
          />
        </div>
        <div>
          <label>level:</label>
          <input
            className="border"
            type="text"
            placeholder="Enter ur Level"
            onChange={(e) => dispatch(updateLevel(e.target.value))}
            value={level}
          />
        </div>
      </div>
      <div className="flex ml-auto mt-3 gap-x-4 mb-4 mr-9">
        <button
          onClick={saveData}
          className="flex items-center px-8 py-1 w-[6rem] border hover:bg-[#FEAF00] hover:text-white  rounded-lg"
        >
          {isUpdate ? "Update" : "Save"}
        </button>
        <button
          onClick={() => dispatch(handleClearCourse())}
          className="flex items-center px-8 py-1 w-[6rem] border hover:bg-[#FEAF00] hover:text-white  rounded-lg"
        >
          Clear
        </button>
      </div>
      <div className="bg-[#E5E5E5] w-[63rem] h-[140vh] flex flex-col">
            <div className="flex mt-6 list-none px-4 py-4 bg-gray-400 font-bold text-center h-[3.5rem]">
              <li className="w-[10%]">Sr.No</li>
              <li className="w-[10%]">ID</li>
              <li className="w-[20%]">Name</li>
              <li className="w-[20%]">Instructor</li>
              <li className="w-[20%]">level</li>
              <li className="w-[20%]">Action</li>
            </div>
          <div className="mt-3">
            {courseData.map((item, index) => {
              return (
                <div key={index} className="flex list-none bg-white border rounded-3xl mb-1 px-4 py-5 h-[4rem] text-center items-center" >
                  <li className="w-[10%]">{index + 1}</li>
                  <li className="w-[10%]">{item.id}</li>
                  <li className="w-[20%]">{item.name}</li>
                  <li className="w-[20%]">{item.instructor}</li>
                  <li className="w-[20%]">{item.level}</li>
                  <li className="w-[20%]">
                    <div className="flex justify-center items-center space-x-3">
                      <button
                        onClick={() =>
                          dispatch(handleEditCourse({ id: item.id }))
                        }
                        class="flex items-center px-6 py-1 w-[4.5rem] border border-white hover:bg-[#FEAF00] hover:text-white  rounded-lg"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteItem(item.id)}
                        class="flex items-center px-2 py-1 w-[6rem] border border-white hover:bg-[#FEAF00] hover:text-white  rounded-lg"
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
