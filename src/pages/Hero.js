import React from "react";

const Hero = () => {
  return (
    <section
      id="section_1"
      className="relative h-screen flex items-center justify-center text-center text-white"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
      >
        <source src="./video/back.mp4" type="video/mp4" />
      </video>

      <div className="z-10">
        <p className="uppercase text-sm tracking-widest">Festava Live Presents</p>
        <h1 className="text-4xl md:text-6xl font-bold my-4">Drone Technology MCHJ</h1>
        <a
          href="#section_2"
          className="inline-block bg-orange-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-600 transition"
        >
          Let’s begin
        </a>

        <div className="flex flex-col md:flex-row justify-center items-center mt-10 space-y-2 md:space-y-0 md:space-x-10">
          <div className="flex items-center">
            <i className="bi bi-clock text-orange-500 mr-2"></i>
            <p>10 - 12<sup>th</sup>, Sep 2023</p>
          </div>
          <div className="flex items-center">
            <i className="bi bi-geo-alt text-orange-500 mr-2"></i>
            <p>Tashkent, Uzbekistan</p>
          </div>
          <div className="flex items-center space-x-3">
            <span>Share:</span>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-orange-500">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-orange-500">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-orange-500">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
