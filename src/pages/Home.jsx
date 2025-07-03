import About from './homeSections/About';
import CTA from './homeSections/CTA';
import FeaturedCategories from './homeSections/FeaturedCategories';
import Footer from './homeSections/Footer';
import Hero from './homeSections/Hero';
import TrendingMeals from './homeSections/TrendingMeals';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <CTA />
      <TrendingMeals />
      <About />
      <Footer />
    </>
  )
}

export default Home