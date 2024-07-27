// src/store/globalStore.js
import {create} from 'zustand';

const useGlobalStore = create(set => ({
  user: null,
  products: [],
  setUser: (newUser) => set({ user: newUser }),
  setProducts: (newProducts) => set({ products: newProducts }),
  fetchProducts: async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    set({ products: data });
  },
  fetchRandomUser: async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    set({ user: data.results[0] });
  },
}));

export default useGlobalStore;
