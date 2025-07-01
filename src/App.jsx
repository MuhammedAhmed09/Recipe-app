import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import CategoryList from './components/CategoryList';
import MealList from './components/MealList';
import { Route, Routes } from 'react-router-dom';
import MealDetails from './components/MealDetails';

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
    <Routes>
      <Route path='/' element={<CategoryList categories={cat} />}/>
      <Route path='/category/:catName' element={<MealList />}/>
      <Route path='/meal/:mealId' element={<MealDetails/>} />
    </Routes>
  )
}

export default App
