import Head from "next/head"
import Link from "next/link"
import Nav from "./Nav"
import Footer from "./Footer"
import { useEffect, useState } from "react"


export default function Layout({children,cart}:any) {
  const [isMenu,setIsMenu] = useState(false)

  let openMenu=()=>{
    setIsMenu(true)
  }
   let closeMenu=()=>{
    setIsMenu(false)
  }
  

  useEffect(() => {
    window.addEventListener('resize', closeMenu)
  
    
  }, [])
  
  return (
    <>
    <Head> 
      <title>
        NebTechMall
      </title>
     <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" ></link>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
<link rel="icon" type="image/svg+xml" href="/images/icon.jpg" />
    </Head>
    <div className={`${isMenu?' fixed':''}`}>
    <section className='flex lg:block  '>
   <div className={`${isMenu?'lg:opacity-100  overflow-hidden opacity-50 pointer-events-none overflow-hidden':''} ${"lg:transform-none  overflow-hidden  "}`}>
     <Nav openMenu={openMenu} cart={cart}/>
    <div >{children}</div></div>
    <div className= {`${isMenu?'lg:hidden z-10  block':'hidden'} ${"  mx-0 lg:hidden  fixed right-0 text-white transition-all duration-500 delay-500"}`}>
<div className=" flex flex-col  bg-slate-500">
  <div onClick={closeMenu} className=" py-4    px-10  text-center text-right border-b-2 border-slate-400 cursor-pointer"  >X </div>
   <Link className="hover:bg-orange-500 py-4    px-10  text-center  border-b-2 border-slate-400" href='#'>Iphones </Link>
 <Link  className="hover:bg-orange-500 py-4  text-center px-  border-b-2 border-slate-400 " href='#'>Samsung</Link>
 <Link  className="hover:bg-orange-500 py-4 text-center px-10  border-b-2 border-slate-400"  href='#'>Tecno </Link>
 <Link  className="hover:bg-orange-500 py-4 text-center px-10  border-b-2 border-slate-400" href='#'>Collections</Link></div>
  </div>  
    </section>
  <Footer/></div>
    </>
  )
}