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
                au <strong>48 rue la Condamine, 75017 Paris</strong> !
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
