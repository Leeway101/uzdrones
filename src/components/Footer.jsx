import React from "react";
import {
  FaTwitter,
  FaApple,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Upper orange section */}
      <div className="bg-[#f24e1e] px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-3xl font-extrabold text-white">Uzdrones LLC</h2>
          <div className="flex gap-5 mt-4 md:mt-0 text-xl">
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaApple />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaPinterest />
            </a>
          </div>
        </div>
      </div>

      {/* Lower black section */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-12">
        {/* Links */}
        <div>
          <h5 className="text-yellow-400 text-[18px] font-bold mb-4">Links</h5>
          <div className="flex flex-wrap gap-4 text-[16px]">
            {["Home", "About", "Products", "Services", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#section_${
                    item === "Home"
                      ? 1
                      : item === "About"
                      ? 2
                      : item === "Products"
                      ? 3
                      : item === "Services"
                      ? 4
                      : 5
                  }`}
                  className="hover:text-[#f24e1e]"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>

        {/* Have a question */}
        <div>
          <h5 className="text-yellow-400 text-[18px] font-bold mb-4">
            Have a question?
          </h5>
          <p className="mb-2">+998-93-308-00-60</p>
          <p className="mb-1">info@uzdrones.com</p>
          <p>uzdrones@exat.uz</p>
        </div>

        {/* Location */}
        <div>
          <h5 className="text-yellow-400 text-[18px] font-bold mb-4">
            Location
          </h5>
          <p className="mb-3">Toshkent shahri</p>
          <a href="#" className="text-white  flex items-center w-fit ">
            <span className="mr-1">Our Maps</span>
            <svg
              className="w-4 h-4"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="16" cy="16" r="15.5" />
              <line x1="10" y1="18" x2="16" y2="12" />
              <line x1="16" y1="12" x2="22" y2="18" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
