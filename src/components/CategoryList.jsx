
import { Link } from 'react-router-dom'

const CategoryList = ({ categories }) => {

  return (
    <ul className='px-[15%] my-[2%] grid justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5'>
        {categories.map((cat) => (
            <li key={cat.idCategory} className='border cursor-pointer hover:mt-1 hover:border-gray-500 border-gray-300 rounded-2xl px-2 py-1'>
                <Link to={`/category/${cat.strCategory}`}>
                    <img src={cat.strCategoryThumb} alt={cat.strCategory} width={200}/>
                    <h3 className='font-bold'>{cat.strCategory}</h3>
                    <p>{cat.strCategoryDescription.slice(0, 100)}...</p>
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default CategoryList