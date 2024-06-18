import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail({ id }) {
  const { id } = useParams();
  return <div>ProductDetail</div>;
}

export default ProductDetail;
