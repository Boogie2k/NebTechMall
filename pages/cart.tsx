import Link from 'next/link';
import React from 'react'

const Cart = ({cart}:any) => {
  let totalPrice =0;
let totalQty=0;

  cart.map((item:any)=>{
totalPrice += item.total
totalQty +=item.qty
  })
    console.log(cart)
    console.log(cart[2])
  return (


    
    <div className='w-screen pb-10  min-w-full '>
        <h4 className='text-3xl font-medium text-center my-10 underline decoration-orange-500'>Shopping Cart</h4>


{totalPrice?
        <div className='flex text-center flex-col justify-center align-center  '>

          
{/* <table className="table-auto border-separate  border-spacing-5 lg:border-spacing-10  w-2/4 mx-auto">
  <thead>
    <tr>
      <th className=''>Item</th>
     
      <th  className=''>price</th> 
      <th className=' '>qty</th>
       <th  className=''>Total</th>
    </tr>
  </thead>{cart.map((items:any)=>{
            console.log(items)
            return(<tbody>
    <tr>
     <td className=''>{items.product}</td>
     <td className=''>{items.price}</td>
       <td className=' '>{items.qty}</td>
         
         <td className=''>{items.total}</td>
          <td>remove</td>
    </tr></tbody>)})}

      <tr>
      <th className=' '></th>
      <th className=' '>Order Total</th>
       <th  className=''>{totalQty}</th>
       <th  className=' '>{totalPrice}</th>
    </tr>
   
  </table>
  
  
  */
  
  <section className=' lg:w-2/4   lg:mx-auto' >
   
<div className=' hidden lg:flex justify-between mb-4 font-semibold text-lg'><h4 className='w-1/5 text-center'>item</h4> <h4 className='w-1/5'>Price</h4> <h4 className='w-1/5'>Qty</h4> <h4 className='w-1/5'>Total</h4> <span className='w-1/5'></span></div>
{
  cart.map((items:any)=>{

    return(
    
      <div key={items._id} className={`${' lg:flex justify-between  font-sans  mb-4 ps-4 lg:ps-0'} ${'bg-slate-300'}`}>
        <h4 className='lg:w-1/5 text-left lg:text-center'> <span className='lg:hidden  font-bold'>Item:</span> {items.product}</h4> 
        <h4 className='lg:w-1/5 text-left lg:text-center'><span className='lg:hidden  font-bold'>Price:</span>{items.price}</h4>
         <h4 className='lg:w-1/5 text-left lg:text-center'><span className='lg:hidden  font-bold'>Qty:</span>{items.qty}</h4> 
         <h4 className='lg:w-1/5 text-left lg:text-center'><span className='lg:hidden  font-bold'>Total</span>{items.total}</h4>
      <div className='w-1/5 text-left  lg:text-center  border-2 border-red-700'>Remove</div>
        </div>

        
    )
  })
}
 <div className='  flex justify-between mt-6 font-semibold text-lg'>
        <h4 className='lg:w-1/5 text-center '></h4> 
        <h4 className='lg:w-1/5'>Order Total</h4>
         <h4 className='lg:w-1/5'>{totalQty}</h4> 
        <span className='lg:w-1/5'>{totalPrice}</span>
        <span className='lg:w-1/5'></span></div>
  </section>
  }<div className=' text-right lg:w-2/4 mt-5 mx-auto'>
<Link href='/checkout' className='bg-orange-600 lg:w-1/4 text-right me-0  text-slate-200 text-xl p-3 rounded-2xl '>Proceed to Checkout</Link>

</div>
        </div>:<div className='flex flex-col justify-center content-center  '>
          <h4 className='text-center'>Shopping Cart is Empty</h4>
          
          
          <Link className='text-center bg-lime-500 w-1/4 mx-auto mt-5' href='/' >Go Shopping!!!</Link>
          </div>}
 
      
        
      
    </div>
  )
}

export default Cart