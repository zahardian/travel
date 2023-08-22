import React from "react";

const Footer = () => {
  return (
    <>
      <section>
        <div className="container pt-40 md:max-w-full">
          <div className="grid grid-cols-12 lg:gap-20 md:gap-10 px-10 md:px-16 py-5 text-center md:text-start bg-slate-100">
            <div
              className="col-span-12 md:col-span-6 space-y-5 mb-10"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h1 className="text-lg md:text-xl font-bold">
                Zaza<span className="text-pink-800">travel</span>
              </h1>
              <p className="text-lg text-slate-600">
                Your travel memories and stories are a top priority for us. We
                make sure that the whole process of your vacation goes well and
                is unforgettable.
              </p>
              <div className="flex gap-5 items-center md:justify-start justify-center">
                <a href="#">
                  <i className="fa-brands fa-facebook-f text-xl bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-full"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter text-xl bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-2 rounded-full"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram text-xl bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-2 rounded-full"></i>
                </a>
              </div>
            </div>
            <div
              className="col-span-12 md:col-span-6 md:flex justify-evenly md:space-x-5"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="space-y-5 mb-10">
                <h1 className="text-xl font-bold text-slate-800">Company</h1>
                <p className="text-lg text-slate-600 cursor-pointer hover:text-slate-800">
                  About
                </p>
                <p className="text-lg text-slate-600 cursor-pointer hover:text-slate-800">
                  Career
                </p>
                <p className="text-lg text-slate-600 cursor-pointer hover:text-slate-800">
                  Mobile
                </p>
              </div>
              <div className="space-y-5 mb-10">
                <h1 className="text-xl font-bold text-slate-800">Contact</h1>
                <p className="text-lg text-slate-600 cursor-pointer hover:text-slate-800">
                  Why Travlog?
                </p>
                <p className="text-lg text-slate-600 cursor-pointer hover:text-slate-800">
                  Partner with us
                </p>
                <p className="text-lg text-slate-600 cursor-pointer hover:text-slate-800">
                  Blog
                </p>
              </div>
              <div className="space-y-5">
                <h1 className="text-xl font-bold text-slate-800">Meet Us</h1>
                <p className="text-lg text-slate-600 cursor-pointer hover:text-slate-800">
                  +00 978 548 372
                </p>
                <p className="text-lg text-slate-600 cursor-pointer hover:text-slate-800">
                  info@travlog.com
                </p>
                <p className="text-lg text-slate-600 cursor-pointer hover:text-slate-800">
                  205. R street, New York
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
