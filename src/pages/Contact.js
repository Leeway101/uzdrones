import React, { useState } from 'react';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('form');

  return (
    <section id="section_5" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Interested? Let's talk
        </h2>

        {/* Tablar */}
        <div className="flex justify-center mb-10">
          <div className="bg-[#e7f0fb] rounded-full p-1 flex shadow-md">
            <button
              onClick={() => setActiveTab('form')}
              className={`px-6 py-2 rounded-full text-base font-semibold transition-all ${
                activeTab === 'form'
                  ? 'bg-white text-[#fba71b] shadow-sm'
                  : 'text-gray-700'
              }`}
            >
              Contact Form
            </button>
            <button
              onClick={() => setActiveTab('map')}
              className={`px-6 py-2 rounded-full text-base font-semibold transition-all ${
                activeTab === 'map'
                  ? 'bg-white text-[#4b5563] shadow-sm'
                  : 'text-gray-700'
              }`}
            >
              Google Maps
            </button>
          </div>
        </div>

        {/* Tabs ichidagi kontent */}
        {activeTab === 'form' ? (
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full name"
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Email address"
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <input
              type="text"
              placeholder="Company"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <div className="text-center">
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-full shadow-md transition-all">
                Send message
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            <iframe
              src="https://maps.google.com/maps?q=41.29867933086266,69.3502154492661&z=14&output=embed"
              width="100%"
              height="450"
              className="rounded-xl shadow-md"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
