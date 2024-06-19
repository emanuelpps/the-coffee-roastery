import React from "react";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <div
      id="cart-widget"
      className="relative w-full flex justify-end items-center"
    >
      <Link
        to="/cart"
        id="cart-widget-container"
        className="bg-[#473429] rounded-full p-5  fixed bottom-5 right-5"
      >
        <PiShoppingCartDuotone
          id="cart-widget-icon"
          className="text-[#FFEBD6] text-[20px]"
        />
        <div id="cart-widget-quantity" className="absolute top-1 right-3 rounded-full text-[#FFEBD6] w-auto">
          <span className="w-full top-1 right-3">0</span>
        </div>
      </Link>
    </div>
  );
}

export default CartWidget;
