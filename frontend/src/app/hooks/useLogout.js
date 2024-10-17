// src/app/hooks/useLogout.js
"use client"; // Ensure this is present

import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "@/app/contexts/AuthContext"; // Import useAuthContext
import { useRouter } from "next/navigation"; // Ensure useRouter is imported

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const router = useRouter(); // Initialize useRouter

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3001/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      toast.success("Logout successfully!");
      localStorage.removeItem("chat-user");
      setAuthUser(null);
      router.push("/login"); // Redirect to the login page
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout; // Ensure you have the default export
