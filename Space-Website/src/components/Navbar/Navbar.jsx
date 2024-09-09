import React from "react";
import { Link } from "react-scroll";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-white font-bold text-2xl">
              <img src={Logo} alt="OrbitX Logo" className="w-10" />
              <span>OrbitX</span>
            </div>
            <div className="text-white hidden sm:block">
              <ul className="flex items-center gap-6 text-xl py-4">
                <li>
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="technology"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    to="galaxy"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                  >
                    Galaxy
                  </Link>
                </li>
                <li>
                  <Link
                    to="satellite"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                  >
                    Satellite
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <button
                onClick={() => window.location.href = "/login"}
                className="text-white border-2 border-white px-3 py-1 rounded-md"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
