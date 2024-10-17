// src/app/hooks/useSignup.js
"use client"; // Ensure this is present

import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "@/app/contexts/AuthContext"; // Import useAuthContext

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext(); // Destructure setAuthUser from the context

  const signup = async (router, { fullName, userName, password, confirmPassword, gender }) => {
    const success = handleInputErrors({ fullName, userName, password, confirmPassword, gender });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("http://localhost:3001/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, userName, password, confirmPassword, gender }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      toast.success("Signup successful!");
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data); // Set the authenticated user

      // Redirect to the home page
      router.push("/"); // Redirect to the home page after signup

    } catch (error) {
      toast.error(error.message); // Show error message
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInputErrors({ fullName, userName, password, confirmPassword, gender }) {
  if (!fullName || !userName || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
