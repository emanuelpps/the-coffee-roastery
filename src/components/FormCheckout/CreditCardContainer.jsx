import React, { useState } from "react";
import { RiVisaLine } from "react-icons/ri";
import { FcSimCardChip } from "react-icons/fc";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa6";
import Logo from "../Logo/Logo";

function CreditCardContainer() {
  const [cardInformation, setCardInformation] = useState({
    Name: "",
    Surname: "",
    CardNumber: null,
    ValidDate: null,
    cvc: null,
  });

  console.log(cardInformation.ValidDate);
  return (
    <div
      id="credit-card-container"
      className="w-[100%] flex justify-center items-center gap-20"
    >
      <div id="credit-card-box">
        <div
          id="credit-card"
          className={`flex flex-col gap-8 ${
            cardInformation.CardNumber?.startsWith("2") ||
            cardInformation.CardNumber?.startsWith("5")
              ? `bg-[#D4B36D]`
              : cardInformation.CardNumber?.startsWith("4")
              ? `bg-[#475ea5]`
              : cardInformation.CardNumber?.startsWith("3")
              ? `bg-[#9FA0A2]`
              : `bg-[#475ea5]`
          } w-[350px] pl-10 pr-10 rounded-xl h-[200px]`}
        >
          <div
            id="header-credit-card"
            className="flex justify-between items-center"
          >
            <div id="chip-container">
              <FcSimCardChip className="text-3xl" />
            </div>
            <div
              id="credit-card-logo"
              className="flex justify-center items-center h-14 min-h-14"
            >
              {cardInformation.CardNumber?.startsWith("2") ||
              cardInformation.CardNumber?.startsWith("5") ? (
                <FaCcMastercard className="text-6xl text-white" />
              ) : cardInformation.CardNumber?.startsWith("4") ? (
                <RiVisaLine className="text-6xl text-white" />
              ) : cardInformation.CardNumber?.startsWith("3") ? (
                <SiAmericanexpress className="text-6xl text-white" />
              ) : null}
            </div>
          </div>
          <div id="credit-card-number" className="flex gap-5">
            <div className="text-2xl">
              {cardInformation.CardNumber
                ? cardInformation.CardNumber.substring(0, 3)
                : "****"}
            </div>
            <div className="text-2xl">
              {cardInformation.CardNumber
                ? cardInformation.CardNumber.substring(4, 7)
                : "****"}
            </div>
            <div className="text-2xl">
              {cardInformation.CardNumber
                ? cardInformation.CardNumber.substring(8, 11)
                : "****"}
            </div>
            <div className="text-2xl">
              {cardInformation.CardNumber
                ? cardInformation.CardNumber.substring(12, 15)
                : "****"}
            </div>
          </div>
          <div id="card-name-date" className="flex justify-between">
            <div className="flex gap-5">
              <span className="text-2xl">
                {cardInformation.Name ? cardInformation.Name : "Name"}
              </span>
              <span className="text-2xl">
                {cardInformation.Surname ? cardInformation.Surname : "Surname"}
              </span>
            </div>
            <div id="card-date">
              <span className="flex text-2xl items-center justify-center">
                {cardInformation.ValidDate
                  ? cardInformation.ValidDate.substring(0, 2)
                  : "**"}
                /
                {cardInformation.ValidDate
                  ? cardInformation.ValidDate.substring(3, 5)
                  : "**"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="credit-card-form">
        <div className="w-full flex gap-10 items-center">
          <label
            htmlFor="subject"
            className="flex mb-2 font-medium text-2xl justify-start text-balance w-full"
          >
            Card Number
          </label>
          <input
            type="text"
            id="city"
            className="flex w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] p-2.5"
            placeholder="New York"
            required
            onChange={(e) => setCardInformation({ CardNumber: e.target.value })}
          />
        </div>
        <div className="w-full flex gap-10 items-center">
          <label
            htmlFor="subject"
            className="flex mb-2 font-medium text-2xl justify-start w-full"
          >
            Name
          </label>
          <input
            type="text"
            id="state"
            className="flex w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] p-2.5 ml-6"
            placeholder="AZ"
            required
            onChange={(e) => setCardInformation({ Name: e.target.value })}
          />
        </div>
        <div className="w-full flex gap-10 items-center">
          <label
            htmlFor="subject"
            className="flex mb-2 font-medium text-2xl justify-start w-full"
          >
            Surname
          </label>
          <input
            type="text"
            id="surname"
            className="flex w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] p-2.5 ml-6"
            placeholder="AZ"
            required
            onChange={(e) => setCardInformation({ Surname: e.target.value })}
          />
        </div>
        <div className="w-full flex gap-10 items-center">
          <label
            htmlFor="subject"
            className="flex mb-2 font-medium text-2xl justify-start w-full"
          >
            Valid Date
          </label>
          <input
            type="text"
            id="state"
            className="flex w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] p-2.5 ml-6"
            placeholder="DD/YYYY"
            required
            onChange={(e) => setCardInformation({ ValidDate: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}

export default CreditCardContainer;
