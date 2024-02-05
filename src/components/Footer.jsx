const Footer = () => {
  // Composant Footer : affiche les informations de contact, les horaires et les liens vers les réseaux sociaux
  return (
    <footer className="bg-white pt-10 pb-5">
      <div className="grid sm:grid-cols-3 gap-10 items-center">
        {/* Section du logo et adresse */}
        <div className="flex flex-col mx-auto">
          <img
            className="h-5 object-contain mb-4"
            src="logo-maharaja.png"
            alt="Logo de l'entreprise"
          />
          <div className="text-center">
            <a
              href="https://www.google.fr/maps/place/Le+Maharaja+2001/@48.8862032,2.3216354,19.53z/data=!4m15!1m8!3m7!1s0x47e66fb28f550d8f:0xa109917431093c8b!2s48+Rue+la+Condamine,+75017+Paris!3b1!8m2!3d48.8862492!4d2.3220552!16s%2Fg%2F11c11mnk5y!3m5!1s0x47e66fb2858c4229:0xdacc90bb73a204f!8m2!3d48.8862369!4d2.3220858!16s%2Fg%2F12hm6xf6y?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-base text-gray-800">48 rue la Condamine</p>
              <p className="text-base mb-3 text-gray-800">Paris 75017</p>
            </a>
          </div>
          {/* Affichage des adresses de métro */}
          <div className="flex items-center">
            <img className="h-4" src="metro-13.png" alt="Métro ligne 13" />
            <p className="text-base ml-1 text-gray-800">La Fourche</p>
          </div>
          <div className="flex items-center">
            <img className="h-4" src="metro-2.png" alt="Métro ligne 2" />
            <p className="text-base ml-1 text-gray-800">Place de Clichy</p>
          </div>
        </div>
        {/* Horaires et contact */}
        <div className="flex flex-col items-center">
          <h2 className="font-semibold text-lg mb-2">Du Lundi au Samedi</h2>
          <p className="text-base mb-1 text-gray-800">12h00 - 14h00</p>
          <p className="text-base text-gray-800">19h00 - 23h00</p>
          <a href="tel:+33142949672">
            <h2 className="font-medium text-red-700 text-lg mt-5 ">
              01 42 63 83 29
            </h2>
          </a>
        </div>
        {/* Liens vers les réseaux sociaux et partenaires */}
        <div className="flex mx-auto gap-4 items-center">
          <a
            href="https://www.tripadvisor.fr/Restaurant_Review-g187147-d793280-Reviews-Le_Maharaja-Paris_Ile_de_France.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-12" src="tripadvisor.png" alt="TripAdvisor" />
          </a>
          <a
            href="https://deliveroo.fr/en/menu/paris/place-de-clichy/le-maharaja?day=today&time=1230"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-16" src="deliveroo.png" alt="Deliveroo" />
          </a>
        </div>
      </div>
      <p className="text-center mt-16 font-light text-gray-800 text-xs">
        Copyright © 2024 -{" "}
        <a
          href="https://www.linkedin.com/in/comels/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:font-normal"
        >
          Côme Le Sauter
        </a>{" "}
        - développeur web
      </p>
    </footer>
  );
};

export default Footer;
