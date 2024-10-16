import React from 'react'

const NavLinks= 
[
  {
    id:1,
    name:"HOME",
    url:"/#"
  },
  {
    id:2,
    name:"CARS",
    url:"/#cars"
  },
  {
    id:3,
    name:"ABOUT",
    url:"/#about"
  },
  {
    id:4,
    name:"BOOKING",
    url:"/#booking"
  },

]
const Navbar = () => {
  return (
    <nav className="shadow-sm">
      <div className="container">
        <div className="flex justify-between items-center">
           <div>
              <h1 className="text-3xl font-bold font-serif">Car Rental</h1>
           </div>
           <div className="hidden md:block">
              <ul className="flex items-center gap-8">
                {NavLinks.map((data)=>(
                  <li key={data.id}>
                  <a className="inline-block py-2 hover:border-b-2 hover:text-primary
                  hover:border-primary transition-colors duration-500 text-lg font medium"
                  href={data.link}>
                    {data.name}
                  </a>
                </li>                  
                ))}


              </ul>
           </div>
        </div>
        
      </div>

    </nav>
  )
}

export default Navbar
