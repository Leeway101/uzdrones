import React from "react";

const About = () => {
  return (
    <section id="section_2" className="bg-[#0c1e3c] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            The "Drone Technology" LLC was re-registered in September 2023 in Jizzakh.
          </h2>
          <p className="text-lg leading-relaxed">
            Its primary activities include studying new technologies related to unmanned aerial
            vehicles (drones), establishing production, providing maintenance services, organizing
            training in accordance with the legislation of the Republic of Uzbekistan using light
            drones, and consulting services for preparing documents for ministries, agencies, and
            organizations with special permits in the prescribed manner.
          </p>
        </div>
        <div>
         <img
  src="/images/about-us.jpeg"
  alt="About Uzdrones"
  className="rounded-xl shadow-lg"
/>
        </div>
      </div>
    </section>
  );
};

export default About;
