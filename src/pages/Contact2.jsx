import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Nav2 from "../components/Nav2";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-stone-100">
      <Nav2 />

      <div className="grid justify-items-center mx-10 mb-10 items-center grid-cols-1 lg:grid-cols-2">
        <div className="md:px-10 md:py-24 py-10">
          <div className="mx-auto max-w-xl">
            <p className="font-extrabold text-2xl sm:text-3xl mt-4 text-pink-600 tracking-tight">
              Contact
            </p>
            <div>
              <p className="mt-6 text-lg font-light text-justify leading-9 text-gray-800">
                Si vous avez des questions, souhaitez effectuer une réservation,
                ou planifier un événement tel qu'un anniversaire ou une réunion
                privée, n'hésitez pas à nous contacter, ou à nous rendre visite
                au{" "}
                <a
                  href="https://www.google.fr/maps/place/Le+Maharaja+2001/@48.8862032,2.3216354,19.53z/data=!4m15!1m8!3m7!1s0x47e66fb28f550d8f:0xa109917431093c8b!2s48+Rue+la+Condamine,+75017+Paris!3b1!8m2!3d48.8862492!4d2.3220552!16s%2Fg%2F11c11mnk5y!3m5!1s0x47e66fb2858c4229:0xdacc90bb73a204f!8m2!3d48.8862369!4d2.3220858!16s%2Fg%2F12hm6xf6y?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-semibold text-pink-600">
                    48 rue la Condamine, 75017 Paris
                  </span>
                </a>{" "}
                !
              </p>
            </div>
            <dl className="mt-10 space-y-4 text-lg leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <PhoneIcon
                    className="h-7 w-6 text-pink-600"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900 font-light"
                    href="tel:0142949672"
                  >
                    01 42 94 96 72
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <EnvelopeIcon
                    className="h-7 w-6 text-pink-600"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900 font-light"
                    href="mailto:come.l.s@hotmail.fr"
                  >
                    maharaja.restaurant.paris@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <img
          className="mx-10 object-contain rounded-lg max-h-96 max-w-screen"
          src="plat-1.jpeg"
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
