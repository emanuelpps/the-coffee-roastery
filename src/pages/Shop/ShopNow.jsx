import ProductCard from "../../components/Shop/ProductCard/ProductCard";
import products from "/public/assets/data/products.json";

function ShopNow() {
  return (
    <div className="bg-[#FFEBD6] flex min-h-[fit-content] h-[fit-content] w-[100%] justify-center items-center pt-32 text-white pb-40  font-playfair">
      <div className="flex flex-wrap justify-center items-center gap-10 w-[80%]">
        {products?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default ShopNow;
