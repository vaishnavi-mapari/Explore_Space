import React from "react";
import sateliteImg from "../../assets/satelite1.jpg";

const Rapidscat = () => {
  return (
    <>
      <section className="bg-primary text-white pb-12">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            {/* Satellite Image */}
            <div data-aos="zoom-in">
              <img
                src={sateliteImg}
                alt="Satellite"
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                Our Mission
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                RapidScat
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                RapidScat is an advanced space mission focused on measuring ocean surface wind speeds and directions. 
                Utilizing cutting-edge scatterometry technology, RapidScat helps improve weather forecasting, climate 
                research, and our understanding of the Earth's dynamic systems.
              </p>
              <p data-aos="fade-up" data-aos-delay="800">
                Installed on the International Space Station, RapidScat provides critical data for meteorologists 
                and scientists, aiding in the monitoring of global weather patterns, tropical storms, and ocean currents.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
