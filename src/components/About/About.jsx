import React from "react";
import CarPng from "../../assets/car1.png";

const About = () => {
  return (
    <div className="dark:bg-dark dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
            <div className="grid grid-cols-1
            sm:grid-cols-2 place-items-center">
                <div>
                    <img src={CarPng} alt="" 
                    className="sm:scale-105
                    sm:-translate-x-11 max-h-[300px] drop-shadow-[]"/>
                </div>
                <div>
                 <div className="space-y-5 sm:p">
                    <h1 className="text-3xl sm:text-4xl
                    font-bold font-serif"
                    >About Us</h1>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, possimus. Aspernatur, neque. Fugit, a?
                    </p>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, earum.
                    </p>
                    <button
                        data-aos="fade-up"
                        data-aos-duration="1500" 
                
                          className="btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300">Get Started
                </button>
                 </div>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default About