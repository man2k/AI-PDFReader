import { Routes, Route } from "react-router-dom";
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
