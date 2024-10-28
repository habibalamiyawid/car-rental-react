import React from 'react'

const CarList = () => {
  return (
    <div className="pb-24 pt-12 bg-white dark:bg-dark
    dark:text-white">
        <div className="container">
            {/* heading */}
           <h1 
           data-aos="fade-up"
           className="text-3xl sm:text-4xl font-semibold font-serif mb-3">
            Lorem, ipsum dolor.
           </h1>
           <p data-aos="fade-up" className='text-sm pb-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas qui quo nisi.
           </p>
           {/* Car listing cards */}
           <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
                {
                    CarList.map(()=>{
                        



                    }) 
                }

            </div>
           </div>
        </div>
    </div>
  )
}

export default CarList