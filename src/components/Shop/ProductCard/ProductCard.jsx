import { Link } from "react-router-dom";
import Buttons from "../../Buttons/Buttons";
import { FaStar } from "react-icons/fa";

function ProductCard({ ...product }) {
  return (
    <div
      id="product-card"
      className="text-[#473429] flex bg-[#F7EADD] justify-center items-center p-5 gap-10 border-2 border-[#473429] mt-10 rounded-md w-[300px]"
    >
      <div id="product-card-container" className="flex flex-wrap">
        <div
          id="product-card"
          className="flex flex-wrap justify-center items-center p-5 gap-10 w-full"
        >
          <div className="">
            <img
              src={product.image}
              className="w-[300px] border-solid rounded-xl border-4 border-[#473429]"
            />
          </div>
          <div id="product-card-description" className="flex flex-col gap-2">
            <div id="product-card-title">
              <h2 className="text-2xl">{product.name}</h2>
              <div
                id="product-card-rating"
                className="flex justify-start items-center gap-2"
              >
                <FaStar />
                <p className="text-xl">{product.rating}</p>
              </div>
            </div>
            <div id="product-card-price">
              <h3 className="text-2xl font-bold">$ {product.price}</h3>
            </div>
            <div
              id="product-card-button"
              className="flex justify-center items-center pt-10"
            >
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
