import React from 'react';
import car from "../../../assets/images/rider-car-1.png";
import '../Home.css'
const Banner = () => {
    return (
      <div className='benar'>
      <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
        <img className="" src={car} alt='car' />
        </div>
        <div className='lg:w-1/4' >
          <h1 className="text-5xl font-bold">Best & Largest Car</h1>
          <p className="py-6">Are you planning on buying a new car? Well, we know that with so many options available out there, it gets really difficult to find a good car which suits your need.</p>
          <button>Get Started</button>
        </div>
      </div>
    </div>
      </div>
    );
};

export default Banner;