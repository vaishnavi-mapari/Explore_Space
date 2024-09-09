import React from "react";
import wave from "../../assets/wave Gif.gif";
import { FaReact, FaSatelliteDish, FaGlobe, FaRocket } from "react-icons/fa"; // Corrected imports for icons
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";

const ServiceData = [
  {
    title: "Geostationary Satellite",
    content: "35,786 km",
    description:
      "Remains fixed above a point on the equator, used for communication and weather monitoring.",
    icon: <FaSatelliteDish className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "Low Earth Orbit Satellite",
    content: "200-2,000 km",
    description:
      "Used for Earth observation, scientific missions, and some communication services.",
    icon: <FaGlobe className="text-7xl" />,
    aosDelay: "500",
  },
  {
    title: "Space Probe",
    content: "Varies",
    description:
      "Unmanned spacecraft sent beyond Earth's orbit to explore other planets and celestial bodies.",
    icon: <FaRocket className="text-7xl" />,
    aosDelay: "700",
  },
];

const HeroCard = () => {
  return (
    <section className="bg-primary">
      <div className="container mx-auto py-10">
        <div className="min-h-[400px] relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {ServiceData.map((data, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
              >
                {data.icon}
                <h1 className="font-semibold">{data.title}</h1>
                <p className="text-lg">{data.content}</p>
                <p className="text-sm">{data.description}</p>
              </div>
            ))}
          </div>
          <img
            src={wave}
            alt="Wave Background"
            className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 absolute bottom-0 left-0"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroCard;
