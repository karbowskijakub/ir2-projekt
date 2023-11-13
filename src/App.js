import React from "react";
import ChartPage from "./pages/ChartPage";
import MethodsPage from "./pages/MethodsPage";
import InstructionPage from "./pages/InstructionPage";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ChartPage />} />
        <Route path="/instruction" element={<InstructionPage />} />
        <Route path="/methods" element={<MethodsPage />} />
      </Routes>
    </>
  );
}

export default App;
