import { create } from "zustand";
//import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create((set) => ({
  cart: [],
  reduceItemCart: (productId) =>
    set((state) => {
      const newCart = [...state.cart];
      const indexProd = newCart.findIndex((item) => item.id === productId);
      if (indexProd !== -1) {
        newCart.splice(indexProd, 1);
      }
      return { cart: newCart };
    }),
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
  clearCart: () => set({ cart: [] }),
  totalPriceForProduct: () => {
    const filteredProducts = state.cart.find(
      (product) => product.id == product.id
    );
    const totalPrice = filteredProducts.price * filteredProducts.length;
    console.log("TOTAl", totalPrice);
    return totalPrice;
  },
}));
export default useCartStore;
/* 
        const cartIndex = state.cart.find((item) => item.id === id).slice([0]);
      console.log("cartINDEX", cartIndex);
      return { cart: [...state.cart , cartIndex]}; */
