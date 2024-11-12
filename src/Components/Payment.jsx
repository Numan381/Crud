import React, { useEffect, useState } from "react";
import { paymentData } from "./EmployeeData";

const Payment = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [method, setMethod] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setData(paymentData);
  }, []);

  const handleEdit = (id) => {
    const dt = data.filter((item) => item.id === id);
    if (dt !== undefined) {
      setIsUpdate(true);
      setId(id);
      setName(dt[0].name);
      setMethod(dt[0].method);
      setAmount(dt[0].amount);
      setDate(dt[0].date);
    }
  };

  const handleClear = () => {
    setId(0);
    setName("");
    setMethod("");
    setDate(0);
    setAmount(0);
    setIsUpdate(false);
  };

  const handleSave = (e) => {
    let error = "";
    if (name === "") {
      error += "Name is required ,";
    }
    if (method === "") {
      error += "Method is required ,";
    }
    if (date === "") {
      error += "Date is required ,";
    }
    if (amount <= 0) {
      error += "Amount is required.";
    }
    if (error === "") {
      e.preventDefault();
      const dt = [...data];
      const newObject = {
        id: paymentData.length + 1,
        name: name,
        method: method,
        amount: amount,
        date: date,
      };
      dt.push(newObject);
      setData(dt);
    } else {
      alert(error);
    }
  };

  const handleUpdate = () => {
    const index = data
      .map((item) => {
        return item.id;
      })
      .indexOf(id);
    const dt = [...data];
    dt[index].name = name;
    dt[index].method = method;
    dt[index].amount = amount;
    dt[index].date = date;
    setData(dt);
    handleClear();
  };

  const handleDelete = (id) => {
    if (window.confirm("Are u sure")) {
      if (id > 0) {
        const dt = data.filter((item) => item.id !== id);
        setData(dt);
      }
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right, #9EF8EE 20%, #00635A 100%)",
      }}
      className="h-full w-[63rem] flex flex-col justify-center items-center"
    >
      <div className="flex mb-2">
        <div>
          <label className="">Name:</label>
          <input
            type="text"
            placeholder="Enter ur name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label>Method:</label>
          <input
            type="text"
            placeholder="Enter ur Method"
            onChange={(e) => setMethod(e.target.value)}
            value={method}
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="text"
            placeholder="Enter ur Amount"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="text"
            placeholder="Enter Date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
        <div className="flex gap-x-2">
          {!isUpdate ? (
            <button
              onClick={(e) => handleSave(e)}
              class="relative flex items-center ml-2 px-6 py-3 h-9 w-[6rem] mt-3 overflow-hidden font-medium transition-all bg-[linear-gradient(144deg,_#af40ff,_#5b42f3_50%,_#00ddeb)] rounded-md group"
            >
              <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-400 rounded-md group-hover:translate-x-0"></span>
              <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Save
              </span>
            </button>
          ) : (
            <button
              onClick={() => handleUpdate()}
              class="relative flex items-center ml-2 px-6 py-3 h-9 mt-3 overflow-hidden font-medium transition-all bg-[linear-gradient(144deg,_#af40ff,_#5b42f3_50%,_#00ddeb)] rounded-md group"
            >
              <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-400 rounded-md group-hover:translate-x-0"></span>
              <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Uptade
              </span>
            </button>
          )}
          <button
            onClick={() => handleClear()}
            class="relative flex items-center px-6 py-3 h-9 w-[6rem] mt-3 overflow-hidden font-medium transition-all bg-[linear-gradient(144deg,_#af40ff,_#5b42f3_50%,_#00ddeb)] rounded-md group"
          >
            <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-400 rounded-md group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Clear
            </span>
          </button>
        </div>
      </div>
      <table className="border border-2 h-[20rem]  border-[#F2CB05] w-[63rem]">
        <thead className="">
          <tr className="border border-2  border-[#F2CB05]">
            <td className="border border-2  border-[#F2CB05]">Sr.No</td>
            <td className="border border-2  border-[#F2CB05]">ID</td>
            <td className="border border-2  border-[#F2CB05]">Name</td>
            <td className="border border-2  border-[#F2CB05]">Method</td>
            <td className="border border-2  border-[#F2CB05]">Amount</td>
            <td className="border border-2  border-[#F2CB05]">Date</td>
            <td className="border border-2  border-[#F2CB05]">Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td className="border border-2  border-[#F2CB05]">
                  {index + 1}
                </td>
                <td className="border border-2  border-[#F2CB05]">{item.id}</td>
                <td className="border border-2  border-[#F2CB05]">
                  {item.name}
                </td>
                <td className="border border-2  border-[#F2CB05]">
                  {item.method}
                </td>
                <td className="border border-2  border-[#F2CB05]">
                  {item.amount}
                </td>
                <td className="border border-2  border-[#F2CB05]">
                  {item.date}
                </td>
                <td className=" border border-1 h-[4rem] border-[#F2CB05] flex justify-center items-center space-x-3">
                  <button
                    onClick={() => handleEdit(item.id)}
                    class="relative flex items-center ml-2 px-6 py-3 h-9 w-[6rem] overflow-hidden font-medium transition-all bg-[linear-gradient(144deg,_#af40ff,_#5b42f3_50%,_#00ddeb)] rounded-md group"
                  >
                    <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                      <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                    </span>
                    <span class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                      <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                    </span>
                    <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-400 rounded-md group-hover:translate-x-0"></span>
                    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                      Edit
                    </span>
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    class="relative flex items-center ml-2 px-6 py-3 h-9 overflow-hidden font-medium transition-all bg-[linear-gradient(144deg,_#af40ff,_#5b42f3_50%,_#00ddeb)] rounded-md group"
                  >
                    <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                      <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                    </span>
                    <span class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                      <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                    </span>
                    <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-400 rounded-md group-hover:translate-x-0"></span>
                    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                      Delete
                    </span>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Payment;
