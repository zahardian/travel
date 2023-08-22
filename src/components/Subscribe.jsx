import React from "react";

const Subscribe = () => {
  return (
    <>
      <section
        id="contact"
        data-aos="flip-up"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <div className="container px-10 pt-10 mx-auto">
          <div className="text-center">
            <h1 className="text-lg md:text-xl font-bold uppercase text-pink-800 mb-2">
              subscribe to our newsletter
            </h1>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-10">
              Prepare yourself & let's explore the beauty of the world
            </h1>
          </div>
          <div className="md:flex justify-between items-center mt-10 space-y-5 md:space-y-0 lg:space-x-10">
            <form className="">
              <div className="relative flex items-center justify-center">
                <i className="fa-solid fa-envelope absolute pointer-events-none text-lg text-slate-400 px-5 w-full"></i>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="h-14 px-12 font-bold rounded-xl focus:outline-none md:w-[500px] lg:w-[850px] bg-slate-100 w-full"
                />
              </div>
            </form>
            <button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-xl text-white font-bold w-full md:w-40 lg:w-full">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
