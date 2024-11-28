import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  handleEditPayment,
  handleClearPayment,
  handleSavePayment,
  handleUpdatePayment,
  handleDeletePayment,
  updateAmount,
  updateMethod,
  updateDate,
  updateName,
} from "../mySlice";

const Payment = () => {
  const dispatch = useDispatch();
  const { paymentData, isUpdate, selectedId, name, amount, date, method } =
    useSelector((state) => state.myData);

  const saveData = () => {
    const dateRegex = /^\d{4}-\d{1}-\d{1}$/;
    if (name && amount && date && method) {
      if (isUpdate) {
        dispatch(
          handleUpdatePayment({ id: selectedId, name, amount, date, method })
        );
        toast.success("Updated Successfully!");
      } else {
        dispatch(handleSavePayment({ name, amount, date, method }));
        toast.success("Saved Successfully!");
      }
    } else {
      toast.error("All fields are required!");
    }
    if (name.length > 15) {
      toast.error("You can't exceed than 16 character in name!");
      return;
    }
    if (amount.length > 8) {
      toast.error("You can't exceed than 8 digits in amount!");
      return;
    }
    if (method.length > 20) {
      toast.error("You can't exceed than 16 character in method!");
      return;
    }
    if (date && !dateRegex.test(date)) {
      toast.error("Invalid date format!");
      return;
    }
  };

  const handleDeleteItem = (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (isConfirmed) {
      dispatch(handleDeletePayment({ id }));
      toast.success("Deleted successfully!");
    }
  };

  return (
    <div className="h-[39.5rem] overflow-y-auto sm:w-[83rem] flex flex-col items-center">
      <div className="flex lg:flex-row sm:flex-col sm:mr-[8rem] sm:mb-7 md:mb-7 sm:gap-y-2 mt-4 lg:ml-[8rem] lg:gap-x-[1rem] h-[9vh]">
        <div className="">
          <label className="">Name:</label>
          <input
            className="border sm:ml-3 lg:ml-1"
            type="text"
            placeholder="Enter ur name"
            onChange={(e) => dispatch(updateName(e.target.value))}
            value={name}
          />
        </div>
        <div className="">
          <label>Method:</label>
          <input
            className="border"
            type="text"
            placeholder="Enter ur Method"
            onChange={(e) => dispatch(updateMethod(e.target.value))}
            value={method}
          />
        </div>
        <div className="">
          <label>Amount:</label>
          <input
            className="border"
            type="text"
            placeholder="Enter ur Amount"
            onChange={(e) => dispatch(updateAmount(e.target.value))}
            value={amount}
          />
        </div>
        <div className="">
          <label>Date:</label>
          <input
            className="border sm:ml-6 lg:ml-1"
            type="text"
            placeholder="Enter Date"
            onChange={(e) => dispatch(updateDate(e.target.value))}
            value={date}
          />
        </div>
      </div>
      <div className="flex lg:flex-row sm:flex-col sm:mr-[12rem] sm:mt-[-38px] lg:mt-7 lg:mr-14 sm:gap-y-4 ml-auto mt-3 gap-x-4 mb-4 mr-11">
        <button
          onClick={saveData}
          class="flex items-center px-8 py-1 w-[6rem] sm:w-[4rem] sm:px-4 border hover:bg-[#FEAF00] hover:text-white  rounded-lg"
        >
          {isUpdate ? "Update" : "Save"}
        </button>

        <button
          onClick={() => dispatch(handleClearPayment())}
          class="flex items-center px-8 py-1 w-[6rem] sm:w-[4rem] sm:px-4 border hover:bg-[#FEAF00] hover:text-white  rounded-lg"
        >
          Clear
        </button>
      </div>

      <div className="bg-[#E5E5E5] sm:w-[40rem] md:w-[48rem] lg:h-[140vh] lg:flex lg:flex-col lg:w-full">
        <div className="flex mt-6 list-none px-4 py-4 bg-gray-400 font-bold text-center h-[3.5rem]">
          <li className="sm:w-[7%] md:w-[7%]">Sr.No</li>
          <li className="sm:w-[7%]">ID</li>
          <li className="sm:w-[14%] md:w-[17%]">Name</li>
          <li className="sm:w-[23%] md:w-[28%]">Method</li>
          <li className="sm:w-[10%] ">Amount</li>
          <li className="sm:w-[16%] md:w-[18%]">Date</li>
          <li className="sm:w-[20%] lg:w-[30%]">Action</li>
        </div>
        <div className="mt-3">
          {paymentData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex list-none bg-white border rounded-3xl mb-1 px-4 py-5 h-[4rem] text-center items-center"
              >
                <li className="sm:w-[7%] md:w-[7%]">{index + 1}</li>
                <li className="sm:w-[7%]">{item.id}</li>
                <li className="sm:w-[14%] md:w-[17%]">{item.name}</li>
                <li className="sm:w-[23%] md:w-[28%]">{item.method}</li>
                <li className="sm:w-[10%]">{item.amount}</li>
                <li className="sm:w-[16%] md:w-[18%]">{item.date}</li>
                <li className="sm:w-[20%] lg:w-[30%]">
                  <div className="flex justify-center items-center space-x-1 ">
                    <button
                      onClick={() =>
                        dispatch(handleEditPayment({ id: item.id }))
                      }
                      className="flex items-center px-5 py-1 sm:w-[3rem] md:w-[5rem] md:px-5 border border-white hover:bg-[#FEAF00] hover:text-white  rounded-lg"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteItem(item.id)}
                      className="flex items-center px-2 py-1 sm:w-[4rem] md:w-[6rem] md:px-3 border border-white hover:bg-[#FEAF00] hover:text-white  rounded-lg"
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

export default Payment;
