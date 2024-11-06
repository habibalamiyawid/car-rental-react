import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <div className="container">
        <div className="grid md:grid-cols-3 py-5">
             {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="text-xl sm:text-3xl font-bold
            sm:text-left text-justify mb-3"
            >Car Rental</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi maxime hic dignissimos!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer