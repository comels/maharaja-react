const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="grid sm:grid-cols-3 gap-10 items-center">
        <div className="flex flex-col mx-auto">
          <h2 className="font-bold text-lg text-pink-600 tracking-tight">
            Le Maharaja
          </h2>
          <a
            href="https://www.google.fr/maps/place/Le+Maharaja+2001/@48.8862032,2.3216354,19.53z/data=!4m15!1m8!3m7!1s0x47e66fb28f550d8f:0xa109917431093c8b!2s48+Rue+la+Condamine,+75017+Paris!3b1!8m2!3d48.8862492!4d2.3220552!16s%2Fg%2F11c11mnk5y!3m5!1s0x47e66fb2858c4229:0xdacc90bb73a204f!8m2!3d48.8862369!4d2.3220858!16s%2Fg%2F12hm6xf6y?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-base text-gray-800">48 rue la Condamine</p>
          
          <p className="text-base mb-3 text-gray-800">Paris 75017</p></a>
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
          <a href="tel:0142949672"><h1 className="font-medium text-pink-600 text-lg mt-5 ">01 42 63 83 29</h1></a>
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
