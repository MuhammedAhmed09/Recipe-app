import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';

const navItems = {
    links: [
        {path: '/', component: 'Home'},
        {path: '/recipe', component: 'Recipe'},
        {path: '/favorites', component: 'Favorites'},
        {path: '/blog', component: 'Blog'},
    ]
}

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [user, setUser] = React.useState('');
    const location = useLocation();    
    const navigate = useNavigate();

    const handleBarsClick = () => {
        setIsOpen(prev => !prev)
    }

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (err) {
            alert('Error signing out');
            console.log(err.message);
        }
    } 

      // متابعة حالة تسجيل الدخول
    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

  return (
    <nav className="bg-emerald-950 text-white shadow-2xl py-2 px-4 sm:px-8 md:px-[10%] lg:px-[15%] ">
        <div className="flex items-center justify-between w-full py-2">
            <Link to='/'>
                <img src='/image/logo.svg' width={150} alt="logo"/>
            </Link>

            <div className='flex items-center'>
                <button className='lg:hidden mr-4' onClick={handleBarsClick}>
                    <p className='font-bold text-2xl'>
                        {isOpen ? <IoClose/> : <FaBars/>}
                    </p>
                </button>

                <ul className={`${isOpen ? ' flex flex-col absolute top-20 left-0 w-full h-[50vh] justify-evenly bg-emerald-950 opacity-90 p-4 rounded-b-xl z-100' : 'hidden'} transition-transform duration-300 lg:flex lg:flex-row lg:static lg:bg-transparent`}>
                    {navItems.links.map((item, index) => (
                        <li 
                            key={index} 
                            className={`${(item.path === '/' ? location.pathname === '/' : location.pathname === item.path || location.pathname.startsWith(item.path + '/')) ? "bg-white text-emerald-700 font-bold shadow" : 'text-white hover:bg-emerald-600'} px-4 py-1 mx-2 rounded-2xl transition font-medium`}  >
                            <Link to={item.path} onClick={() => setIsOpen(false)}>{item.component}</Link>
                        </li>
                    ))}
                </ul>
                
                {/* Auth */}
                <div className="hidden lg:flex gap-4 ml-4">
                    {user ? (
                        <button 
                            onClick={handleLogout}
                            className='bg-red-500 cursor-pointer text-white px-4 py-1 rounded hover:bg-red-600 transition'
                        >
                            Logout
                        </button>
                    ) : (    
                        <>
                            <Link className='hover:underline' to={'/login'}>Login</Link>
                            <Link className='hover:underline' to={'/signup'}>Sign Up</Link>
                        </>
                    )}
                </div>
            </div>
        </div>

        {/* Auth in mobile */}
        {isOpen && (
            <div className="lg:hidden -mt-2 text-center py-2">
                {user ? (
                    <button 
                        onClick={handleLogout}
                        className='bg-red-500 cursor-pointer text-white px-4 py-1 rounded hover:bg-red-600 transition'
                    >
                        Logout
                    </button>
                ) : (    
                    <>
                        <Link className='mx-2' to={'/login'}>Login</Link>
                        <Link to={'/signup'}>Sign Up</Link>
                    </>
                )}
            </div>
        )}
    </nav>
  )
}

export default Navbar