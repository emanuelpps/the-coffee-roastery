import React from "react";
import Buttons from "../../components/Buttons/Buttons";

function Checkout() {
  return (
    <div
      id="cart"
      className="bg-[#FFEBD6] flex min-h-[fit-content] h-[fit-content] w-[100%] justify-center items-center pt-32 text-[#473429]   font-playfair"
    >
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
          <div className="flex justify-between w-full">
            <div className="w-full">
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                class="text-white bg-[#473429] hover:bg-[#473429] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-[#473429] dark:hover:bg-[#362d28] dark:focus:ring-black"
                type="button"
              >
                Payment Method
                <svg
                  class="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdown"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-10 items-center w-full">
              <label
                htmlFor="subject"
                className="w-full flex mb-2 font-medium text-2xl justify-start"
              >
                Card Number
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
          <div className="flex gap-20 pt-16">
            <Buttons variant="secondary" label="Reset Information"></Buttons>
            <Buttons variant="secondary" label="Finish my Order"></Buttons>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
