import Image from 'next/image'
import React, { useState } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Link from 'next/link'

const queryClient = new QueryClient()


const Deals = ({cart,setCart, setIsModal}:any) => {
  
  return (
     <QueryClientProvider client={queryClient}>
      <Example cart={cart} setIsModal={setIsModal} setCart={setCart}/>
    </QueryClientProvider>)
}

function Example({cart,setCart, setIsModal}:any):any {
 const [qty, setQty] = useState(1)
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://nebtechserver.onrender.com/api/v1/phone').then(res =>
      res.json()
      
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error

/* setItem(data.items) */
/* aole.log(data.items.name) */
 const filt =      data.items && data.items.filter((item:any) => item.tags === "hot deals")

console.log(data.items)
console.log(filt)
  return (
    <div className='px-4'>
   <h4 className='text-3xl font-semibold text-center my-4'>Hot Deals:</h4> 
    <div className='grid grid-cols-2 lg:flex lg:justify-evenly'>{filt.map((items:any)=>{ return(
       <div key={items._id}  className='w-50  m-2 lg:w-1/6 border-gray-400 border-4 hover:border-4 hover:border-orange-700 p-7 shadow-lg' > 
 <Link href={`/phone/${items._id}`}> <img className='h-60 w-40 '  src={items.image} alt =''/> <h4 className='text-center font-bold  text-sm'>{items.name} {items.model}</h4>
    </Link> <div className='flex justify-between  relative top-5 items-center flex-col lg:flex-row  '><p className='text-red-500 text-xl'>${items.price}</p>
  
  <div className='items-center font-semibold text-center bg-orange-700 hover:bg-orange-900 p-1 mt-1  text-center flex text-white   text-xl rounded-md cursor-pointer'>
  <svg onClick={()=>{setCart([...cart, {product:items.name +' ' + items.model, qty:qty, price:items.price, image:items.image,
   total:items.price*qty}])

setIsModal(true)
}} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-cart-plus-fill fill-white " viewBox="0 0 16 16">
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
</svg>
</div>
</div>
   </div> 
        )}
    )}</div>
    </div>
  )
}

export default Deals