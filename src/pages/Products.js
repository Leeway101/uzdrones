import React from "react";

const products = [
  {
    title: "DJI Air 3S (DJI RC 2)",
    price: "$1,599",
    img: "/images/product-1.png",
    features: [
      "Free Panorama, Seamless and Detailed",
      "Nightscape Omnidirectional Obstacle Sensing",
      "45-Min Flight Time, 20km Video Transmission",
    ],
  },
  {
    title: "DJI Avata 2 (Single Battery)",
    price: "$999",
    img: "/images/product-2.png",
    features: [
      "1/1.3-inch Image Sensor",
      "Built-in Propeller Guard",
      "Binocular Fisheye Visual Positioning",
    ],
  },
  {
    title: "DJI Mini 4 Pro (DJI RC 2)",
    price: "$959",
    img: "/images/product-3.png",
    features: [
      "4K/60fps HDR True Vertical Shooting",
      "20km FHD Video Transmission",
      "ActiveTrack 360°",
    ],
  },
];

const Products = () => {
  return (
    <section id="section_3" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-12">Our products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-md overflow-hidden bg-gradient-to-b from-[#FFC107] to-[#FFECB3]"
            >
              <div
                className="h-64 bg-no-repeat bg-center bg-contain"
                style={{
                  backgroundImage: `url(${product.img})`,
                }}
              ></div>
              <div className="p-6">
                <p className="text-sm text-gray-700 uppercase tracking-wider mb-1">Drones</p>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h4>
                <p className="text-gray-900 mb-4">USD {product.price}</p>
                <p className="text-sm text-gray-800">
                  <span className="font-bold">Details:</span>{" "}
                  {product.features.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
