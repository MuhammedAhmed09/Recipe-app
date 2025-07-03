import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const FeaturedCategories = () => {
    const [featuredCat, setFeaturedCat] = useState([]);

    useEffect(() => {
        const URLCat = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        axios.get(URLCat)
            .then(function (response) {
                setFeaturedCat(response.data.categories.slice(0, 5));
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

  return (
    <section className='px-6 md:px-[10%] py-16 bg-white'>
        <h2 className='text-3xl font-bold text-center mb-10'>Featured Categories</h2>
        <ul className='px-[5%] py-[5%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6'>
            {featuredCat.map((cat) => (
                <li     
                    key={cat.idCategory}
                    className='bg-white border  border-gray-200 rounded-xl shadow-md p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-emerald-50 cursor-pointer '
                >
                    <Link to={`/recipe/${cat.strCategory}`}>
                    <img
                        src={cat.strCategoryThumb} 
                        alt={cat.strCategory} 
                        title={cat.strCategory}
                        className='w-full rounded-md mb-3'
                    />
                    <h3 className='text-xl font-bold text-emerald-700'>{cat.strCategory}</h3>
                    <p className='text-gray-600'>{cat.strCategoryDescription?.slice(0, 80)}...</p>

                    </Link>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default FeaturedCategories