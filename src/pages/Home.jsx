import React from "react";
import Nav2 from "../components/Nav2";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-stone-100">
      <Nav2 />

      <div className="grid justify-items-center mx-10 mb-20 items-center grid-cols-1 lg:grid-cols-2">
        <div className="px-10 py-24">
          <div className="mx-auto max-w-xl">
            <p className="text-2xl mt-4 font-bold text-orange-600">
              Spécialitées Indiennes et Sri Lankaises
            </p>
            <p className="mt-6 text-base font-light text-justify leading-8 text-gray-800">
              Au Maharaja, notre passion est de vous emmener dans un voyage
              culinaire inoubliable, où les saveurs de l'Inde et du Sri Lanka se
              rencontrent. Chaque plat est une célébration des arômes exotiques,
              avec des ingrédients comme les poivrons épicés, le safran parfumé
              et les masalas authentiques, tous soigneusement choisis et
              importés des diverses régions du sous-continent. Découvrez un
              éventail de spécialités traditionnelles, du poulet tikka masala à
              l'irrésistible biriyani d'agneau, sans oublier le délicieux daal
              maakhni. Accompagnez-les de nan croustillant ou de riz parfumé
              pour une expérience gustative complète. Avec la qualité
              exceptionnelle de nos ingrédients et le savoir-faire de notre
              chef, nous vous promettons un moment de pur plaisir culinaire.
            </p>
          </div>
        </div>
        <img className="mx-10 object-contain rounded-lg" src="plat-2.avif" alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
