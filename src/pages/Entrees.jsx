import React from "react";
import Nav2 from "../components/Nav2";
import TemplateList from "../components/TemplateList";
import { entrees, accompagnements } from "../data/entrees";
import Footer from "../components/Footer";

const Entrees = () => {
  return (
    <div className="bg-stone-100">
      <Nav2 />
      <div className="flex justify-center py-14">
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
