
import React, { createContext, useContext, useState } from "react";

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider to wrap around the app, providing context to all components
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user data
  const [loading, setLoading] = useState(false); // For loading states
  const [error, setError] = useState(null); // For error handling

  // Sign In Logic (Async to simulate API call)
  const signIn = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      // Replace this with actual API call
      const response = await fakeApiCall(credentials); 
      setUser(response.user); // Store user data
      setLoading(false);
      return { success: true, user: response.user };
    } catch (err) {
      setLoading(false);
      setError("Invalid credentials, please try again.");
      return { success: false };
    }
  };

  // Sign Up Logic (Similar to Sign In)
  const signUp = async (details) => {
    setLoading(true);
    setError(null);
    try {
      // Replace this with actual API call
      const response = await fakeApiCall(details);
      setUser(response.user); // Store user data
      setLoading(false);
      return { success: true, user: response.user };
    } catch (err) {
      setLoading(false);
      setError("Unable to create account. Try again later.");
      return { success: false };
    }
  };

  // Sign Out Logic
  const signOut = () => {
    setUser(null); // Clear user data
  };

  // Export the state and functions for usage in components
  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook to use the AuthContext in any component
export const useAuth = () => useContext(AuthContext);

// Simulating API call (replace with real API logic)
const fakeApiCall = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.phone === "1234567890" && data.password === "password") {
        resolve({ user: { name: "John Doe", token: "abc123" } });
      } else {
        reject("Authentication failed");
      }
    }, 1000);
  });
