// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/tauri";
import { Routes, Route, Navigate, RouteProps } from "react-router-dom";
import Home from "./pages/Home";
import PdfDisplay from "./pages/PdfDisplay";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pdfDisplay" element={<PdfDisplay />} />
    </Routes>
  );
};

export default App;
