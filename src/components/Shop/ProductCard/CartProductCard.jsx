function CartProductCard({ product, addToCart, removeFromCart }) {
  return (
    <div id="cart-product-card">
      <div
        id="cart-product-card-container"
        className="w-full flex flex-row justify-center items-center"
      >
        <div className="w-full flex flex-row justify-center items-center bg-[#dbc5ac] m-3 ">
          <div id="cart-product-card-image" className="p-10">
            <img
              src={product.image}
              className="w-[200px] border-solid border-4 border-[#473429]"
            />
          </div>
          <div
            id="cart-product-card-description"
            className="w-full flex justify-center items-center"
          >
            <div id="cart-product-card-title" className="flex w-full">
              <h2>{product.name}</h2>
            </div>
            <div id="cart-product-card-price" className="flex w-full">
              <h2>${product.price}</h2>
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
              <div id="cart-product-card-button-reduce">
                <button>-</button>
              </div>
              <div id="cart-product-card-quantity">
                <span>1</span>
              </div>
              <div id="cart-product-card-button-add">
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
