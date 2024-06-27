import React, { useDebugValue, useState } from "react";
import { RiVisaLine } from "react-icons/ri";
import { FcSimCardChip } from "react-icons/fc";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa6";
import Logo from "../Logo/Logo";

function CreditCardContainer() {
  const [cardTurn, setCardTurn] = useState(false);
  const [cardInformation, setCardInformation] = useState([
    {
      Name: "",
      Surname: "",
      CardNumber: "",
      ValidDate: "",
      cvc: "",
    },
  ]);

  console.log(cardInformation.ValidDate);
  return (
    <div
      id="credit-card-container"
      className="w-[100%] flex justify-center items-center gap-20 mt-10" 
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
          } w-[350px]  rounded-xl h-[200px]`}
        >
          {cardTurn ? (
            <div className="w-full flex flex-col gap-12 font-cardFont">
              <div className="w-full h-8 bg-black mt-5">
                <span className="invisible">d</span>
              </div>
              <div className="flex w-[100%] justify-center items-center ">
                <div className="flex bg-slate-100 w-[80%] h-9 justify-end items-end">
                  <div className="flex text-md items-center mr-2 mb-1">
                    {cardInformation.cvc ? cardInformation.cvc : "***"}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div
                id="header-credit-card"
                className="flex justify-between items-center pr-5 pl-5"
              >
                <div id="chip-container">
                  <FcSimCardChip className="text-3xl" />
                </div>
                <div
                  id="credit-card-logo"
                  className="flex justify-center items-center h-14 min-h-14 "
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
              <div id="credit-card-number" className="flex gap-5  pr-5 pl-5 font-cardFont">
                <div className="text-2xl">
                  {cardInformation.CardNumber
                    ? cardInformation.CardNumber.substring(0, 4)
                    : "****"}
                </div>
                <div className="text-2xl">
                  {cardInformation.CardNumber
                    ? cardInformation.CardNumber.substring(4, 8)
                    : "****"}
                </div>
                <div className="text-2xl">
                  {cardInformation.CardNumber
                    ? cardInformation.CardNumber.substring(8, 12)
                    : "****"}
                </div>
                <div className="text-2xl">
                  {cardInformation.CardNumber
                    ? cardInformation.CardNumber.substring(12, 16)
                    : "****"}
                </div>
              </div>
              <div
                id="card-name-date"
                className="flex justify-between  pr-5 pl-5 font-cardFont"
              >
                <div className="flex gap-5">
                  <span className="text-xl">
                    {cardInformation.Name ? cardInformation.Name : "Name"}
                  </span>
                  <span className="text-xl">
                    {cardInformation.Surname
                      ? cardInformation.Surname
                      : "Surname"}
                  </span>
                </div>
                <div id="card-date">
                  <span className="flex text-xl items-center justify-center">
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
            </>
          )}
        </div>
      </div>
      <div id="credit-card-form" className="flex flex-col gap-2">
        <div className="w-full flex gap-10 items-center">
          <label
            htmlFor="subject"
            className="flex mb-2 font-medium text-1xl justify-start text-balance w-full"
          >
            Card Number
          </label>
          <input
            type="text"
            id="CardNumber"
            className="flex w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] p-2.5"
            placeholder="4444 4444 4444 4444"
            maxLength={16}
            required
            onChange={(e) =>
              setCardInformation({
                ...cardInformation,
                CardNumber: e.target.value,
              })
            }
            onFocus={() => setCardTurn(false)}
          />
        </div>
        <div className="w-full flex gap-10 items-center">
          <label
            htmlFor="subject"
            className="flex mb-2 font-medium text-1xl justify-start w-full"
          >
            Name
          </label>
          <input
            type="text"
            id="Name"
            className="flex w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] p-2.5 ml-6"
            placeholder="John"
            required
            maxLength={10}
            onChange={(e) =>
              setCardInformation({ ...cardInformation, Name: e.target.value })
            }
            onFocus={() => setCardTurn(false)}
          />
        </div>
        <div className="w-full flex gap-10 items-center">
          <label
            htmlFor="subject"
            className="flex mb-2 font-medium text-1xl justify-start w-full"
          >
            Surname
          </label>
          <input
            type="text"
            id="Surname"
            className="flex w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] p-2.5 ml-6"
            placeholder="Doe"
            maxLength={10}
            required
            onChange={(e) =>
              setCardInformation({
                ...cardInformation,
                Surname: e.target.value,
              })
            }
            onFocus={() => setCardTurn(false)}
          />
        </div>
        <div className="w-full flex gap-10 items-center">
          <label
            htmlFor="subject"
            className="flex mb-2 font-medium text-1xl justify-start w-full"
          >
            Valid Date
          </label>
          <input
            type="text"
            id="state"
            className="flex w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] p-2.5 ml-6"
            placeholder="DD/YYYY"
            maxLength={5}
            required
            onChange={(e) =>
              setCardInformation({
                ...cardInformation,
                ValidDate: e.target.value,
              })
            }
            onFocus={() => setCardTurn(false)}
          />
        </div>
        <div className="w-full flex gap-10 items-center">
          <label
            htmlFor="subject"
            className="flex mb-2 font-medium text-1xl justify-start w-full"
          >
            CVC
          </label>
          <input
            onFocus={() => setCardTurn(true)}
            type="text"
            id="state"
            className="flex w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] p-2.5 ml-6"
            placeholder="444"
            maxLength={3}
            required
            onChange={(e) =>
              setCardInformation({
                ...cardInformation,
                cvc: e.target.value,
              })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default CreditCardContainer;
