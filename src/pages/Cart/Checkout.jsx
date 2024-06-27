import React, { useState } from "react";
import Buttons from "../../components/Buttons/Buttons";
import FormCheckout from "../../components/FormCheckout/FormCheckout";

function Checkout() {
  const [paymentInformation, setPaymentInformation] = useState({
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
  const [paymentProcess, setPaymentProcess] = useState([
    {
      none: "Finish My Order",
      inProcess: "Processing Payment",
      done: "Your Payment was successful ✔",
      reject: "Your Payment was refused X",
    },
  ]);
  return (
    <div
      id="cart"
      className="bg-[#FFEBD6] flex min-h-[fit-content] h-[fit-content] w-[100%] justify-center items-center pt-32 text-[#473429]   font-playfair"
    >
      <FormCheckout
        paymentInformation={paymentInformation}
        setPaymentInformation={setPaymentInformation}
      />
    </div>
  );
}

export default Checkout;
