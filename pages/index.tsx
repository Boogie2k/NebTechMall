import Arrivals from "@/components/Arrivals";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Deals from "@/components/Deals";
import Banner from "@/components/Banner";
import Selling from "@/components/Selling";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function Home({cart, setCart, tempCart}:any) {
const[isModal, setIsModal] = useState(false)

let closeModal=()=>{
  if(isModal){
setIsModal(false)
  }
}
  return (
   
 <section onClick={closeModal}>

  <div>
   {isModal&& <Modal setIsModal={setIsModal}/>}
 <Hero/>
  <Arrivals cart={cart} setCart={setCart} setIsModal={setIsModal}/>
  <Deals cart={cart} setCart={setCart} setIsModal={setIsModal}/>
  <Banner/>
  <Selling  cart={cart} setCart={setCart} setIsModal={setIsModal}/></div>
  
 </section>
  )
}
