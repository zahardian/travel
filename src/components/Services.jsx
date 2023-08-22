import React from "react";

const Services = () => {
  return (
    <>
      <section id="services">
        <div className="container mx-auto py-20 px-10 lg:mb-20">
          <div className="grid grid-cols-12 items-center">
            <div
              className="lg:col-span-4 col-span-12 flex flex-col gap-2 text-center lg:text-start"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <span className="text-pink-800 text-lg md:text-xl uppercase font-bold">
                Services
              </span>
              <h1 className="text-slate-800 text-3xl md:text-4xl font-bold">
                Our top value categories for you
              </h1>
            </div>
            <div className="lg:col-span-8 col-span-12 md:flex gap-5 space-y-5 md:space-y-0 mt-10 lg:mt-0">
              <div
                className="flex flex-col text-center justify-center items-center gap-5 md:w-[350px] border rounded-xl p-8 shadow-xl"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <div>
                  <img
                    src="./src/assets/image/service-icon-1.svg"
                    alt="icon-service"
                    className="w-20 h-20"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-slate-800 text-lg font-bold">
                    Best Tour Guide
                  </h1>
                  <p className="text-slate-600 text-lg">
                    what looked like a small patch of purple grass, above five
                    fast
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col text-center justify-center items-center gap-5 md:w-[350px] border rounded-xl p-8 shadow-xl"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                <div>
                  <img
                    src="./src/assets/image/service-icon-2.svg"
                    alt="icon-service"
                    className="w-20 h-20"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-slate-800 text-lg font-bold">
                    Easy Booking
                  </h1>
                  <p className="text-slate-600 text-lg">
                    Square, was moving across the sand in their direction.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col text-center justify-center items-center gap-5 md:w-[350px] border rounded-xl p-8 shadow-xl"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="1500"
              >
                <div>
                  <img
                    src="./src/assets/image/service-icon-3.svg"
                    alt="icon-service"
                    className="w-20 h-20"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-slate-800 text-lg font-bold">
                    Weather Forecast
                  </h1>
                  <p className="text-slate-600 text-lg">
                    what looked like a small patch of purple grass, above five
                    feet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
