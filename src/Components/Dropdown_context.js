import React, { createContext, useState, useEffect, useContext } from "react";

const DropdownContext = createContext();

// Provider Component
export const DropdownProvider = ({ children }) => {
  const [dropdowns, setDropdowns] = useState([]);

  useEffect(() => {
    fetch("/data.json") // Fetch all dropdowns from JSON
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data); // Debugging log
        setDropdowns(data.dropdowns);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  const getDropdownByName = (name) =>
    dropdowns.find((dropdown) => dropdown.name === name);

  return (
    <DropdownContext.Provider value={{ dropdowns, getDropdownByName }}>
      {children}
    </DropdownContext.Provider>
  );
};

// Custom Hook
export const useDropdown = () => useContext(DropdownContext);