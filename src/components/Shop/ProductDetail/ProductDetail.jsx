import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import products from "../../../../public/assets/data/products.json";
import { FaStar } from "react-icons/fa";
import Buttons from "../../Buttons/Buttons";
import { Link } from "react-router-dom";

function ProductDetail() {
  const [productsFiltered, setProductsFiltered] = useState({});
  const { id } = useParams();

  {
    /*
    "id": 5,
    "image": "/assets/img/arabic-coffee.jpg",
    "name": "Arabic Coffee",
    "processing": "sun",
    "region": "India",
    "roast": "dark",
    "description": "Arabic Coffee is known for its unique preparation method and rich, spicy flavor profile.",
    "roast_description": "Dark roasts have a robust, full-bodied flavor with a hint of bitterness, ideal for those who enjoy strong coffee.",
    "price": 16.49,
    "rating": 4.8
  */
  }
  useEffect(() => {
    const selectedProducts = products.find(
      (product) => product.id === parseInt(id)
    );

    setProductsFiltered(selectedProducts);
  }, [id]);

  return (
    <div
      id="product-detail"
      className="flex flex-col justify-center items-center pt-40 bg-[#FFEBD6] w-[100%] m-auto"
    >
      <div id="product-detail-container" className="flex  w-[90%] gap-20">
        <div
          id="product-detail-image"
          className="border-solid border-4 border-[#473429]"
        >
          <img src={productsFiltered.image} className="w-[600px]" />
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
      <div id="detail-buttons" className="flex pt-10 gap-10">
        <Link to="/shop" >
          <Buttons variant="secondary" label="Go Back"></Buttons>
        </Link>
        <Buttons variant="secondary" label="Buy"></Buttons>
      </div>
    </div>
  );
}

export default ProductDetail;
