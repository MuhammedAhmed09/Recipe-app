import './App.css'

//LIBRARIES
import { Route, Routes, useLocation } from 'react-router-dom';
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
import { Toaster } from 'react-hot-toast';
import SignUp from './pages/authentication/SignUp';
import Login from './pages/authentication/Login';
import ForgotPassword from './pages/authentication/ForgotPassword';

function App() {
    const location = useLocation();

  // الصفحات اللي مش عايز يظهر فيها الـ Navbar
  const hideNavbarRoutes = ['/login', '/signup', '/forgot-password'];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname.toLowerCase());

  return (
    <FavoriteProvider>
      <Toaster position='bottom-right' reverseOrder={false} />
      {shouldShowNavbar && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/recipe' element={<Recipe />} />
        <Route path='/recipe/:catName' element={<MealList />}/>
        <Route path='/meals/:idMeal' element={<MealDetails/>} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/blog' element={<Blog />}/>
      </Routes>
      <Routes>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/forgot-password' element={<ForgotPassword />}/>
      </Routes>
    </FavoriteProvider>
  )
}

export default App
