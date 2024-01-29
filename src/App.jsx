import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Contact2 from "./pages/Contact2";
import NotFound from "./pages/NotFound";
import Plats from "./pages/Plats";
import Entrees from "./pages/Entrees";
import Desserts from "./pages/Dessert";
import Formules from "./pages/Formules";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plats" element={<Plats />} />
        <Route path="/entrees" element={<Entrees />} />
        <Route path="/formules" element={<Formules />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/contact" element={<Contact2 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
