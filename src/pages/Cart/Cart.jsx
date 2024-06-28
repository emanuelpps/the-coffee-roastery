import React, { useEffect, useState } from "react";
import useCartStore from "../../store/CartStore";
import CartProductCard from "../../components/Shop/ProductCard/CartProductCard";
import { FiRefreshCcw } from "react-icons/fi";
import Buttons from "../../components/Buttons/Buttons";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

function Cart() {
  const [newCart, setNewCart] = useState([]);
  const [totalPriceCart, setTotalPriceCart] = useState();
  const { cart, removeFromCart, addToCart, reduceItemCart, clearCart } =
    useCartStore();

  useEffect(() => {
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    setTotalPriceCart(totalPrice.toFixed(2));
  }, [cart.length]);

  return (
    <div
      id="cart"
      className="bg-[#FFEBD6] flex min-h-[fit-content] h-[fit-content] w-[100%] justify-center items-center pt-32 text-[#473429] pb-10  font-playfair"
    >
      <div
        id="cart-container"
        className="flex flex-col justify-center items-center w-[90%] md:w-[80%] h-full"
      >
        {cart?.length > 0 ? (
          <>
            <div
              id="cart-title"
              className="w-full pt-10 pb-4 flex justify-between items-center"
            >
              <h1 className="text-2xl">Your Cart:</h1>
              <button
                className="rounded-full bg-[#473429] p-2"
                onClick={() => clearCart()}
              >
                <FiRefreshCcw className="text-[#cfb190]" />
              </button>
            </div>
            <div
              id="cart-content"
              className="w-full h-[100%] bg-[#cfb190] border-solid border-4 border-[#473429] rounded-md"
            >
              {cart
                .filter((value, index) => cart.indexOf(value) === index)
                .map((product) => (
                  <CartProductCard
                    key={product.id}
                    product={product}
                    cart={cart}
                    removeFromCart={removeFromCart}
                    addToCart={addToCart}
                    reduceItemCart={reduceItemCart}
                    clearCart={clearCart}
                  />
                ))}
            </div>
            <div className="w-full flex justify-end gap-2 items-center pt-4">
              <span className="text-2xl">Total Price: </span>{" "}
              <h3 className="text-[1.8rem] font-bold"> ${totalPriceCart}</h3>
            </div>
            <div className="w-full flex justify-end pt-5">
              <Link to={"/checkout"}>
                <Buttons variant="secondary" label="Checkout →"></Buttons>
              </Link>
            </div>
          </>
        ) : (
          <div className="h-[80vh] flex flex-col justify-center items-center gap-10">
            <p className="text-2xl">Your Cart is Empty...</p>
            <Link to={"/shop"}>
              <Buttons variant="secondary" label="← Go Back"></Buttons>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
