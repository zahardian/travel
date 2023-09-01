import React, { useState } from "react";
import { Link, animateScroll } from "react-scroll";

const Navbar = () => {
  let links = [
    { name: "Home", tag: "home" },
    { name: "Services", tag: "services" },
    { name: "Destination", tag: "destination" },
    { name: "Features", tag: "features" },
    { name: "Contact", tag: "contact" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="fixed w-full z-50 top-0">
        <div className="container mx-auto bg-slate-100 max-w-full">
          <nav className="flex justify-between items-center py-5 px-10">
            <div>
              <h1 className="text-lg md:text-xl font-bold">
                Zaza<span className="text-pink-800">travel</span>
              </h1>
            </div>
            <ul className="text-base font-semibold lg:flex hidden gap-5 text-slate-800">
              {links.map((link) => (
                <li
                  key={link.name}
                  className="hover:text-indigo-600 cursor-pointer"
                >
                  <Link smooth={true} to={link.tag}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hidden lg:block space-x-2">
              <button className="text-indigo-600 text-base border border-indigo-600 px-6 py-2 rounded-full hover:text-white hover:bg-indigo-600">
                Login
              </button>
              <button className="text-white text-base bg-indigo-600 px-6 py-2 rounded-full hover:bg-indigo-700">
                Sign Up
              </button>
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden buttonToggle text-xl"
            >
              <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </button>
          </nav>

          <div
            className={`mobileMenu ${
              open ? "block" : "hidden"
            } py-5 text-center bg-white w-full`}
          >
            <ul className="text-base font-semibold mb-5 space-y-2 text-slate-800">
              {links.map((link) => (
                <li
                  key={link.name}
                  className="hover:text-indigo-600 cursor-pointer"
                >
                  <Link smooth={true} to={link.tag}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-x-2">
              <button className="text-indigo-600 text-base border border-indigo-600 px-6 py-2 rounded-full hover:text-white hover:bg-indigo-600">
                Login
              </button>
              <button className="text-white text-base bg-indigo-600 px-6 py-2 rounded-full hover:bg-indigo-700">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
