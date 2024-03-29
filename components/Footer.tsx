import React from 'react'

const Footer = () => {
  return (
   <footer className='bg-slate-700 flex flex-col lg:flex-row justify-evenly py-5' >
    <div className='lg:w-1/5 mb-4 lg:mb-0 '><h4 className='text-white'>© NebTech</h4>
    <p>This website and its contents are provided as is and as available without any warranty or representations of any kind, whether express or implied. Price and availability information is subject to change without notice.</p>
    </div>

    <div className='lg:w-1/5 mb-4 lg:mb-0 flex flex-col'>
        <h4>Most popular</h4>

<a href=''>iPhone cases</a>
<a href=''>iPad cases</a>
<a href=''>Cases for Samsung</a>
<a href=''>Collections</a>
    
    </div>
     <div className='lg:w-1/5 mb-4 lg:mb-0 flex flex-col'>
        <h4>Most popular</h4>

<a href=''>iPhone cases</a>
<a href=''>iPad cases</a>
<a href=''>Cases for Samsung</a>
<a href=''>Collections</a>
    
    </div>

     <div className='lg:w-1/5 mb-4 lg:mb-0 flex flex-col'>
        <h4>Most popular</h4>

<a href=''>iPhone cases</a>
<a href=''>iPad cases</a>
<a href=''>Cases for Samsung</a>
<a href=''>Collections</a>
    
    </div>
   </footer>
  )
}

export default Footer