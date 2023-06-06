
import React, { useState } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Link from 'next/link'
const queryClient = new QueryClient()
import { useRouter } from "next/router"
import ReactMarkdown from "react-markdown";


const Modal = ({tempCart,setIsModals}:any) => {
  const[isModal, setIsModal] = useState(false)

    let closeModal=()=>{
        setIsModals(false)
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


const Arrivals = ({cart, setCart, }:any) => {

 
  const[isModals, setIsModals] = useState(false)

let closeModals=()=>{
  if(isModals){
setIsModals(false)
  }
}
  return (
    <>
    <QueryClientProvider  client={queryClient}>
      {isModals && <Modal setIsModals={setIsModals}/>}
    <div onClick={closeModals}>  <Example cart={cart} setCart={setCart} setIsModals={setIsModals} closeModals={closeModals}  /></div>
    </QueryClientProvider>
   
    </>
  );
};

function Example({cart, setCart, setIsModals, closeModals}:any): any { 

  
  
 
   const [qty, setQty] = useState(1)
   const router = useRouter();
  const { id } = router.query;
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(`https://nebtechserver.onrender.com/api/v1/phone/`).then((res) =>
      res.json()
    )
  );

  if (isLoading) return (<div className='min-h-screen'><h4 className='text-red-500 w-100'>Loading...</h4></div>);

  if (error) return "An error has occurred: " + error;

  

  /* setItem(data.items) */
  /* aole.log(data.items.name) */


const filt =      data.items && data.items.filter((item:any) => item.name === id)

  let increaseQty=()=>
  {
    setQty(qty+1)
  }

  let decreaseQty=()=>{
    if(qty>1){
      setQty(qty-1)
    }else{
      setQty(1)
    }
  }
console.log(data.items)

const loadCart=()=>{
/*  cart.map((items:any)=>console.log(items)) */
  setCart([...cart, {product:data.items.name +' ' + data.items.model, qty:qty, price:data.items.price, image:data.items.image,
   total:data.items.price*qty}])
console.log(cart)

}
  return (
    <div className='lg:px-24 w-screen'>
       

      
    <div className=' grid grid-cols-5'>{filt.map((items:any)=>{ return(
     

      <div key={items._id} className=' m-2  border-gray-400 border-4 hover:border-4 hover:border-orange-700 p-7 shadow-lg' > 
 <Link href={`/phone/${items._id}`}> <img className='h-60 w-40 '  src={items.image} alt =''/> <h4 className='text-center font-bold'>{items.name} {items.model}</h4>
    </Link> <div className='flex justify-between'><p className='text-red-500 text-xl'>${items.price}</p>
  
  <svg onClick={()=>{setCart([...cart, {product:items.name +' ' + items.model, qty:qty, price:items.price, image:items.image,
   total:items.price*qty}])

setIsModals(true)
}} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-cart-plus-fill fill-white bg-orange-700" viewBox="0 0 16 16">
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
</svg></div>
   </div> 
       )}
    )}</div>
   </div>
  );
}

export default Arrivals;
