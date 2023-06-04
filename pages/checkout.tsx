import React from 'react'
import Payment from '@/components/Payment'
const checkout = ({cart}:any) => {
  return (
   <section className='min-h-screen w-screen p-10 flex flex-col justify-center lg:flex-row lg:justify-evenly '>
    <div className='text-center lg:hidden'>
   <CheckoutIems cart={cart}/></div>
    <div className='text-center lg:text-left'>
   <Payment cart={cart}/>
</div><div className='hidden lg:block text-center '>
   <CheckoutIems cart={cart}/></div>
   </section>
  )
}


const CheckoutIems=({cart}:any)=>{
    let totalPrice =0;
let totalQty=0;

  cart.map((item:any)=>{
totalPrice += item.total
totalQty +=item.qty
  })
return(<>
         
<table className="table-auto border-separate border-spacing-10">
  {cart.map((items:any)=>{
            console.log(items)
            return(<tbody>
    <tr>
     <td className='border-2 border-red-900'>{items.product}</td>
     <td className=''>{items.price}</td>
       <td className=' '>{items.qty}</td>
         
         <td className=''>{items.total}</td>
       
    </tr></tbody>)})}

      <tr>
      <th className=' '></th>
      <th className=' '>Total</th>
       <th  className=''></th>
       <th  className=' '>{totalPrice}</th>
    </tr>
  </table>


</>)
}

export default checkout