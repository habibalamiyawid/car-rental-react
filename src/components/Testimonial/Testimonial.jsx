import React from 'react'

const Testimonial = () => {
  return (
    <div className="dark:bg-black dark:text-white
    py-14 sm:pb-24">
      <div className="container">
          {/* header */}
          <div className="space-y-4 pb-12">
            <p className="text-3xl font-semibold
            text-center sm:text-4xl font-serif">
             What Our Client Say About Us</p>
            <p data-aos="fade-up"
            className="text-center sm:px-44">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam aspernatur quaerat vitae nesciunt in.{" "}
            </p>
          </div>
          {/* card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-black dark:text-white">
            {
                testimonialData.map((data) =>{

                })
            }

          </div>
      </div>
    </div>
  )
}

export default Testimonial