import React from 'react'

const Banner = () => {
  return (
    <section className='flex justify-evenly bg-slate-300 my-12 py-10'>
        <div>
            <h4 className='font-medium'>Fast Delivery</h4>
            <p> Delivery of all goods within 72 hours</p>
        </div>
         <div>
            <h4 className='font-medium'>Free Delivery</h4>
            <p> Enjoy free delievery on all goods purchased</p>
        </div>
           <div>
            <h4 className='font-medium'>Reliability</h4>
            <p>Our services and delievery are 100% reliable</p>
        </div>
    </section>
  )
}

export default Banner