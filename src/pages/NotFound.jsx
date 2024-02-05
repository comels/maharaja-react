import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 grid place-items-center bg-stone-100 px-6 lg:px-8">
          <div className="text-center">
            <p className="text-6xl font-bold text-red-700">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-800 sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-6 text-2xl leading-7 text-gray-600">
              பக்கம் கிடைக்கவில்லை
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <NavLink
                to="/"
                className="rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
              >
                Retour à l'accueil
              </NavLink>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
