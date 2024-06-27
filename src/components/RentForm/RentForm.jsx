import React, { useState } from "react";
import Buttons from "../Buttons/Buttons";
import { IoMdCloseCircleOutline } from "react-icons/io";

function RentForm({ setModalShow }) {
  const [pending, setPending] = useState(false);
  const [sendingConfirm, setSendingConfirm] = useState(false);
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
/* 
  const submitButtonText = () => {
    e.prevent.default
    Object.values(formInfo) ? setPending(true) : setPending(false);
    setTimeout(() => {
      pending ? "Sending..." : null;
    }, 5000);
    setSendingConfirm(true);
    setPending(false);
    setTimeout(() => {
      sendingConfirm ? "Your message has been send" : null;
    }, 5000);
    setSendingConfirm(false);
    return "Submit"
  }; */
  return (
    <div
      id="rent-form"
      className="flex justify-center items-center w-full  text-[#473429]"
    >
      <div
        id="rent-container"
        className="absolute top-[600px] bg-[#FFEBD6] rounded-md"
      >
        <div className="flex justify-end mt-5 mr-5">
          <button onClick={() => setModalShow(false)}>
            <IoMdCloseCircleOutline className="text-[1.2rem]" />
          </button>
        </div>
        <form className="w-[600px] pl-10 pr-10 pb-10 flex flex-col gap-2">
          <div className="w-full">
            <h2 className="text-2xl">Rent your machine:</h2>
            <p className="text-lg">
              Complete the form, and our customer service agent will contact
              you.
            </p>
          </div>
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 font-medium text-2xl">
              Name
            </label>
            <input
              type="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] block w-full p-2.5"
              placeholder="John Doe"
              required
              onChange={(e) => setFormInfo({ name: e.target.value })}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 font-medium text-2xl">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] block w-full p-2.5"
              placeholder="name@youremail.com"
              required
              onChange={(e) => setFormInfo({ email: e.target.value })}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="block mb-2 font-medium text-2xl"
            >
              Phone number
            </label>
            <input
              type="number"
              id="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] block w-full p-2.5"
              placeholder="About the coffee"
              required
              onChange={(e) => setFormInfo({ phone: e.target.value })}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="block mb-2 font-medium text-2xl"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:ring-[#473429] focus:border-[#473429]"
              placeholder="Leave a comment..."
              onChange={(e) => setFormInfo({ message: e.target.value })}
            ></textarea>
          </div>
          <div className="flex mt-5 w-full justify-end items-center">
            <Buttons variant="secondary" label="Submit"></Buttons>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RentForm;
