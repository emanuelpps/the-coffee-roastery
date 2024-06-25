import React from "react";
import Buttons from "../Buttons/Buttons";
import CreditCardContainer from "./CreditCardContainer";

function FormCheckout() {
  return (
    <div
      id="cart-container"
      className="flex flex-col justify-center items-center w-[80%] h-full"
    >
      <form className="w-full flex flex-col gap-5">
        <div className="w-full">
          <h1 className="text-2xl">Checkout:</h1>
          <p className="text-lg">
            Please complete the form with your payment information.
          </p>
        </div>
        <div className="flex gap-20">
          <div className="w-full flex gap-10 items-center">
            <label
              htmlFor="name"
              className="flex mb-2 font-medium text-2xl justify-start"
            >
              Name
            </label>
            <input
              type="name"
              id="name"
              className="flex w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] p-2.5"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="w-full flex gap-10 items-center">
            <label
              htmlFor="name"
              className="flex mb-2 font-medium text-2xl justify-start"
            >
              Surname
            </label>
            <input
              type="name"
              id="name"
              className="flex w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] max-w-[800px] p-2.5"
              placeholder="John Doe"
              required
            />
          </div>
        </div>
        <div className="flex gap-20">
          <div className="w-full flex gap-10 items-center">
            <label
              htmlFor="email"
              className="flex mb-2 font-medium text-2xl justify-start"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="flex w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] p-2.5"
              placeholder="name@youremail.com"
              required
            />
          </div>
          <div className="w-full flex gap-10 items-center">
            <label
              htmlFor="subject"
              className="flex mb-2 font-medium text-2xl justify-start"
            >
              Phone
            </label>
            <input
              type="number"
              id="number"
              className="flex w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] p-2.5 ml-6"
              placeholder="About the coffee"
              required
            />
          </div>
        </div>
        <div className="flex gap-20">
          <div className="w-full flex gap-10 items-center">
            <label
              htmlFor="email"
              className="flex mb-2 font-medium text-2xl justify-start"
            >
              Address
            </label>
            <input
              type="email"
              id="email"
              className="flex w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] p-2.5"
              placeholder="Your Address"
              required
            />
          </div>
          <div className="w-full flex gap-10 items-center">
            <label
              htmlFor="subject"
              className="flex mb-2 font-medium text-2xl justify-start"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              className="flex w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] p-2.5 ml-6"
              placeholder="New York"
              required
            />
          </div>
          <div className="w-full flex gap-10 items-center">
            <label
              htmlFor="subject"
              className="flex mb-2 font-medium text-2xl justify-start"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              className="flex w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] p-2.5 ml-6"
              placeholder="AZ"
              required
            />
          </div>
        </div>
        <CreditCardContainer />
        <div className="flex gap-20 pt-16">
          <Buttons variant="secondary" label="Reset Information"></Buttons>
          <Buttons variant="secondary" label="Finish my Order"></Buttons>
        </div>
      </form>
    </div>
  );
}

export default FormCheckout;
