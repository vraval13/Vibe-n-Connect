"use client";
import { createContext, useContext, useState, useEffect } from "react";

// Create the context
export const AuthContext = createContext();

// Hook to access AuthContext
export const useAuthContext = () => {
  return useContext(AuthContext);
};

// Define and export the AuthContextProvider
const AuthContextProvider = ({ children }) => {
  // Initialize authUser from localStorage or set to null
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );

  // Sync authUser with localStorage whenever it changes
  useEffect(() => {
    if (authUser) {
      localStorage.setItem("chat-user", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("chat-user"); // Clean up on logout or when authUser is null
    }
  }, [authUser]);
  const isAuthenticated = !!authUser;
  const login = (userData) => {
    setAuthUser(userData);
  };

  // Helper function to handle logout
  const logout = () => {
    setAuthUser(null);
  };
  return (
    <AuthContext.Provider value={{ authUser, isAuthenticated, setAuthUser ,login,logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
