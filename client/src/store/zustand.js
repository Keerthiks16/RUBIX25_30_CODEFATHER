import toast from "react-hot-toast";
import { create } from "zustand";
import axios from "axios";
export const useAuthStore = create((set) => ({
  user: null,
  Loading: false,
  AuthLoading: true,
  signup: async (user) => {
    set({ Loading: true });
    try {
      const response = await axios.post("/api/v1/auth/signup", user);
      set({ user: response.data.user });
      toast.success("Signup Successful");
    } catch (error) {
      toast.error(error.response.data.message || "Signup failed");
      console.log(`Error in signup: ${error}`);
    } finally {
      set({ Loading: false });
    }
  },
  login: async (user) => {
    set({ Loading: true });
    try {
      const response = await axios.post("/api/v1/auth/login", user);
      set({ user: response.data.user });
      toast.success("Login Successful");
    } catch (error) {
      toast.error(error.response.data.message || "Login failed");
      console.log(`Error in login: ${error}`);
    } finally {
      set({ Loading: false });
    }
  },
  logout: async () => {
    try {
      set({ Loading: true });
      const response = await axios.post("/api/v1/auth/logout");
      set({ user: null });
    } catch (error) {
      toast.error(error.response.data.message || "Logout failed");
      console.log(`Error in logout: ${error}`);
    } finally {
      set({ Loading: false });
    }
  },
  authCheck: async () => {
    try {
      set({ AuthLoading: true });
      const response = await axios.get("/api/v1/auth/authcheck");
      set({ user: response.data.user, AuthLoading: false });
    } catch (error) {
      set({ user: null, AuthLoading: false });
    }
  },
}));
