import React from "react";

const Services = () => {
  return (
    <section id="section_4" className="bg-[#f1f7fc] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-16 text-black">Services</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Fixing */}
          <div className="relative border-[4px] border-dotted border-black rounded-3xl p-8 bg-white">
            <h3 className="text-lg font-bold text-black">Fixing</h3>
            <p className="text-3xl font-bold text-black mb-4">$120</p>
            <p className="text-gray-500 mb-4">Including good things:</p>
            <div className="grid grid-cols-2 gap-x-6 text-gray-500 text-[17px]">
              <ul className="space-y-2 list-disc list-inside">
                <li>platform for potential customers</li>
                <li>digital experience</li>
              </ul>
              <ul className="space-y-2 list-disc list-inside">
                <li>high-quality sound</li>
                <li>standard content</li>
              </ul>
            </div>

            {/* Save up to 50% */}
            <div className="absolute top-1/2 -right-10 transform -translate-y-1/2">
              <div className="bg-[#f24e1e] text-white text-center rounded-full w-28 h-28 flex flex-col justify-center items-center shadow-md">
                <span className="text-sm font-semibold">Save up to</span>
                <span className="text-2xl font-bold">50%</span>
              </div>
            </div>
          </div>

          {/* Consultation */}
          <div className="border-[4px] border-dotted border-black rounded-3xl p-8 bg-white">
            <h3 className="text-lg font-bold text-black">Consultation</h3>
            <p className="text-3xl font-bold text-black mb-4">$240</p>
            <p className="text-gray-500 mb-4">We can help you with documents</p>
            <div className="grid grid-cols-2 gap-x-6 text-gray-500 text-[17px]">
              <ul className="space-y-2 list-disc list-inside">
                <li>platform for potential customers</li>
                <li>digital experience</li>
              </ul>
              <ul className="space-y-2 list-disc list-inside">
                <li>high-quality sound</li>
                <li>premium content</li>
                <li>live chat support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
