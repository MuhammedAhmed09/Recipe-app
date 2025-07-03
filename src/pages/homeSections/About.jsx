import React from 'react';
import bgAboutSection from '/image/bg-about-sec.avif'

const About = () => {
  return (
    <section className='relative bg-cover bg-center px-6 md:px-[10%] py-16 bg-white text-center' style={{backgroundImage: `url(${bgAboutSection})`}}>
        {/* overlay */}
        <div className='absolute bg-emerald-950/70 inset-0 z-0'></div>

        <div className='relative z-10 max-w-3xl mx-auto'>
            <h2 className='text-4xl font-extrabold mb-6 tracking-tight text-white drop-shadow'>About the Website</h2>
            <p className='text-gray-100 text-lg leading-relaxed drop-shadow-md'>
                Welcome to our Recipe App! Discover thousands of delicious meals from around the world. <br />
                Whether you're looking for something quick, healthy, or exotic – we've got you covered.<br />
                Start exploring, saving, and enjoying amazing recipes today!
            </p>
        </div>
    </section>
  );
};

export default About;
