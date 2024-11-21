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
    <div className="h-full overflow-y-auto overflow-x-hidden w-[63rem] flex flex-col items-center">
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
          className="flex items-center px-8 py-1 w-[7rem] border hover:bg-[#FEAF00] hover:text-white  rounded-lg"
        >
          {isUpdate ? "Update" : "Save"}
        </button>
        <button
          onClick={() => dispatch(handleClearCourse())}
          className="flex items-center px-8 py-1 w-[7rem] border hover:bg-[#FEAF00] hover:text-white  rounded-lg"
        >
          Clear
        </button>
      </div>
      <div className="bg-[#E5E5E5] w-[63rem] max-w-full h-[140vh] flex justify-center">
        <table className="border-separate  w-[57rem] table-fixed">
          <thead className="">
            <tr className="">
              <td className="">Sr.No</td>
              <td className="">ID</td>
              <td className="">Name</td>
              <td className="">Instructor</td>
              <td className="">level</td>
              <td className="">Action</td>
            </tr>
          </thead>
          <tbody>
            {courseData.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="border border-white">{index + 1}</td>
                  <td className="border border-white">{item.id}</td>
                  <td className="border border-white">{item.name}</td>
                  <td className="border border-white">{item.instructor}</td>
                  <td className="border border-white">{item.level}</td>
                  <td className="border border-white">
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
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Course;
