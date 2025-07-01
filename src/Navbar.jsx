import React from 'react'
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

// import whiteLogo from '/image/whitecustomlogo.svg'
import blackLogo from '/image/blackcutomlogo.svg'

const navItems = {
    links: [
        {path: '/', component: 'Home'},
        {path: '/category', component: 'Recipe'},
        {path: '/blog', component: 'Blog'},
    ]
}

const Navbar = () => {
    const [selectedLink, setSelectedLink] = React.useState(0);    
    const [isOpen, setIsOpen] = React.useState(false);

    const handleLinkClick = (index) => {
        setSelectedLink(index);
        setIsOpen(false)
    }

    const handleBarsClick = () => {
        setIsOpen(prev => !prev)
    }

  return (
    <nav className="bg-emerald-300 text-white shadow-2xl py-2 px-4 sm:px-8 md:px-[10%] lg:px-[15%]">
        <div className="flex items-center justify-between w-full">
            <Link to='/'>
                <img src={blackLogo} width={150} alt="logo"/>
            </Link>

            <div className='2xl:text-2xl flex items-center'>
                <button className='lg:hidden mr-4' onClick={handleBarsClick}>
                    <p className='font-bold text-2xl'>
                        {isOpen ? <IoClose/> : <FaBars/>}
                    </p>
                </button>

                <ul className={`${isOpen ? ' flex flex-col absolute top-20 left-0 w-full h-[50vh] justify-evenly bg-emerald-400 p-4 rounded-b-xl z-10 ' : 'hidden'} lg:flex lg:flex-row lg:static lg:bg-transparent`}>
                    {navItems.links.map((item, index) => (
                        <li 
                            key={index} 
                            className={`${selectedLink === index ? 'bg-white text-emerald-700 font-bold' : ' hover:bg-emerald-400'} px-4 py-1 mx-4 rounded-2xl`}  >
                            <Link to={item.path} onClick={() => handleLinkClick(index)}>{item.component}</Link>
                        </li>
                    ))}
                </ul>
                {/* Auth */}
                <div className="hidden lg:block ml-4">
                    <h2>Auth</h2>
                </div>
            </div>
        </div>

        {/* Auth in mobile */}
        {isOpen && (
            <div className="lg:hidden mt-2 text-center">
            <h2>Auth</h2>
            </div>
        )}
    </nav>
  )
}

export default Navbar