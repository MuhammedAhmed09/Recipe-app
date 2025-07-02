import './App.css'

//LIBRARIES
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';

//COMPONENTS
import MealList from './components/MealList';
import MealDetails from './components/MealDetails';

//PAGES
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Blog from './pages/Blog';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/recipe' element={<Recipe />} />
        <Route path='/recipe/:catName' element={<MealList />}/>
        <Route path='/meal/:mealId' element={<MealDetails/>} />
      </Routes>
    </>
  )
}

export default App
