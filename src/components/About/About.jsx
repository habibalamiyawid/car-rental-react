import React from "react";
import CarPng from "../../assets/car1.png";

const About = () => {
  return (
    <div className="dark:bg-dark dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
            <div className="grid grid-cols-1
            sm:grid-cols-2 place-items-center">
                <div>
                    <img src={CarPng} alt="" />
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
                 </div>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default About