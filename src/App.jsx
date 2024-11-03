import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CarList from "./components/CarList/CarList";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Contact from "./components/Contact/Contact";

import AOS from 'aos';
import "aos/dist/aos.css";
import Testimonial from "./components/Testimonial/Testimonial";


const App = () => {

  // Dark Mode Feature
  const [theme, setTheme] = React.useState
  ( 
    localStorage.getItem("theme") ? 
    localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  useEffect(() => {
    if(theme === "dark"){
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }else{
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    
  }, [theme]);

  //AOS Initialization
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
      delay: 100,

    });
    AOS.refresh();
  },[]);



  return (
    <div>  
        {/* className="bg-white dark:bg-dark dark:text-white duration-300" */}
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero theme={theme} />
      <About/>
      <Services/>
      <CarList/>
      <Testimonial/>
      <AppStoreBanner/>
      <Contact/>
    </div>
  )
}

export default App
