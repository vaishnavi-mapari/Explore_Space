// src/components/MainContent.jsx
import React from "react";

const MainContent = () => {
  return (
    <div className="container mt-20">
      {/* About Section */}
      <section id="about" className="py-16">
        <h2 className="text-4xl font-bold text-white">About OrbitX</h2>
        <p className="text-lg text-gray-300 mt-4">
          OrbitX is dedicated to exploring the universe, focusing on satellite
          technology and space exploration. Our mission is to provide innovative
          solutions for communication, navigation, and scientific discovery.
        </p>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-16">
        <h2 className="text-4xl font-bold text-white">Our Technology</h2>
        <p className="text-lg text-gray-300 mt-4">
          We utilize cutting-edge satellite technology to provide reliable and
          efficient services for a variety of applications, including weather
          monitoring, navigation, and scientific research.
        </p>
      </section>

      {/* Galaxy Section */}
      <section id="galaxy" className="py-16">
        <h2 className="text-4xl font-bold text-white">Explore the Galaxy</h2>
        <p className="text-lg text-gray-300 mt-4">
          Discover the wonders of the galaxy with our advanced telescopic
          technology. From distant stars to nearby planets, our tools offer
          unprecedented views of the cosmos.
        </p>
      </section>

      {/* Satellite Section */}
      <section id="satellite" className="py-16">
        <h2 className="text-4xl font-bold text-white">Our Satellite Fleet</h2>
        <p className="text-lg text-gray-300 mt-4">
          Our fleet of satellites provides a wide range of services, from Earth
          observation to global communication. Learn more about our innovative
          satellite designs and capabilities.
        </p>
      </section>
    </div>
  );
};

export default MainContent;
