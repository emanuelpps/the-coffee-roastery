import { IoMdAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import { IoIosTrash } from "react-icons/io";
function CartProductCard({
  product,
  addToCart,
  removeFromCart,
  cart,
  reduceItemCart,
  totalPriceForProduct
}) {

  console.log(product);
  return (
    <div id="cart-product-card">
      <div
        id="cart-product-card-container"
        className="flex flex-row justify-center items-center m-5 p-5 bg-[#F7EADD] rounded-md"
      >
        <div className="w-full flex flex-row justify-center items-center gap-10">
          <div id="cart-product-card-image" className="">
            <img
              src={product.image}
              className="w-[200px] border-solid border-4 border-[#473429] rounded-md"
            />
          </div>
          <div
            id="cart-product-card-description"
            className="w-full flex justify-center items-center"
          >
            <div id="cart-product-card-title" className="flex w-full">
              <h2>{product.name}</h2>
            </div>
            <div id="cart-product-card-rating" className="flex w-full">
              <h3>{product.rating}</h3>
            </div>
            <div id="cart-product-card-type" className="flex w-full">
              <h3>DARK</h3>
            </div>
            <div
              id="cart-product-card-button-quantity"
              className="flex w-full gap-5 justify-center items-center"
            >
              <div id="cart-product-card-price" className="flex w-full">
                <h2>${product.price * cart.filter((item) => item.id === product.id).length}</h2>
              </div>
              <div id="cart-product-card-button-reduce">
                <button
                  className="text-4xl"
                  onClick={() => reduceItemCart(product.id)}
                >
                  <IoIosRemoveCircle />
                </button>
              </div>
              <div id="cart-product-card-quantity">
                <span className="bg-white p-4 rounded-md">
                  {cart.filter((item) => item.id === product.id).length}
                </span>
              </div>
              <div id="cart-product-card-button-add">
                <button className="text-4xl" onClick={() => addToCart(product)}>
                  <IoMdAddCircle />
                </button>
              </div>
              <div
                id="remove-button"
                className="flex justify-center items-center"
              >
                <button
                  className="flex justify-center items-center text-xl"
                  onClick={() => removeFromCart(product.id)}
                >
                  <IoIosTrash className="text-[#863333]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
