import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-white px-6 md:px-[10%] py-10 mt-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            
            <div>
                <img
                src="/image/logo.svg"
                alt="Sea Recipes Logo"
                className="w-full h-10 inline-block mr-2"
                />
                <p className="text-gray-400 mt-2 max-w-xs">
                    Discover recipes from around the world. Cook. Eat. Enjoy. Share the flavor!
                </p>
            </div>

            <div className="space-y-2">
                <h4 className="font-semibold text-lg">Quick Links</h4>
                <ul className="text-gray-300 space-y-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/recipe">Recipes</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </div>
        </div>

        <div className="border-t border-emerald-700 mt-8 pt-4 text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Sea Recipes. All rights reserved by <span className='font-bold text-emerald-300'><a target='__blank' href="https://muhammed-ahmed.vercel.app/">B7R</a></span>.
        </div>
    </footer>
  );
};

export default Footer;
