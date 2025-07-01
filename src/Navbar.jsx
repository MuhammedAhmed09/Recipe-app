import React from 'react'
import { Link } from 'react-router-dom'

const navItems = {
    links: [
        {path: '/', component: 'Home'},
        {path: '/category', component: 'Recipe'},
        {path: '/blog', component: 'Blog'},
    ]
}

const Navbar = () => {
    const [openNav, setOpenNav] = React.useState(false);
    const [selectedLink, setSelectedLink] = React.useState(0);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);


    

  return (
    <nav className='bg-emerald-300 text-white shadow-2xl items-center py-2 px-[15%]'>
        {!openNav ? (
            <ul className='w-full flex 2xl:text-2xl justify-center'>
            {navItems.links.map((item, index) => (
                <li key={index} className={selectedLink == index ? 'px-4 py-1 mx-4 bg-emerald-400 rounded-2xl' : 'px-4 py-1 mx-4 hover:bg-emerald-400 rounded-2xl'}  onClick={() => setSelectedLink(index)} >
                    <Link to={item.path}>{item.component}</Link>
                </li>
            ))}
        </ul>
        ): (
            <h3>bars</h3>
        )}
        
    </nav>
  )
}

export default Navbar