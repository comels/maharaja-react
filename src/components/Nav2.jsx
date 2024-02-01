import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";

const company = [
  { name: "Entrées", href: "/entrees" },
  { name: "Plats", href: "/plats" },
  { name: "Desserts", href: "/desserts" },
  { name: "Formules", href: "/formules" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <img className="h-12 sm:h-16" src="logo.png" alt="" />
            {/* <h1 className="font-extrabold text-3xl sm:text-4xl sm:ml-10 text-pink-600 tracking-tight">
              {!mobileMenuOpen && "Le Maharaja"}
            </h1> */}
          </NavLink>
        </div>
        {/* Logo menu burger pour mobile */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* Menu principal */}
        <Popover.Group className="hidden md:flex md:gap-x-12">
          <Popover className="relative">
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            ></Transition>
          </Popover>
          <NavLink
            to="/"
            className="text-normal font-light leading-6 text-gray-900  hover:text-pink-600 hover:font-normal"
          >
            accueil
          </NavLink>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-normal font-light leading-6 text-gray-900 hover:text-pink-600 hover:font-normal">
              menus
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-pink-600"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                {company.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className="block rounded-lg px-3 py-2 text-sm font-light leading-6 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </Popover.Panel>
            </Transition>
          </Popover>
          <NavLink
            to="/contact"
            className="text-normal font-light leading-6 text-gray-900 hover:text-pink-600 hover:font-normal"
          >
            contact
          </NavLink>
          <a
            className="text-normal font-light leading-6 text-gray-900 hover:text-pink-600 hover:font-normal"
            href="https://deliveroo.fr/en/menu/paris/place-de-clichy/le-maharaja?day=today&time=1230"
            target="_blank"
            rel="noopener noreferrer"
          >
            livraison
          </a>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <h1 className="font-extrabold text-3xl mr-5 text-pink-600">
                Le Maharaja
              </h1>
            </NavLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 font-light leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Accueil
                </NavLink>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-light leading-7 text-gray-900 hover:bg-gray-50">
                        Menus
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 text-pink-600 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {company.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-light leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <NavLink
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </NavLink>
                <a
                  href="https://deliveroo.fr/en/menu/paris/place-de-clichy/le-maharaja?day=today&time=1230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Livraison
                </a>
              </div>
              <div className="py-6">
                <div className="flex gap-6 justify-center">
                  <a
                    href="https://www.tripadvisor.fr/Restaurant_Review-g187147-d793280-Reviews-Le_Maharaja-Paris_Ile_de_France.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="h-10" src="tripadvisor.png" alt="" />
                  </a>
                  <a
                    href="https://deliveroo.fr/en/menu/paris/place-de-clichy/le-maharaja?day=today&time=1230"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="h-10" src="deliveroo.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navigation;
