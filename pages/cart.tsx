import Link from 'next/link';
import React from 'react'

const Cart = ({cart, setCart}:any) => {


let decreaseQty;

const removeItem = (itemId: string) => {
  
  };

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

  
  
  <section className=' lg:w-2/4   lg:mx-auto' >
   
<div className=' hidden lg:flex justify-between mb-4 font-semibold text-lg'><h4 className='w-1/5 text-center'>item</h4> <h4 className='w-1/5'>Price</h4> <h4 className='w-1/5'>Qty</h4> <h4 className='w-1/5'>Total</h4> <span className='w-1/5'></span></div>
{
  cart.map((items:any)=>{

    return(
    
      <div key={items._id} className={`${' lg:flex justify-between  font-sans  mb-4 ps-4 lg:ps-0 items-center'} ${'bg-slate-300'}`}>
        <h4 className='lg:w-1/5 text-left lg:text-center'> <span className='lg:hidden me-2 font-bold'>Item:</span> {items.product}</h4> 
        <h4 className='lg:w-1/5 text-left lg:text-center'><span className='lg:hidden me-2   font-bold'>Price:</span>{items.price.toLocaleString()}</h4>
         <div className=' lg:w-1/5 font-semibold  text-left lg:text-center'><span className='lg:hidden  me-2  font-bold'>Qty:</span>
          <button onClick={()=>{  const updatedCart = cart.map((item: any) => {
      if (item.id === items.id) {
        return {
          ...item,
          qty: item.qty + 1,
        };
      }
      return item;
    });
    setCart(updatedCart);}} className='border-2 hover:bg-slate-500 border-slate-400  text-slate-700 text-xl me-2 w-12' >+</button>
    {items.qty}
           <button onClick={()=>{  const updatedCart = cart.map((item: any) => {
      if (item.id === items.id && item.qty>1) {
        return {
          ...item,
          qty: item.qty - 1,
        };
      }
      return item;
    });
    setCart(updatedCart);}} className='border-2 hover:bg-slate-500 border-slate-400 w-4/12 text-slate-700 text-xl ms-2 w-12' >-</button>
          </div> 
         <h4 className='lg:w-1/5 text-left lg:text-center'><span className='lg:hidden me-2  font-bold'>Total</span>{items.total.toLocaleString()}</h4>
      <div  className='w-1/5 text-left  lg:text-center  border-2 border-slate-700 text-red-500 hover:text-red-700 hover:bg-slate-500'><button onClick={()=>{   const updatedCart = cart.filter((item: any) => item.id !== items.id);
    setCart(updatedCart);}}>Remove</button> </div>
        </div>

        
    )
  })
}
 <div className='  flex justify-between mt-6 font-semibold text-lg'>
        <h4 className='lg:w-1/5 text-center '></h4> 
        <h4 className='lg:w-1/5'>Order Total</h4>
       <h4 className='lg:w-1/5'>{totalQty}</h4> 
        <span className='lg:w-1/5'>{totalPrice.toLocaleString()}</span>
        <span className='lg:w-1/5'></span></div>
  </section>
  <div className=' text-right lg:w-2/4 mt-5 mx-auto'>
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