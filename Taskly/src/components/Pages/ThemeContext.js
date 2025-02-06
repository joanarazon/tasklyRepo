import React, { createContext, useState, useContext } from "react";

// Create a context to manage theme-related data and functions
const ThemeContext = createContext();

/**
 * ThemeProvider component manages the app's theme state.
 * It provides the theme object and toggleTheme function to the entire app.
 */
export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track if dark mode is active

  /**
   * Toggles between dark mode and light mode.
   * Updates the `isDarkMode` state accordingly.
   */
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  /**
   * Theme object that defines colors for dark and light modes.
   * The colors dynamically change based on the `isDarkMode` state.
   */
  const theme = {
    colors: {
      background: isDarkMode ? "#333" : "#B3B7EE", // Background color for dark and light modes
      text: isDarkMode ? "#fff" : "#000", // Text color changes to ensure readability
      box: isDarkMode ? "#444" : "#D3D4FA", // Primary container color adapts to theme
      box2: isDarkMode ? "#555" : "#E6E7FB", // Secondary container color
      inputBackground: isDarkMode ? "#444" : "#fff", // Background color for input fields
      inputBorder: isDarkMode ? "#777" : "#000", // Border color for input fields
    },
    isDarkMode, // Boolean value to indicate current theme mode
    toggleTheme, // Function to switch between themes
  };

  // Provide the theme context to all child components
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

/**
 * Custom hook to access the theme context from any component.
 * It allows easy access to `isDarkMode`, `toggleTheme`, and theme colors.
 */
export function useTheme() {
  return useContext(ThemeContext);
}
