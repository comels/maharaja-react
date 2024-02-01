import React from "react";
import Nav2 from "../components/Nav2";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-stone-100">
      <Nav2 />
      <div className="relative">
        <img
          src="tajmahal.jpeg"
          alt="Taj Mahal"
          class="w-full max-h-[550px] object-cover"
        />
        <div class="absolute text-5xl sm:text-7xl md:text-8xl lg:text-9xl max-w-md font-extrabold leading-tight top-3 sm:top-10 right-3 sm:right-10 lg:right-32 text-stone-100 opacity-80">
          <p className="tracking-tight">வணக்கம்</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mb-10 p-10 text-justify">
        <p className="text-3xl mt-4 font-bold text-pink-600 tracking-tight">
          Spécialitées Indiennes et Sri Lankaises
        </p>
        <p className="mt-6 text-lg font-light text-justify leading-9 text-gray-800">
          Au Maharaja, notre passion est de vous emmener dans un voyage
          culinaire inoubliable, où les saveurs de l'Inde et du Sri Lanka se
          rencontrent. Chaque plat est une célébration des arômes exotiques,
          avec des ingrédients comme les poivrons épicés, le safran parfumé et
          les masalas authentiques, tous soigneusement choisis et importés des
          diverses régions du sous-continent. Découvrez un éventail de
          spécialités traditionnelles, du poulet tikka masala à l'irrésistible
          biriyani d'agneau, sans oublier le délicieux daal maakhni.
          Accompagnez-les de nan croustillant ou de riz parfumé pour une
          expérience gustative complète. Avec la qualité exceptionnelle de nos
          ingrédients et le savoir-faire de notre chef, nous vous promettons un
          moment de pur plaisir culinaire.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
