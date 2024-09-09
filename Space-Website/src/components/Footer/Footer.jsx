import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white">
      <section className="max-w-[1200px] mx-auto py-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* First column */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Stay Informed</h1>
            <p className="text-gray-400">
              Subscribe to receive the latest news and updates about our exciting space ventures directly in your inbox.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                className="py-2 px-4 w-full md:w-2/3 border-2 border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                type="email"
                placeholder="Email"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md mt-2 md:mt-0">
                Subscribe
              </button>
            </div>
          </div>

          {/* Second column */}
          <div className="grid grid-cols-2 gap-4 md:gap-8 md:pl-10">
            <div>
              <h2 className="text-xl font-bold">Links</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#home" className="hover:text-orange-500">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-orange-500">About</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-orange-500">Services</a>
                </li>
                <li>
                  <a href="#login" className="hover:text-orange-500">Login</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold">Contact Us</h2>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <HiLocationMarker className="text-orange-500" />
                  <p>Chh. Sambhajinagar, Maharashtra</p>
                </div>
                <div className="flex items-center gap-3">
                  <MdMessage className="text-orange-500" />
                  <p>xyz@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <MdCall className="text-orange-500" />
                  <p>+91 123456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <span className="text-sm text-gray-400">
              &copy; 2024 Space Travel. All rights reserved.
            </span>
            <div className="flex items-center justify-center gap-6 mt-4 md:mt-0">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
            <span className="text-sm text-gray-400 mt-4 md:mt-0">
              <ul className="flex gap-4 justify-center md:justify-end">
                <li>
                  <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-white transition-colors">Terms & Conditions</a>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
