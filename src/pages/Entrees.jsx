import React from "react";
import Nav from "../components/Nav";
import TemplateList from "../components/TemplateList";
import { entrees, accompagnements } from "../data/entrees";
import Footer from "../components/Footer";

const Entrees = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url('bg-texte.jpg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <Nav />
      <div className="flex justify-center py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-10">
          <TemplateList products={entrees} name="Entrées" />
          <TemplateList products={accompagnements} name="Accompagnements" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Entrees;
