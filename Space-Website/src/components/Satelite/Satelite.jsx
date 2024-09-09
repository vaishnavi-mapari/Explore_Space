import React from "react";
import satelitImg from "../../assets/satelite2.jpg";

const Rapidscat = () => {
  return (
    <>
      <section className="bg-primary text-white py-20">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            {/* Content Section */}
            <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800">
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
                RapidScat is a space-based scatterometer mission aimed at
                measuring the speed and direction of surface winds over the
                ocean. Deployed on the International Space Station, it plays a
                crucial role in improving weather predictions, tracking tropical
                cyclones, and advancing climate research.
              </p>
              <p data-aos="fade-up" data-aos-delay="800">
                By providing accurate and timely data, RapidScat helps
                meteorologists and scientists better understand atmospheric
                conditions, ensuring safer and more efficient weather forecasting.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                Learn More
              </button>
            </div>

            {/* Satellite Image */}
            <div data-aos="zoom-in">
              <img
                src={satelitImg}
                alt="RapidScat Satellite"
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
