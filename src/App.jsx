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
import Favorites from './pages/Favorites';

//CONTEXT 
import { FavoriteProvider } from './context/FavoritesContext';

function App() {

  return (
    <FavoriteProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/recipe' element={<Recipe />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/recipe/:catName' element={<MealList />}/>
        <Route path='/meals/:idMeal' element={<MealDetails/>} />
      </Routes>
    </FavoriteProvider>
  )
}

export default App
