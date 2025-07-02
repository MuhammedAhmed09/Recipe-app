import React from 'react';
import heroMeal from '/image/hero-meal.jpeg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="bg-emerald-950 text-white py-20 px-8 md:px-[15%] md:gap-2 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover Delicious Recipes
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Find meals that match your taste. Simple, quick, and tasty!
        </p>
        <Link to='/category' >
          <button className="bg-white text-emerald-900 font-semibold px-6 py-3 rounded-2xl hover:bg-emerald-400 hover:text-white cursor-pointer transition-colors duration-300">
            Explore Now
          </button>
        </Link>
      </div>

      <div className="md:w-1/2">
        <img src={heroMeal} alt="Delicious meal served on a plate" className="w-full rounded-xl" />
      </div>
    </section>
  )
}

export default Home