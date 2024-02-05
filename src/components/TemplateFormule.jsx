import React from "react";

const TemplateFormule = ({ formule }) => {
  return (
    <article className="flex flex-col bg-white p-10 rounded-xl">
      <p className="text-sm font-medium text-red-700">{formule.category}</p>
      <div className="group relative">
        <h3 className="mt-5 mb-2 text-2xl font-bold leading-6 text-gray-800">
          {formule.title}
        </h3>
        <div className="flex justify-between">
          <h2 className="mb-3 font-light">{formule.options}</h2>
          <h2>{formule.price}</h2>
        </div>
        {formule.entrees.length > 0 && (
          <>
            <h2 className="text-xl mb-2 text-red-700">Entrées au choix:</h2>
            <ul className="font-light mb-3">
              {formule.entrees.map((entree, index) => (
                <li key={index}>{entree}</li>
              ))}
            </ul>
          </>
        )}
        <h2 className="text-xl mb-2 text-red-700">Plats au choix:</h2>
        <ul className="font-light mb-3">
          {formule.plats.map((plat, index) => (
            <li key={index}>{plat}</li>
          ))}
        </ul>
        <h2 className="text-xl mb-2 text-red-700">Desserts au choix:</h2>
        <ul className="font-light mb-3">
          {formule.desserts.map((dessert, index) => (
            <li key={index}>{dessert}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default TemplateFormule;
