import React from "react";

const Features = () => {
  return (
    <>
      <section id="features">
        <div className="container py-10 px-10 mx-auto">
          <div className="grid grid-cols-12 items-center">
            <div
              className="col-span-12 lg:col-span-6 order-2 lg:order-1"
              data-aos="fade-up-right"
              data-aos-duration="2000"
              data-aos-delay="1000"
            >
              <div className="text-center lg:text-start">
                <h1 className="text-lg md:text-xl font-bold uppercase text-pink-800 mb-2">
                  key features
                </h1>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-5">
                  We offer best services
                </h1>
                <p className="text-lg text-slate-600">
                  Your travel memories and stories are a top priority for us. We
                  make sure that the whole process of your vacation goes well
                  and is unforgettable.
                </p>
              </div>
              <div className="space-y-10 mt-10 text-center md:text-start">
                <div className="md:flex gap-5 items-center">
                  <i className="fa-solid fa-location-dot pt-2 mb-4 md:mb-0 text-2xl h-12 w-12 text-center text-white rounded-full bg-orange-700"></i>
                  <div>
                    <h1 className="text-xl font-bold text-slate-800">
                      We offer best services
                    </h1>
                    <p className="text-lg text-slate-600">
                      Your travel memories and stories are a top priority for
                      us.
                    </p>
                  </div>
                </div>
                <div className="md:flex gap-5 items-center">
                  <i className="fa-solid fa-calendar-days pt-2 mb-4 md:mb-0 text-2xl h-12 w-12 text-center text-white rounded-full bg-orange-700"></i>
                  <div>
                    <h1 className="text-xl font-bold text-slate-800">
                      Schedule your trip
                    </h1>
                    <p className="text-lg text-slate-600">
                      Your travel memories and stories are a top priority for
                      us.
                    </p>
                  </div>
                </div>
                <div className="md:flex gap-5 items-center">
                  <i className="fa-solid fa-ticket pt-2 mb-4 md:mb-0 text-2xl h-12 w-12 text-center text-white rounded-full bg-orange-700"></i>
                  <div>
                    <h1 className="text-xl font-bold text-slate-800">
                      Get discounted coupons
                    </h1>
                    <p className="text-lg text-slate-600">
                      Your travel memories and stories are a top priority for
                      us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-span-12 lg:col-span-6 order-1 lg:order-2 mb-10 md:mb-0"
              data-aos="fade-up-left"
              data-aos-duration="2000"
              data-aos-delay="1000"
            >
              <img
                className="lg:h-[550px] mx-auto"
                src="/images/feauture.png"
                alt="pic-feature"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
