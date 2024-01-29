import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
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
              Nous contacter
            </p>
            <p className="mt-6 text-base font-light text-justify leading-8 text-gray-800">
              Si vous avez des questions, souhaitez effectuer une réservation,
              ou planifier un événement tel qu'un anniversaire ou une réunion
              privée, n'hésitez pas à nous contacter. Nous sommes à votre
              disposition pour vous aider à organiser vos moments importants
              avec une touche de cuisine indienne authentique. Pour toute
              demande vous pouvez nous appeler, nous envoyer un email ou remplir
              ce formulaire et nous vous répondrons rapidement. Nous sommes
              impatients de vous accueillir chez nous.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <PhoneIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900 font-light"
                    href="tel:+336 66 67 96 88"
                  >
                    01 42 94 96 72
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <EnvelopeIcon
                    className="h-7 w-6 text-gray-400"
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
          className="mx-10 object-contain rounded-lg"
          src="plat-1.jpeg"
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
