import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSelector, useDispatch } from "react-redux";
import {
  handleEditEmployee,
  handleClearEmployee,
  handleSaveEmployee,
  handleUpdateEmployee,
  handleDeleteEmployee,
  updateName,
  updateEmail,
  updatePhone,
} from "../mySlice";

const Student = () => {
  const dispatch = useDispatch();
  const { employeeData, isUpdate, selectedId, name, email, phone } =
    useSelector((state) => state.myData);

  const saveData = () => {
    const phoneRegex = /^[0-9]{11}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const errors = []; 

    if (!name) {
      errors.push("Name is required!");
    } else if (name.length > 20) {
      errors.push("You can't exceed 20 characters in the name!");
    }
  
    if (!phone) {
      errors.push("Phone number is required!");
    } else if (!phoneRegex.test(phone)) {
      errors.push("Phone number must be exactly 11 digits!");
    }
 
    if (!email) {
      errors.push("Email is required!");
    } else if (!emailRegex.test(email)) {
      errors.push("Please enter a valid email ending with @gmail.com!");
    }
  
    if (errors.length > 0) {
      errors.forEach((error) => toast.error(error));
      return;
    }
    if (isUpdate) {
      dispatch(handleUpdateEmployee({ id: selectedId, name, email, phone }));
      toast.success("Updated Successfully!");
    } else {
      dispatch(handleSaveEmployee({ name, email, phone }));
      toast.success("Saved Successfully!");
    }
  };

  const handleDeleteItem = (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (isConfirmed) {
      dispatch(handleDeleteEmployee({ id }));
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
          <label>Email:</label>
          <input
            className="border"
            type="email"
            placeholder="Enter ur email"
            onChange={(e) => dispatch(updateEmail(e.target.value))}
            value={email}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            className="border"
            type="number"
            placeholder="Enter ur phone"
            onChange={(e) => dispatch(updatePhone(e.target.value))}
            value={phone}
          />
        </div>
      </div>
      <div className="flex ml-auto mt-3 gap-x-4 mb-4 mr-11">
        <button
          onClick={saveData}
          className=" flex items-center px-8 py-1 w-[6rem] border hover:bg-[#FEAF00] hover:text-white  rounded-lg"
        >
          {isUpdate ? "Update" : "Save"}
        </button>

        <button
          onClick={() => dispatch(handleClearEmployee())}
          class=" flex items-center px-8 py-1 w-[6rem] border hover:bg-[#FEAF00] hover:text-white  rounded-lg"
        >
          Clear
        </button>
      </div>

      <div className="bg-[#E5E5E5] w-[63rem] h-[140vh] flex flex-col">
        <div className="flex mt-6 list-none px-4 py-4 bg-gray-400 font-bold text-center h-[3.5rem]">
          <li className="w-[10%]">Sr.No</li>
          <li className="w-[10%]">ID</li>
          <li className="w-[20%]">Name</li>
          <li className="w-[25%]">Email</li>
          <li className="w-[20%]">Phone_Number</li>
          <li className="w-[10%]">Action</li>
        </div>
        <div className="mt-3">
          {employeeData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex list-none bg-white border rounded-3xl mb-1 px-4 py-5 h-[4rem] text-center items-center"
              >
                <li className="w-[10%] ">{index + 1} </li>
                <li className="w-[10%] ">{item.id}</li>
                <li className="w-[20%] ">{item.name}</li>
                <li className="w-[25%] ">{item.email}</li>
                <li className="w-[20%] ">{item.phone}</li>
                <li className="w-[10%] ">
                  <div className="flex justify-center items-center space-x-2">
                    <button
                      onClick={() =>
                        dispatch(handleEditEmployee({ id: item.id }))
                      }
                      className="flex items-center px-6 py-1 w-[4.5rem] border border-gray hover:bg-[#FEAF00] hover:text-white  rounded-lg"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteItem(item.id)}
                      className="flex items-center px-2 py-1 w-[6rem] border border-gray hover:bg-[#FEAF00] hover:text-white  rounded-lg"
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

export default Student;
