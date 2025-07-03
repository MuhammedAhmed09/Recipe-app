import { Link } from 'react-router-dom'

const CategoryList = ({ categories }) => {
  return (
    <>
      <h1 className="text-3xl md:text-4xl text-emerald-700 font-bold my-10 text-center">Choose a Meal Category</h1>

      <ul className='px-[5%] py-[5%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6'>
        {categories.map((cat) => (
            <li 
              key={cat.idCategory} 
              className='bg-white border border-gray-200 rounded-xl shadow-md p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-emerald-50 cursor-pointer'
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
    </>
  )
}

export default CategoryList