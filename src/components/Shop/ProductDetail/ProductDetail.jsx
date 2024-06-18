import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import products from "../../../../public/assets/data/products.json";

function ProductDetail() {
  const [productsFiltered, setProductsFiltered] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const selectedProducts = products.find(
      (product) => product.id === parseInt(id)
    );

    setProductsFiltered(selectedProducts);
  }, [id]);

  return (
    <div
      id="product-detail"
      className="flex justify-center items-center pt-40 bg-[#FFEBD6]"
    >
      <div id="product-detail-container" className="flex">
        <div id="product-detail-image">
          <img src={productsFiltered.image} className="w-[300px]" />
        </div>
        <div id="product-detail-description">
          <h3>{productsFiltered.name}</h3>
          <p>{productsFiltered.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
