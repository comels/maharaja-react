const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="grid sm:grid-cols-3 gap-10 items-center">
        <div className="flex flex-col mx-auto">
          <h2 className="font-bold text-lg text-pink-600 tracking-tight">
            Le Maharaja
          </h2>
          <p className="text-base text-gray-800">48 rue la Condamine</p>
          <p className="text-base mb-3 text-gray-800">Paris 75017</p>
          <div className="flex items-center">
            <img className="h-4" src="metro-13.png" alt="" />
            <p className="text-base ml-1 text-gray-800">La Fourche</p>
          </div>
          <div className="flex items-center">
            <img className="h-4" src="metro-2.png" alt="" />
            <p className="text-base ml-1 text-gray-800">Place de Clichy</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-lg mb-2">Du Lundi au Samedi</h1>
          <p className="text-base mb-1 text-gray-800">12h00 - 14h00</p>
          <p className="text-base text-gray-800">19h00 - 23h00</p>
        </div>

        <div className="flex mx-auto gap-4 items-center">
          <a
            href="https://www.tripadvisor.fr/Restaurant_Review-g187147-d793280-Reviews-Le_Maharaja-Paris_Ile_de_France.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-12" src="tripadvisor.png" alt="" />
          </a>
          <a
            href="https://deliveroo.fr/en/menu/paris/place-de-clichy/le-maharaja?day=today&time=1230"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-16" src="deliveroo.png" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
