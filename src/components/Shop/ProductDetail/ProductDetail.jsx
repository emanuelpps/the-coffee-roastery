import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import products from "../../../../public/assets/data/products.json";
import { FaStar } from "react-icons/fa";
import Buttons from "../../Buttons/Buttons";
import { Link } from "react-router-dom";
import useCartStore from "../../../store/CartStore";
import { PiShoppingCartDuotone } from "react-icons/pi";

function ProductDetail() {
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);
  const [productsFiltered, setProductsFiltered] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const selectedProducts = products.find(
      (product) => product.id === parseInt(id)
    );

    setProductsFiltered(selectedProducts);
  }, [id]);

  const handleBuy = (productsFiltered) => {
    addToCart(productsFiltered);
  };

  const toCart = () => {
    return (
      <div className="flex justify-center items-center gap-2">
        <span>To Cart</span>
        <PiShoppingCartDuotone />
      </div>
    );
  };

  return (
    <div
      id="product-detail"
      className="flex flex-col justify-center items-center pt-40 bg-[#FFEBD6] w-[100%] m-auto overflow-x-hidden"
    >
      <div
        id="product-detail-container"
        className="flex  w-[80%] gap-20 bg-[#F7EADD] p-10 rounded-md border-[#473429] border-2"
      >
        <div
          id="product-detail-image"
          className="flex justify-center items-center"
        >
          <img
            src={productsFiltered.image}
            className="w-[700px] h-[430px] border-solid rounded-xl border-4 border-[#473429]"
          />
        </div>
        <div
          id="product-detail-description"
          className="flex flex-col w-[50%] gap-5 "
        >
          <div className="flex items-center justify-between border-b-2 border-[#473429] pb-4">
            <h3 className="text-3xl pb-2  ">{productsFiltered.name}</h3>
            <div onClick={() => handleBuy(productsFiltered)}>
              <Buttons variant="secondary" label="Add To Cart +"></Buttons>
            </div>
          </div>
          <span className="flex gap-5 text-xl">
            Price:
            <p className="text-xl font-bold"> $ {productsFiltered.price}</p>
          </span>
          <span className="flex gap-5 text-xl">
            Weight:<p className="text-xl font-semibold"> 12 OZ</p>
          </span>
          <span className="gap-2 text-xl flex items-center">
            Rating: <FaStar />
            <p className="text-xl font-semibold">{productsFiltered.rating}</p>
          </span>
          <div className="flex flex-col  gap-5 ">
            <span className="flex gap-5 text-xl">
              Processing:
              <p className="text-xl font-semibold">
                {productsFiltered.processing}
              </p>
            </span>
            <span className="flex gap-5 text-xl">
              Region:{" "}
              <p className="text-xl font-semibold">{productsFiltered.region}</p>
            </span>
            <span className="flex gap-5 text-xl">
              Roast:{" "}
              <p className="text-xl font-semibold">{productsFiltered.roast}</p>
            </span>
            <p className="text-xl">{productsFiltered.description}</p>
            <p className="text-xl">{productsFiltered.roast_description}</p>
          </div>
        </div>
      </div>
      <div
        id="detail-buttons"
        className="flex w-full pt-20 gap-10 justify-center items-center"
      >
        <Link to="/shop">
          <Buttons variant="secondary" label="← Go Back"></Buttons>
        </Link>
        <Link to="/cart">
          <Buttons variant="secondary" label={toCart()}></Buttons>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetail;
