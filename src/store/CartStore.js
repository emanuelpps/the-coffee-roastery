import { create } from "zustand";
//import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create((set) => ({
  cart: [],
  reduceItemCart: (id) =>
    set((state) => {
      const cartIndex = state.cart.indexOf(id);
      return { cart: state.cart.slice(cartIndex) };
    }),
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (id) =>
    set((state) => ({ cart:[...state.cart, state.cart.filter((item) => item.id !== id) ]})),
  clearCart: () => set({ cart: [] }),
  totalPriceForProduct: () => {
      const filteredProducts = state.cart.find(
        (product) => product.id == product.id
      );
      const totalPrice = filteredProducts.price * filteredProducts.length;
      console.log("TOTAl",totalPrice);
      return totalPrice;
    },
}));
export default useCartStore;
