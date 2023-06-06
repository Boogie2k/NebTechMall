
import React, { useState } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Link from 'next/link'
const queryClient = new QueryClient()
import { useRouter } from "next/router"
import ReactMarkdown from "react-markdown";

const Arrivals = ({cart, setCart}:any) => {


  return (
    <>
    <QueryClientProvider  client={queryClient}>
      
      <Example cart={cart} setCart={setCart}   />
    </QueryClientProvider>
   
    </>
  );
};

function Example({cart, setCart}:any): any { 

  
  
 
   const [qty, setQty] = useState(1)
   const router = useRouter();
  const { id } = router.query;
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(`https://nebtechserver.onrender.com/api/v1/phone/${id}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) return (<div className='min-h-screen'><h4 className='text-red-500 w-100'>Loading...</h4></div>);

  if (error) return "An error has occurred: " + error;

  

  /* setItem(data.items) */
  /* aole.log(data.items.name) */

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
     <div className='bg-slate-50 m-4 py-2.5'><Link href='/'>Home</Link>/<Link href=''>{data.items.name}</Link></div>
     <div className='flex flex-col lg:flex-row lg:justify-between'>


      <div className='lg:w-2/4'>

     <h4 className='font-bold text-3xl '>{data.items.name} {data.items.model}</h4>  
     <img className='lg:w-2/4 ms-12' src={data.items.image} alt=''/>
      </div>
      <div className='lg:w-2/4 pl-2'>
       
       <section className='pb-6 border-b-2 border-slate-500'>
        <p className='text-red-500 pb-4 text-2xl'>
          ${data.items.price}
        </p>

      <div className='flex   w-2/4 justify-between'>  
        <div className='border-2 border-slate-200 w-2/4 flex justify-between text-2xl me-2 font-semibold'> 
       <button className='border-2 hover:bg-slate-500 border-slate-400 w-4/12 text-slate-700 ' onClick={increaseQty}>+</button> <h4 className='w-4/12 text-center '> {qty}</h4><button  className=' text-xl w-4/12 border-2 border-slate-400 hover:bg-slate-500 text-slate-700' onClick={decreaseQty}>-</button>
       </div>
        <div className='items-center font-semibold text-center bg-orange-700 hover:bg-orange-900 w-2/4 text-center flex text-white justify-center text-xl rounded-md cursor-pointer' onClick={loadCart}><svg  xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-cart-plus-fill fill-white " viewBox="0 0 16 16">
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
</svg> <span>Buy</span>  </div>
        
        </div>
       </section>
       <div className='pt-6'>
        <h4 className='font-semibold text-xl'>Specifications</h4>
        <p className='pb-4 pt-2 text-slate-500 font-bold font-serif'>
        
         <ReactMarkdown >
          
        {data.items.specs}</ReactMarkdown></p>
        </div>
         </div>
    </div></div>
  );
}

export default Arrivals;
