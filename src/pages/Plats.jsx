import React from "react";
import Nav2 from "../components/Nav2";
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
      <Nav2 />
      <div className="flex justify-center py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mx-10">
          <TemplateList products={biriyanis} name="Les Biriyanis" />
          <TemplateList products={vegetariens} name="Les Végétariens" />
          <TemplateList products={poulets} name="Les Poulets" />
          <TemplateList products={agneaux} name="Les Agneaux" />
          <TemplateList products={boeufs} name="Les Boeufs" />
          <TemplateList products={poissons} name="Les Crevettes / Poissons" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Plats;
