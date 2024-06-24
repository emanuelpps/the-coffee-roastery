import React, { useEffect, useState } from "react";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import useCartStore from "../../store/CartStore";

function CartWidget() {
  const { cart } = useCartStore();
  const [hoverState, setHoverState] = useState(false);

  return (
    <div
      id="cart-widget"
      className="relative w-full flex justify-end items-center font-playfair"
    >
      <Link
        to="/cart"
        id="cart-widget-container"
        className={`bg-[#473429]  hover:bg-[#FFEBD6]  rounded-full p-5  fixed bottom-5 right-5 border-2 ${
          hoverState ? "border-[#473429]" : "border-[#FFEBD6]"
        }`}
        onMouseEnter={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
      >
        <PiShoppingCartDuotone
          id="cart-widget-icon"
          className={`${
            hoverState ? "text-[#473429]" : "text-[#FFEBD6]"
          } text-[20px]`}
        />
        <div
          id="cart-widget-quantity"
          className={`absolute top-1 right-3 rounded-full ${
            hoverState ? "text-[#473429]" : "text-[#FFEBD6]"
          }  w-auto`}
        >
          <span className="w-full top-1 right-3">
            {cart.length >= 1 && cart.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default CartWidget;
