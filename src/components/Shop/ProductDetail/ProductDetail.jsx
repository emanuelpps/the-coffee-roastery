import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import products from "../../../../public/assets/data/products.json";
import { FaStar } from "react-icons/fa";
import Buttons from "../../Buttons/Buttons";
import { Link } from "react-router-dom";
import useCartStore from "../../../store/CartStore";

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

  console.log("filtered", productsFiltered);
  console.log("cart", cart);

  return (
    <div
      id="product-detail"
      className="flex flex-col justify-center items-center pt-40 bg-[#FFEBD6] w-[100%] m-auto overflow-x-hidden"
    >
      <div id="product-detail-container" className="flex  w-[90%] gap-20">
        <div
          id="product-detail-image"
          className="border-solid border-4 border-[#473429]"
        >
          <img src={productsFiltered.image} className="w-[700px]" />
        </div>
        <div
          id="product-detail-description"
          className="flex flex-col w-[50%] gap-5"
        >
          <h3 className="text-3xl">{productsFiltered.name}</h3>
          <span className="text-2xl">${productsFiltered.price}</span>
          <span className="gap-2 text-2xl flex items-center">
            Rating: <FaStar /> {productsFiltered.rating}
          </span>
          <div className="flex flex-col gap-2">
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
        className="flex w-full pt-10 gap-10 justify-center items-center ml-96"
      >
        <Link to="/shop">
          <Buttons variant="secondary" label="Go Back"></Buttons>
        </Link>
        <div onClick={() => handleBuy(productsFiltered)}>
          <Buttons variant="secondary" label="Buy"></Buttons>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
