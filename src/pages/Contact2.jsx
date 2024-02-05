import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Example() {
  return (
    <div>
      <Nav />
      <div className="relative bg-stone-100">
        <div className="lg:absolute lg:inset-0 lg:left-1/2">
          <img
            className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
            src="guirlande.JPG"
            alt=""
          />
        </div>
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
          <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-xl sm:my-16 lg:mx-0 lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-red-700">
                Contact
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Si vous avez des questions, souhaitez effectuer une réservation
                ou planifier un événement tel qu'un anniversaire ou une réunion
                privée, n'hésitez pas à nous contacter ou à nous rendre visite
                au{" "}
                <a
                  href="https://www.google.fr/maps/place/Le+Maharaja+2001/@48.8862032,2.3216354,19.53z/data=!4m15!1m8!3m7!1s0x47e66fb28f550d8f:0xa109917431093c8b!2s48+Rue+la+Condamine,+75017+Paris!3b1!8m2!3d48.8862492!4d2.3220552!16s%2Fg%2F11c11mnk5y!3m5!1s0x47e66fb2858c4229:0xdacc90bb73a204f!8m2!3d48.8862369!4d2.3220858!16s%2Fg%2F12hm6xf6y?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-semibold text-red-700">
                    48 rue la Condamine, Paris 17e.
                  </span>
                </a>
              </p>

              <dl className="mt-10 space-y-4 text-lg leading-7 text-gray-800">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <PhoneIcon
                      className="h-7 w-6 text-red-700"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="text-gray-800 font-light"
                      href="tel:0142949672"
                    >
                      01 42 94 96 72
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <EnvelopeIcon
                      className="h-7 w-6 text-red-700"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="text-gray-800 font-light"
                      href="mailto:maharaja.restaurant.paris@gmail.com"
                    >
                      maharaja.restaurant.paris@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
