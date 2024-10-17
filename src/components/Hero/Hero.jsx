import React from 'react';
import carPng from '../../assets/car.png';

const Hero = () => {
  return (
    <div className="dark:bg-dark dark:text-white duration-300">
       <div className="container min-h-[620px]">
         <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
            <div className="order-2 sm:order-2">
                <img src={carPng} alt="" />
            </div>
            <div className="order-1 sm:order-1">
                <p className="text-primary text-2xl font-serif">Effortless</p>
                <h1>Car Rental </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsum suscipit ea deleniti provident error distinctio architecto aut!</p>
            </div>
          
         </div>
       </div>
    </div>
  )
}

export default Hero