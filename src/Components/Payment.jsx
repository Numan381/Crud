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
    <div className="h-full overflow-y-auto overflow-x-hidden w-[63rem] flex flex-col items-center">
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
          class="flex items-center px-8 py-1 w-[7rem] border hover:bg-[#FEAF00] hover:text-white  rounded-lg"
        >
          {isUpdate ? "Update" : "Save"}
        </button>

        <button
          onClick={() => dispatch(handleClearPayment())}
          class="flex items-center px-8 py-1 w-[7rem] border hover:bg-[#FEAF00] hover:text-white  rounded-lg"
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
              <td className="">Method</td>
              <td className="">Amount</td>
              <td className="">Date</td>
              <td className="">Action</td>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="border border-white ">{index + 1}</td>
                  <td className="border border-white ">{item.id}</td>
                  <td className="border border-white ">{item.name}</td>
                  <td className="border border-white ">{item.method}</td>
                  <td className="border border-white ">{item.amount}</td>
                  <td className="border border-white ">{item.date}</td>
                  <td className=" border border-white ">
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

export default Payment;
