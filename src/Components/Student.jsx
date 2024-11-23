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
    if (name && email && phone) {
      if (isUpdate) {
        dispatch(handleUpdateEmployee({ id: selectedId, name, email, phone }));
        toast.success("Updated Successfully!");
      } else {
        dispatch(handleSaveEmployee({ name, email, phone }));
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
      dispatch(handleDeleteEmployee({ id }));
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
          className=" flex items-center px-8 py-1 w-[7rem] border hover:bg-[#FEAF00] hover:text-white  rounded-lg"
        >
          {isUpdate ? "Update" : "Save"}
        </button>

        <button
          onClick={() => dispatch(handleClearEmployee())}
          class=" flex items-center px-8 py-1 w-[7rem] border hover:bg-[#FEAF00] hover:text-white  rounded-lg"
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
              <td className="">Email</td>
              <td className="">Phone_Number</td>
              <td className="">Action</td>
            </tr>
          </thead>
          <tbody className="">
            {employeeData.map((item, index) => {
              return (
                <tr key={index} className="" >
                  <td className="border border-white ">{index + 1} </td>
                  <td className="border border-white ">{item.id}</td>
                  <td className="border border-white ">{item.name}</td>
                  <td className="border border-white ">{item.email}</td>
                  <td className="border border-white ">{item.phone}</td>
                  <td className="border border-white ">
                    <div className="flex justify-center items-center space-x-3">
                    <button
                      onClick={() =>
                        dispatch(handleEditEmployee({ id: item.id }))
                      }
                      className="flex items-center px-6 py-1 w-[4.5rem] border border-white hover:bg-[#FEAF00] hover:text-white  rounded-lg"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteItem(item.id)}
                      className="flex items-center px-2 py-1 w-[6rem] border border-white hover:bg-[#FEAF00] hover:text-white  rounded-lg"
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

export default Student;
