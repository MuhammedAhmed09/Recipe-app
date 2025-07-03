import heroMeal from '/image/hero-meal.jpeg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section
      className="relative min-h-[90vh] bg-cover bg-center flex items-center justify-center px-6 md:px-[10%] py-16 lg:py-24"
      style={{ backgroundImage: `url(${heroMeal})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-emerald-950 opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center md:text-left max-w-4xl flex flex-col items-center md:items-start">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight animate-fade-in-down">
          Discover <span className="text-emerald-300">Delicious</span> Recipes
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          Explore hundreds of tasty meals from around the world. Simple to cook, hard to forget.
        </p>
        <Link to='/recipe'>
          <button className="bg-white cursor-pointer text-emerald-700 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-800 hover:text-white transition duration-300">
            Explore Recipes 🍽️
          </button>
        </Link>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>

  );
};

export default Home;
