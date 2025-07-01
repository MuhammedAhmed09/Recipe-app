import React from 'react';

import B7R from '/image/B7R0.jpg'

const Home = () => {
  return (
    <div className='flex justify-center align-middle p-4 bg-emerald-950 h-[100vh]'>
      <a target="_blank" href="https://www.instagram.com/3mr___7e/">
        <img src={B7R} alt="B7R" width={350} />
        <p className='font-bold text-3xl'>عشان انته تخين وعجل عملتلك دا</p>
      </a>
    </div>
  )
}

export default Home