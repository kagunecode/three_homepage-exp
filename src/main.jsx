import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import App3D from "./App3D.jsx";
import { AnimatePresence } from "framer-motion";
import NavigationContextProvider from "./contexts/NavigationContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavigationContextProvider>
      <App3D />
    </NavigationContextProvider>
  </React.StrictMode>
);
