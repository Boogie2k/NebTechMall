import React from 'react'

const Modal = ({tempCart, setIsModal}:any) => {
  

    let closeModal=()=>{
        setIsModal(false)
    }
  return (
    <div> <section className='bg-slate-400 fixed z-10 top-0 right-0 px-6 text-white flex flex-col justify-between '>
    <div> <div className='text-right flex justify-end '><h4 onClick={closeModal} className='bg-red-500 text-center mb-2 border-2 border-red-700 w-1/4 hover:bg-red-700 cursor-pointer' > X</h4></div>
    <h4 className='mb-2 font-semibold'>Item has been added to cart!</h4> 
    <h4 className='text-center mb-2 bg-orange-700 font-semibold hover:bg-red-900 cursor-pointer'>Proceed to Cart</h4>
    </div>
    
  </section>
</div>
  )
}

export default Modal