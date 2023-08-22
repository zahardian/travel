import React from "react";

const Point = () => {
  return (
    <>
      <section>
        <div className="container px-10 md:mb-10 mx-auto">
          <div className="grid grid-cols-12 items-center">
            <div
              className="col-span-12 lg:col-span-6 mb-10 md:mb-0"
              data-aos="fade-up-right"
              data-aos-duration="2000"
              data-aos-delay="1000"
            >
              <img
                className="w-full drop-shadow-[12px_12px_7px_rgba(0,0,0,0.7)]"
                src="./src/assets/image/plane.png"
                alt=""
              />
            </div>
            <div
              className="col-span-12 lg:col-span-6 text-center lg:text-start"
              data-aos="fade-up-left"
              data-aos-duration="2000"
              data-aos-delay="1000"
            >
              <div>
                <h1 className="text-lg md:text-xl font-bold uppercase text-pink-800">
                  travel point
                </h1>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-5">
                  We helping you find your dream location
                </h1>
                <p className="text-lg text-slate-600">
                  Your travel memories and stories are a top priority for us. We
                  make sure that the whole process of your vacation goes well
                  and is unforgettable.
                </p>
                <div className="mt-10 text-center">
                  <div className="md:flex justify-around">
                    <div className="space-y-2 mb-10">
                      <h1 className="text-3xl font-bold text-orange-700">
                        500+
                      </h1>
                      <h1 className="text-lg">Holiday Package</h1>
                    </div>
                    <div className="space-y-2 mb-10">
                      <h1 className="text-3xl font-bold text-orange-700">
                        100
                      </h1>
                      <h1 className="text-lg">Luxury Hotel</h1>
                    </div>
                  </div>
                  <div className="md:flex justify-around">
                    <div className="space-y-2 mb-10">
                      <h1 className="text-3xl font-bold text-orange-700">7</h1>
                      <h1 className="text-lg">Premium Airlines</h1>
                    </div>
                    <div className="space-y-2 mb-10">
                      <h1 className="text-3xl font-bold text-orange-700">
                        2k+
                      </h1>
                      <h1 className="text-lg">Happy Customer</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Point;
