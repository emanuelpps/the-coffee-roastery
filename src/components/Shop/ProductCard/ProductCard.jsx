import { Link } from "react-router-dom";
import Buttons from "../../Buttons/Buttons";
import { FaStar } from "react-icons/fa";

function ProductCard({ ...product }) {
  return (
    <div
      id="product-card"
      className="text-[#473429] flex bg-[#F7EADD] justify-center items-center gap-10 border-2 border-[#473429] mt-10 rounded-md w-[350px]"
    >
      <div id="product-card-container" className="flex flex-wrap">
        <div
          id="product-card"
          className="flex flex-wrap justify-center items-center  gap-10 w-full"
        >
          <div className="w-full relative">
            <img src={product.image} className="rounded-t-md" />
            <div
              id="product-card-rating"
              className="absolute flex items-center gap-2 top-2 right-3 bg-[#473429] p-1 rounded-md"
            >
              <FaStar className="text-[#F7EADD] text-[0.7rem]" />
              <p className="text-md text-[#F7EADD]">{product.rating}</p>
            </div>
          </div>
          <div id="product-card-description" className="flex flex-col gap-2">
            <div className="flex justify-between items-center gap-10">
              <div id="product-card-title" className="w-full flex-nowrap">
                <h2 className="text-2xl w-[fit-content]">{product.name}</h2>
              </div>
              <div id="product-card-price" className="">
                <h3 className="text-[1.7rem] font-bold">${product.price}</h3>
              </div>
            </div>
            <div
              id="product-card-button"
              className="flex justify-center items-center pt-10 pb-10"
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
