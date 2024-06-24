import React, { useEffect, useState } from "react";
import useCartStore from "../../store/CartStore";
import CartProductCard from "../../components/Shop/ProductCard/CartProductCard";

function Cart() {
  const [newCart, setNewCart] = useState([]);
  const [totalPriceCart, setTotalPriceCart] = useState();
  const {
    cart,
    removeFromCart,
    addToCart,
    reduceItemCart,
    totalPriceForProduct,
  } = useCartStore();

  useEffect(() => {
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    setTotalPriceCart(totalPrice.toFixed(2));
  }, [cart.length]);

  return (
    <div
      id="cart"
      className="bg-[#FFEBD6] flex min-h-[fit-content] h-[fit-content] w-[100%] justify-center items-center pt-32 text-[#473429] pb-40  font-playfair"
    >
      <div
        id="cart-container"
        className="flex flex-col justify-center items-center w-[80%] h-full"
      >
        {cart?.length > 0 ? (
          <>
            <div id="cart-title" className="w-full pt-10 pb-4">
              <h1 className="text-2xl">Your Cart:</h1>
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
                    totalPriceForProduct={totalPriceForProduct}
                  />
                ))}
            </div>
            <div className="w-full flex justify-end">
              <h3 className="text-2xl">Total Price: $ {totalPriceCart}</h3>
            </div>
          </>
        ) : (
          <div className="h-screen flex justify-center mt-10">
            <p className="text-2xl">Your Cart is Empty...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
