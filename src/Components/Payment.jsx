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
    <div className="h-[39.5rem] overflow-y-auto overflow-x-hidden w-[63rem] flex flex-col items-center">
      <div className="flex mt-5 gap-x-1 h-[9vh]">
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
          <label>Method:</label>
          <input
            className="border"
            type="text"
            placeholder="Enter ur Method"
            onChange={(e) => dispatch(updateMethod(e.target.value))}
            value={method}
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            className="border"
            type="text"
            placeholder="Enter ur Amount"
            onChange={(e) => dispatch(updateAmount(e.target.value))}
            value={amount}
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            className="border"
            type="text"
            placeholder="Enter Date"
            onChange={(e) => dispatch(updateDate(e.target.value))}
            value={date}
          />
        </div>
      </div>
      <div className="flex ml-auto mt-3 gap-x-4 mb-4 mr-11">
        <button
          onClick={saveData}
          class="flex items-center px-8 py-1 w-[6rem] border hover:bg-[#FEAF00] hover:text-white  rounded-lg"
        >
          {isUpdate ? "Update" : "Save"}
        </button>

        <button
          onClick={() => dispatch(handleClearPayment())}
          class="flex items-center px-8 py-1 w-[6rem] border hover:bg-[#FEAF00] hover:text-white  rounded-lg"
        >
          Clear
        </button>
      </div>

      <div className="bg-[#E5E5E5] w-[63rem] h-[140vh] flex flex-col">
        <div className="flex mt-6 list-none px-4 py-4 bg-gray-400 font-bold text-center h-[3.5rem]">
          <li className="w-[10%]">Sr.No</li>
          <li className="w-[10%]">ID</li>
          <li className="w-[20%]">Name</li>
          <li className="w-[20%]">Method</li>
          <li className="w-[20%]">Amount</li>
          <li className="w-[20%]">Date</li>
          <li className="w-[20%]">Action</li>
        </div>
        <div className="mt-3">
          {paymentData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex list-none bg-white border rounded-3xl mb-1 px-4 py-5 h-[4rem] text-center items-center"
              >
                <li className="w-[10%]">{index + 1}</li>
                <li className="w-[10%]">{item.id}</li>
                <li className="w-[20%]">{item.name}</li>
                <li className="w-[20%]">{item.method}</li>
                <li className="w-[20%]">{item.amount}</li>
                <li className="w-[20%]">{item.date}</li>
                <li className="w-[20%]">
                  <div className="flex justify-center items-center space-x-1 ">
                    <button
                      onClick={() =>
                        dispatch(handleEditPayment({ id: item.id }))
                      }
                      className="flex items-center px-5 py-1 w-[4rem] border border-white hover:bg-[#FEAF00] hover:text-white  rounded-lg"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteItem(item.id)}
                      className="flex items-center px-2 py-1 w-[4rem] border border-white hover:bg-[#FEAF00] hover:text-white  rounded-lg"
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
