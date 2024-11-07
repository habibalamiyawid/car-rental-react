import React from "react";
import { FaInstagram, FaFacebook, FaLocationArrow, FaMobileAlt, FaLinkedin } from "react-icons/fa";

const FooterLinks = [
  {
    title:"Home",
    link:"/#",
  },
  {
    title:"About",
    link:"/#About",
  },
  {
    title:"Contact",
    link:"/#Contact",
  },
  {
    title:"Blog",
    link:"/#Blog",
  },
]
const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <div className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3">Car Rental</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi maxime hic dignissimos!</p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Dhaka, Bangladesh</p>
            </div>

            <div className="flex items-center gap-3">
              <FaMobileAlt />
              <p>+880 123 456 789</p>
            </div>
            {/* Social Handles */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
           {/* Navlinks */}
             <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                 <div>
                   <h1>Important Links</h1>
                   <ul>
                     {
                      FooterLinks.map((data)=>{
                        return(
                          <div key={data.title}>

                          </div>
                        )
                      })
                     }
                   </ul>
                 </div>
              </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
