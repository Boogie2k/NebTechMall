import '@/styles/globals.css'


import Layout from '@/components/Layout'
import type { AppProps } from 'next/app'
import { useState, useContext, useEffect } from 'react'
import { MyContext } from '../context/context'

export default function App({ Component, pageProps }: AppProps) {
  const[isModal, setIsModal] = useState(false)

let closeModal=()=>{
  if(isModal){
setIsModal(false)
  }
}


   const [cart, setCart] = useState([])
  return <Layout cart={cart} closeModal={closeModal} isModal={isModal} setIsModal={setIsModal} >
  <Component cart={cart} setCart={setCart}  setIsModal={setIsModal} {...pageProps} /></Layout>
  
}
