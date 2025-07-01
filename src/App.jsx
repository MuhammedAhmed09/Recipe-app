import { useEffect, useState } from 'react'
import './App.css'

//LIBRARIES
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';

//COMPONENTS
import CategoryList from './components/CategoryList';
import MealList from './components/MealList';
import MealDetails from './components/MealDetails';

//PAGES
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Blog from './pages/Blog';

function App() {
  const [cat, setCat] = useState([]);
//FETCH CATEGORIES
  useEffect(() => {
    const URLCat = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    axios.get(URLCat)
    .then(function (response) {
      setCat(response.data.categories);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/category' element={<CategoryList categories={cat} />}/>
        <Route path='/category/:catName' element={<MealList />}/>
        <Route path='/meal/:mealId' element={<MealDetails/>} />
      </Routes>
    </>
  )
}

export default App
