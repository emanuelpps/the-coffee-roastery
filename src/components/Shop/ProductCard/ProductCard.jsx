import { Link } from "react-router-dom";
import Buttons from "../../Buttons/Buttons";
import { FaStar } from "react-icons/fa";

function ProductCard({ ...product }) {
  return (
    <div
      id="product-card"
      className="text-[#473429] flex bg-[#FFEBD6] justify-center items-center p-5 gap-10"
    >
      <div id="product-card-container" className="flex flex-wrap">
        <div
          id="product-card"
          className="flex flex-wrap justify-center items-center p-5 gap-10 w-full"
        >
          <div className="">
            <img src={product.image} className="w-[300px]" />
          </div>
          <div id="product-card-description">
            <div id="product-card-title">
              <h2 className="text-2xl">{product.name}</h2>
              <div
                id="product-card-rating"
                className="flex justify-start items-center gap-2"
              >
                <FaStar />
                {product.rating}
              </div>
            </div>
            <div id="product-card-price">
              <h3 className="text-xl">${product.price}</h3>
            </div>
            <div id="product-card-button" className="pt-10">
              <Link
                to={{ pathname: `/shop/${product.id}`, state: { product } }}
              >
                <Buttons variant="secondary" label="View More"></Buttons>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
