import React from 'react';
import ctaBg from '/image/bg-cta.jpg'

const CTA = () => {
  return (
    <section
      className="relative bg-cover bg-center mt-16 px-6 md:px-[10%] py-20 text-white text-center"
      style={{ backgroundImage: `url(${ctaBg})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4 drop-shadow">🍽️ Ready to cook something new?</h2>
        <p className="text-lg mb-6 text-gray-100 drop-shadow-md">
          Discover trending meals and start your next cooking adventure today!
        </p>
        <button className="bg-white cursor-pointer text-emerald-700 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-800 hover:text-white transition duration-300">
          Explore Recipes
        </button>
      </div>
    </section>
  );
};

export default CTA;
