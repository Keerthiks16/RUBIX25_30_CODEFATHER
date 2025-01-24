import { create } from "zustand";
export const usePropertyStore = create((set) => ({
  properties: [],
  loading: false,

  fetchProperties: async () => {
    set({ loading: true });
    try {
      const response = await fetch("/api/properties");
      const data = await response.json();
      console.log("Fetched data:", data);
      set({ properties: data, loading: false });
    } catch (error) {
      set({ properties: [], loading: false });
      console.error("Error fetching properties:", error);
    }
  },
}));
