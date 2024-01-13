import React from "react";
import { Routes, Route } from "react-router-dom";
import ChartPage from "./pages/ChartPage";
import MethodsPage from "./pages/MethodsPage";
import InstructionPage from "./pages/InstructionPage";
import MethodsGNR from "./components/MethodsGNR";
import MoreInfoPage from "./components/MoreInfoPage";
import Header from "./components/Header";

function App() {
  return (
    <>
 <Header/>
      <Routes>
        <Route path="/" element={<ChartPage />} />
        <Route path="/instruction" element={<InstructionPage />} />
        <Route path="/methods" element={<MethodsPage />} />
        <Route path="/methods/*" element={<MethodsGNR />} />
        <Route path="/methods/more-info/:id" element={<MoreInfoPage />} />
      </Routes>
    </>
  );
}

export default App;
