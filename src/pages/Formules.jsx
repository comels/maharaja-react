import React from "react";
import Nav2 from "../components/Nav2";
import TemplateFormule from "../components/TemplateFormule";
import { formules } from "../data/formules";
import Footer from "../components/Footer";

const Formules = () => {
  return (
    <div className="bg-stone-100">
      <Nav2 />
      <div className="py-20">
        <div className="mx-10">
          <h2 className="text-3xl text-center font-extrabold text-pink-600 tracking-tight">
            Nos Formules
          </h2>
          <p className="mt-2 text-base text-center font-light text-gray-800">
            Nos formules sont valables uniquement sur place ou à emporter.
          </p>
          <div className="mx-auto mt-10 grid lg:grid-cols-2 xl:grid-cols-3 gap-10">
            {formules.map((formule, index) => (
              <TemplateFormule key={index} formule={formule} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Formules;
