import React from "react";
import Nav from "../components/Nav";
import TemplateList from "../components/TemplateList";
import {
  biriyanis,
  vegetariens,
  poulets,
  agneaux,
  boeufs,
  poissons,
} from "../data/plats";
import Footer from "../components/Footer";

const Plats = () => {
  return (
    <div className=" bg-stone-100">
      <Nav />
      <div className="flex justify-center py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mx-10">
          <TemplateList products={biriyanis} name="Biriyanis" />
          <TemplateList products={vegetariens} name="Végétariens" />
          <TemplateList products={poulets} name="Poulets" />
          <TemplateList products={agneaux} name="Agneaux" />
          <TemplateList products={boeufs} name="Boeufs" />
          <TemplateList products={poissons} name="Crevettes / Poissons" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Plats;
