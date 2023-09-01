import React from "react";

const Hero = () => {
  return (
    <>
      <section id="home">
        <div className="container mx-auto px-10 py-10 mt-20 lg:pt-5">
          <div className="grid grid-cols-12 items-center">
            <div
              className="col-span-12 lg:col-span-6 order-2 lg:order-1"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div>
                <h1 className="text-center lg:text-start font-bold text-4xl md:text-5xl text-slate-800 order-2 mb-2 md:mb-4">
                  Travel
                  <span className="text-pink-800">top destination</span>
                  of the world
                </h1>
                <p className="text-center lg:text-start text-slate-600 text-base md:text-lg md:w-3/4 lg:w-full lg:mx-0 mx-auto">
                  We always make our customer happy by providing as many choices
                  as possible
                </p>
                <div className="flex flex-col gap-3 lg:gap-5 md:flex-row mt-5 md:mt-10">
                  <button className="px-6 py-3 md:px-8 md:py-4 lg:px-6 lg:py-3 border border-indigo-600 hover:shadow-xl bg-indigo-600 text-white md:mx-auto lg:mx-0 text-lg md:text-xl lg:text-lg font-bold rounded-full">
                    Get Started
                  </button>
                  <button className="px-6 py-3 md:px-8 md:py-4 lg:px-6 lg:py-3 border border-indigo-600 hover:shadow-xl text-indigo-600 md:mx-auto lg:mx-0 text-lg md:text-xl lg:text-lg font-bold rounded-full">
                    <i className="fa-solid fa-circle-play text-indigo-600"></i>
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>

            <div
              className="col-span-12 lg:col-span-6 order-1 lg:order-2 mb-5 md:mb-10"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div>
                <img
                  className="mx-auto"
                  src="/images/hero-plane.png"
                  alt="pic"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
