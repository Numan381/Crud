import { createSlice } from "@reduxjs/toolkit";
import {paymentData , employeeData, courseData } from "./Components/EmployeeData";

const mySlice = createSlice({
  name: "myData",
  initialState: {
    employeeData: employeeData,
    courseData: courseData,
    paymentData: paymentData,
    isUpdate: false,
    selectedId: 0,
    name: "",
    email: "",
    phone: "",
    instructor: "",
    level: "",
  },
  reducers: {

    setEmployeeData: (state, action) => {
      state.employeeData = action.payload;
    },
    setCourseData: (state, action) => {
      state.courseData = action.payload;
    },
    setPaymentData: (state, action) => {
      state.paymentData = action.payload;
    },

    handleEditEmployee: (state, action) => {
      const { id } = action.payload;
      const dt = state.employeeData.find((item) => item.id === id);
      if (dt) {
        state.isUpdate = true;
        state.selectedId = id;
        state.name = dt.name;
        state.email = dt.email;
        state.phone = dt.phone;
      }
    },
    handleClearEmployee: (state) => {
      state.isUpdate = false;
      state.selectedId = 0;
      state.name = "";
      state.email = "";
      state.phone = "";
    },
    handleSaveEmployee: (state, action) => {
      const { name, email, phone } = action.payload;
      const newObject = {
        id: state.employeeData.length + 1,
        name,
        email,
        phone,
      };
      state.employeeData.push(newObject);
    },
    handleUpdateEmployee: (state, action) => {
      const { id, name, email, phone } = action.payload;
      const index = state.employeeData.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.employeeData[index] = { id, name, email, phone };
      }
      state.isUpdate = false;
      state.selectedId = 0;
      state.name = "";
      state.email = "";
      state.phone = "";
    },
    handleDeleteEmployee: (state, action) => {
      const { id } = action.payload;
      state.employeeData = state.employeeData.filter((item) => item.id !== id);
    },

    handleEditCourse: (state, action) => {
      const { id } = action.payload;
      const dt = state.courseData.find((item) => item.id === id);
      if (dt) {
        state.isUpdate = true;
        state.selectedId = id;
        state.name = dt.name;
        state.instructor = dt.instructor;
        state.level = dt.level;
      }
    },
    handleClearCourse: (state) => {
      state.isUpdate = false;
      state.selectedId = 0;
      state.name = "";
      state.instructor = "";
      state.level = "";
    },
    handleSaveCourse: (state, action) => {
      const { name, instructor, level } = action.payload;
      const newObject = {
        id: state.courseData.length + 1,
        name,
        instructor,
        level,
      };
      state.courseData.push(newObject);
    },
    handleUpdateCourse: (state, action) => {
      const { id, name, instructor, level } = action.payload;
      const index = state.courseData.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.courseData[index] = { id, name, instructor, level };
      }
      state.isUpdate = false;
      state.selectedId = 0;
      state.name = "";
      state.instructor = "";
      state.level = "";
    },
    handleDeleteCourse: (state, action) => {
      const { id } = action.payload;
      state.courseData = state.courseData.filter((item) => item.id !== id);
    },

    handleEditPayment: (state, action) => {
      const { id } = action.payload;
      const dt = state.paymentData.find((item) => item.id === id);
      if (dt) {
        state.isUpdate = true;
        state.selectedId = id;
        state.name = dt.name;
        state.amount = dt.amount;
        state.date = dt.date;
        state.method = dt.method;
      }
    },
    handleClearPayment: (state) => {
      state.isUpdate = false;
      state.selectedId = 0;
      state.name = "";
      state.amount = 0;
      state.date = "";
      state.method = "";
    },
    handleSavePayment: (state, action) => {
      const { name, amount, date, method } = action.payload;
      const newObject = {
        id: state.paymentData.length + 1,
        name,
        amount,
        date,
        method,
      };
      state.paymentData.push(newObject);
    },
    handleUpdatePayment: (state, action) => {
      const { id, name, amount, date, method } = action.payload;
      const index = state.paymentData.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.paymentData[index] = { id, name, amount, date,method };
      }
      state.isUpdate = false;
      state.selectedId = 0;
      state.name = "";
      state.amount = 0;
      state.date = "";
      state.method = "";
    },

    handleDeletePayment: (state, action) => {
      const { id } = action.payload;
      state.paymentData = state.paymentData.filter((item) => item.id !== id);
    },


    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePhone: (state, action) => {
      state.phone = action.payload;
    },
    updateInstructor: (state, action) => {
      state.instructor = action.payload;
    },
    updateLevel: (state, action) => {
      state.level = action.payload;
    },
    updateAmount: (state, action) => {
      state.amount = action.payload;
    },
    updateMethod: (state, action) => {
      state.method = action.payload;
    },
    updateDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const {
  setEmployeeData,
  setCourseData,
  handleEditEmployee,
  handleClearEmployee,
  handleSaveEmployee,
  handleUpdateEmployee,
  handleDeleteEmployee,
  handleEditCourse,
  handleClearCourse,
  handleSaveCourse,
  handleUpdateCourse,
  handleDeleteCourse,
  handleEditPayment,
  handleClearPayment,
  handleSavePayment,
  handleUpdatePayment,
  handleDeletePayment,
  updateAmount,
  updateMethod,
  updateDate,
  updateName,
  updateEmail,
  updatePhone,
  updateInstructor,
  updateLevel,
} = mySlice.actions;

export default mySlice.reducer;
