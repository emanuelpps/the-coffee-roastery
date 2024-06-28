import React from "react";
import Buttons from "../Buttons/Buttons";
import CreditCardContainer from "./CreditCardContainer";

function FormCheckout({ ...props }) {
  const handleReset = (e) => {
    e.preventDefault();
    props.setPaymentInformation({
      name: "",
      surname: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      CardNumber: "",
      CardName: "",
      CardSurname: "",
      CardValidDate: "",
      Cardcvc: "",
    });
  };

  console.log(props);
  return (
    <div
      id="cart-container"
      className="flex flex-col justify-center items-center w-[90%] md:w-[80%] h-full"
    >
      <form className="w-full flex flex-col gap-5">
        <div className="w-full">
          <h1 className="text-2xl">Checkout:</h1>
          <p className="text-xl">
            Please complete the form with your payment information.
          </p>
        </div>
        <div className="flex w-full flex-col md:flex-row gap-10 md:gap-20">
          <div className="w-[100%] md:w-full flex  justify-center items-center">
            <label
              htmlFor="name"
              className="flex mb-2 font-medium text-2xl justify-start w-[50%]"
            >
              Name
            </label>
            <input
              type="name"
              id="name"
              className="flex  justify-end items-end bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] md:w-full w-full p-2.5"
              placeholder="John Doe"
              required
              onChange={(e) =>
                props.setPaymentInformation({
                  ...props.paymentInformation,
                  name: e.target.value,
                })
              }
              value={props.paymentInformation.name}
            />
          </div>
          <div className="w-[100%] md:w-full flex  justify-center items-center">
            <label
              htmlFor="name"
              className="flex mb-2 font-medium text-2xl justify-start w-[50%]"
            >
              Surname
            </label>
            <input
              type="name"
              id="name"
              className="flex justify-end items-end  md:w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] w-full max-w-[800px] p-2.5"
              placeholder="John Doe"
              required
              onChange={(e) =>
                props.setPaymentInformation({
                  ...props.paymentInformation,
                  surname: e.target.value,
                })
              }
              value={props.paymentInformation.surname}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 mt-5">
          <div className="w-[100%] md:w-full flex  justify-center items-center">
            <label
              htmlFor="email"
              className="flex mb-2 font-medium text-2xl justify-start w-[50%]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="flex justify-end items-end  md:w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] w-full max-w-[800px] p-2.5"
              placeholder="name@youremail.com"
              required
              onChange={(e) =>
                props.setPaymentInformation({
                  ...props.paymentInformation,
                  email: e.target.value,
                })
              }
              value={props.paymentInformation.email}
            />
          </div>
          <div className="w-[100%] md:w-full flex justify-center items-center">
            <label
              htmlFor="subject"
              className="flex mb-2 font-medium text-2xl justify-start w-[50%]"
            >
              Phone
            </label>
            <input
              type="number"
              id="number"
              className="flex justify-end items-end  md:w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] w-full max-w-[800px] p-2.5"
              placeholder="About the coffee"
              required
              onChange={(e) =>
                props.setPaymentInformation({
                  ...props.paymentInformation,
                  phone: e.target.value,
                })
              }
              value={props.paymentInformation.phone}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 mt-5 md:mt-0">
          <div className="w-[100%] md:w-full flex justify-center items-center">
            <label
              htmlFor="email"
              className="flex mb-2 font-medium text-2xl justify-start w-[50%]"
            >
              Address
            </label>
            <input
              type="email"
              id="email"
              className="flex justify-end items-end  md:w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] w-full max-w-[800px] p-2.5"
              placeholder="Your Address"
              required
              onChange={(e) =>
                props.setPaymentInformation({
                  ...props.paymentInformation,
                  address: e.target.value,
                })
              }
              value={props.paymentInformation.address}
            />
          </div>
          <div className="w-[100%] md:w-full flex  justify-center items-center">
            <label
              htmlFor="subject"
              className="flex mb-2 font-medium text-2xl justify-start w-[50%]"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              className="flex justify-end items-end  md:w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] w-full max-w-[800px] p-2.5"
              placeholder="New York"
              required
              onChange={(e) =>
                props.setPaymentInformation({
                  ...props.paymentInformation,
                  city: e.target.value,
                })
              }
              value={props.paymentInformation.city}
            />
          </div>
          <div className="w-[100%] md:w-full flex  justify-center items-center">
            <label
              htmlFor="subject"
              className="flex mb-2 font-medium text-2xl justify-start w-[50%]"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              className="flex justify-end items-end  md:w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] w-full max-w-[800px] p-2.5"
              placeholder="AZ"
              required
              onChange={(e) =>
                props.setPaymentInformation({
                  ...props.paymentInformation,
                  state: e.target.value,
                })
              }
              value={props.paymentInformation.state}
            />
          </div>
        </div>
        <CreditCardContainer {...props} />
        <div className="flex md:w-full justify-center items-center gap-5 md:gap-20 pt-16 flex-wrap">
          <Buttons
            variant="secondary"
            label="Reset Information"
            onClick={(e) => handleReset(e)}
            style={
              window.innerWidth <= 600
                ? { width: "180px", fontSize: "1rem" }
                : {}
            }
          ></Buttons>
          <Buttons
            variant="secondary"
            label="Finish my Order"
            style={
              window.innerWidth <= 600
                ? { width: "180px", fontSize: "1rem" }
                : {}
            }
          ></Buttons>
        </div>
      </form>
    </div>
  );
}

export default FormCheckout;
